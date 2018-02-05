class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include SessionsHelper
 
  private
  
      # Confirms a logged-in user. method is here because it is used invusers, microposts and relationships controller
      def logged_in_user
        unless logged_in?
          store_location
          flash[:danger] = "Please log in."
          redirect_to login_url
        end
      end

        # Before filters

    
      # Confirms the correct (logged-in) user. the admin is always the correct user.
      def correct_user
        @user = User.find(params[:id])
        unless current_user?(@user) || current_user.admin?
          flash[:danger] = "It is not possible to access other users diaries"
          redirect_to(root_url) 
        end  
        
      end

      def admin_user
        redirect_to(root_url) unless current_user.admin?
      end
  
  

end