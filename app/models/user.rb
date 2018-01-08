class User < ApplicationRecord

    validates :name, presence: true, length: { maximum: 50 }
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  
    validates :email, presence: true, length: { maximum: 255 },
                      format: { with: VALID_EMAIL_REGEX },
                      uniqueness: { case_sensitive: false }
  #    Adds methods to set and authenticate against a BCrypt password. This mechanism requires you to have a       password_digest attribute.
    #has_secure_password #fügt die authenticate Methode für den user hinzu so das man mit Hilfe von user.authenticate("password") herausfinden kann ob das eingegebene Passwort stimmt. fügt das virtuelle attribute password hinzu. 
    #validates :password, presence: true, length: { minimum: 6 }, allow_nil: true # allow nil tue weil has secure password shaut ob der benutzer ein passwort hat das nicht leer ist und damit man beim updaten eines Users das Passwortfeld leer lässt.
  
end
