module SessionsHelper

  # Logs in the given user.
  def log_in(user)
    session[:user_id] = user.id
  end

# Returns true if the given user is the current user.
  def current_user?(user)
    user == current_user
  end
  
  # Returns the current logged-in user (if any).
  # Returns the user corresponding to the remember token cookie.
  def current_user
    #wenn es eine temp session gibt wird die user id  von der temp session genommen
    if (user_id = session[:user_id])
      @current_user ||= User.find_by(id: user_id)
    #wenn es keine temp session gibt wird nach einer persistent session gesucht also nach dem cookie mit user_id und der lokalen Variablen user_id übergeben 
  elsif (user_id = cookies.signed[:user_id])
    #wenn die id vorhanden ist wird mit ihr dieser user in der Datenbank gesucht und zurückgegeben und in  user gespeichert      
      user = User.find_by(id: user_id) 
      if user && user.authenticated?(:remember, cookies[:remember_token])  #wenn der user nicht nil ist und der remember token zum digest passt wird der user eingeloggt, wenn nicht gibt die methode nil zurück.
        log_in user
        @current_user = user
      end
    end
  end


 # Returns true if the user is logged in, false otherwise. Is used i
  def logged_in?
   !current_user.nil?
  end

  # Forgets a persistent session.
  def forget(user)
    user.forget
    cookies.delete(:user_id)
    cookies.delete(:remember_token)
  end

# Logs out the current user.
  def log_out
    forget(current_user)
    session.delete(:user_id)
    @current_user = nil
  end

# Remembers a user in a persistent session.
  def remember(user)
    user.remember # remember methode wird aufgerufen. user bekommt token und remember digest
    cookies.permanent.signed[:user_id] = user.id  #we’ll use a signed cookie, which securely encrypts the cookie before placing it on the browser. we should make it permanent(expire after 20 years) as well, which we can do by chaining the signed and permanent methods
    cookies.permanent[:remember_token] = user.remember_token #der remember_token wird ebenfalls "permanent"" im cookie gespeichert
  end

   # Redirects to stored location (or to the default).
  def redirect_back_or(default)
    redirect_to(session[:forwarding_url] || default)
    session.delete(:forwarding_url)
  end

  # Stores the URL trying to be accessed.
  def store_location
    session[:forwarding_url] = request.original_url if request.get?
  end
  
  

end