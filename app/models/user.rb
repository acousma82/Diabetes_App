class User < ApplicationRecord
  has_many :diary_entries, dependent: :destroy
    attr_accessor :remember_token, :activation_token, :reset_token
    before_save :downcase_email
    before_create :create_activation_digest

    
    validates :name, presence: true, length: { maximum: 50 }
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  
    validates :email, presence: true, length: { maximum: 255 },
                      format: { with: VALID_EMAIL_REGEX },
                      uniqueness: { case_sensitive: false }
    # Adds methods to set and authenticate against a BCrypt password. This mechanism requires you to have a password_digest attribute.
    #fügt die authenticate Methode für den user hinzu so das
    #man mit Hilfe von user.authenticate("password") herausfinden kann ob das eingegebene Passwort stimmt.
    #fügt in diesem Zusammenhang die virtuellen attribute password und password_confirmation hinzu inklusive validierungen und methoden dass 
    #diese beiden einander gleichen müssen.
    has_secure_password  
    # allow nil true weil has secure password schaut ob der benutzer ein passwort hat das nicht leer ist 
    #und damit man beim updaten eines Users das Passwortfeld leer lässt.
    validates :password, presence: true, length: { minimum: 6 }, allow_nil: true 
    #validates :zero_till_one, :one_till_two, :two_till_three, :three_till_four, :four_till_five, :five_till_six, :six_till_seven, :seven_till_eight, :eight_till_nine, :nine_till_ten, :ten_till_eleven,         :eleven_till_twelve, :twelve_till_thirteen, :thirteen_till_fourteen, :fourteen_till_fifteen, :fifteen_till_sixteen, :sixteen_till_seventeen, :seventeen_till_eightteen, :eightteen_till_nineteen, :nineteen_till_twenty, :twenty_till_twentyone, :twentyone_till_twentytwo, :twentytwo_till_twentythree, :twentythree_till_zero, presence: true
    # Returns the hash digest of the given string.
  def User.digest(string)
    cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                  BCrypt::Engine.cost
    BCrypt::Password.create(string, cost: cost)
  end

  # Returns a random token.
  def User.new_token
    SecureRandom.urlsafe_base64
  end

  # Remembers a user in the database for use in persistent sessions.
  def remember
    self.remember_token = User.new_token
    update_attribute(:remember_digest, User.digest(remember_token))
  end
  # Returns true if the given token matches the digest.
  def authenticated?(attribute, token)
    digest = send("#{attribute}_digest")
     # when digest nil ist soll die methode false zurückgeben damit Bcrypt keinen Fehler hervorrufen kann, wenn man sich bei zwei BRowsern eingeloggt hat und sich nur bei einem abmeldet, aber beide schließt.
    return false if digest.nil?
    BCrypt::Password.new(digest).is_password?(token) #takes a token, hashes it and compares it to the original hash_digest from the database. If hash_digest of given token is equal to the one saved in the database, authenticatedß returns true.
  end

  # Forgets a user.
  def forget
    update_attribute(:remember_digest, nil)
  end   

  def activate
  update_columns(activated: true, activated_at: Time.zone.now)
  end
# Sends activation email.
  def send_activation_email
    UserMailer.account_activation(self).deliver_now
  end

# Sets the password reset attributes.
  def create_reset_digest
    self.reset_token = User.new_token
    update_attribute(:reset_digest,  User.digest(reset_token))
    update_attribute(:reset_sent_at, Time.zone.now)
  end

  # Sends password reset email.
  def send_password_reset_email
    UserMailer.password_reset(self).deliver_now
  end

  # Returns true if a password reset has expired.
  def password_reset_expired?
    reset_sent_at < 2.hours.ago
  end

  def diary
    DiaryEntry.where("user_id = ?", id)
  end

private

    # Converts email to all lower-case.
    def downcase_email
      email.downcase
    end

    # Creates and assigns the activation token and digest.
 
    def create_activation_digest
      self.activation_token  = User.new_token
      self.activation_digest = User.digest(activation_token)
    end


  end