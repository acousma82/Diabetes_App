class User < ApplicationRecord
    attr_accessor :remember_token
    before_save { self.email = email.downcase }

    
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
  def authenticated?(remember_token)
    BCrypt::Password.new(remember_digest).is_password?(remember_token)
  end

  # Forgets a user.
  def forget
    update_attribute(:remember_digest, nil)
  end   
end
