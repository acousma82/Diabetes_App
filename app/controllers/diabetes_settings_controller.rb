class DiabetesSettingsController < ApplicationController
    
     #before filter
     before_action :logged_in_user, only: [:new, :create] 
     before_action :correct_user,   only: [:new, :create]
  

    def new
        @user = User.find(params[:user_id])
        @curr_factors = @user.bu_factors.last || []
        @bu_factor = @user.bu_factors.build
        @diabetes_settings = @user.diabetes_settings.last
        @diabetes_setting = @user.diabetes_settings.build
    end

    def create
        @diabetes_settings= current_user.diabetes_settings.build(diabetes_setting_params)   
        if @diabetes_settings.save
          flash[:success] = "Bloodsugar and Correction Rule updated"
          redirect_to new_user_diabetes_setting_path
        else
          flash.now[:danger] = "Blood Sugar and Correction Rule couldn't be updated"
          render "new"
        end
    end
private
        def diabetes_setting_params
            params.require(:diabetes_setting).permit(:bs_min, :bs_max, :bs_target, :correction_number, :correction_insulin)
        end

        # Before filters

    
        # Confirms the correct (logged-in) user. the admin is always the correct user.
        def correct_user
            @user = User.find(params[:user_id])
            unless current_user?(@user) || current_user.admin?
            flash[:danger] = "It is not possible to access other users diaries"
            redirect_to(root_url) 
            end  
        
        end

        def admin_user
            redirect_to(root_url) unless current_user.admin?
        end
end
