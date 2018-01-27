class DiabetesSettingsController < ApplicationController
    
    def new
        #diabetes settings view with two buttons to create a new settings
    end

    def create
        @diabetes_settings= current_user.diabetes_settings.build(diabetes_setting_params)   
        if @diabetes_settings.save
          flash[:success] = "Bloodsugar and Correction Rule updated"
          redirect_to edit_diabsettings_path(current_user)
        else
          flash[:danger] = "Blood Sugar and Correction Rule couldn't be updated"
          redirect_to edit_diabsettings_path(current_user)
        end
    end
private
    def diabetes_setting_params
        params.require(:diabetes_setting).permit(:bs_min, :bs_max, :bs_target, :correction_number, :correction_insulin)
    end
end
