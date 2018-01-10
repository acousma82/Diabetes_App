class SessionsController < ApplicationController
  def new #rendert die login seite
  end
# erstellt nach erfolgreichem Login die Sesssion(Sitzung/Browsersitzungen) welche die User Id als temporären Cookie auf dem Rechner des Nutzers speichert. Dadurch sind die Informationen welcher nutzer sich gerade authentifiziert hat über mehrere http request verfügbar. Solange bis der User sich wieder auslogt. anders ausgedrückt: web applications requiring user login must use a session,which is a semi-permanent connection between two computers (such as a client computer running a web browser and a server running Rails).
  def create 
   @user = User.find_by(email: params[:session][:email].downcase) #holt den user aus der Datenbank mit Hilfe der eingegbenen E-MAil Adresse
   
   if @user && @user.authenticate(params[:session][:password]) #schaut ob das eingegeben passwort mit dem gespeicherten passwort übereinstimmt, diese aktion wird nur aufgerufen, wenn der user existiert

#if @user.activated?
        log_in @user
        
        params[:session][:remember_me] == '1' ? remember(@user) : forget(@user)
        redirect_back_or @user
      #else
       # message  = "Account not activated. "
       # message += "Check your email for the activation link."
       # flash[:warning] = message
       # redirect_to root_url
     # end

    else
      flash.now[:danger] = 'Invalid email/password combination'
      render 'new'
    end
    
  end
  def destroy
   log_out if logged_in?
    redirect_to root_url
  end

    
end
