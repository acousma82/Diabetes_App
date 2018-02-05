class DiabetesSettingsController < ApplicationController
    
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
end
