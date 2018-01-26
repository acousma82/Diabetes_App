class DiabetesSettingsController < ApplicationController
    
    def new
        #diabetes settings view with two buttons to create a new settings
    end

    def create
        #create a new diabetes setting
    
private

    params.require(:diabetes_setting).permit(:bs_min, :bs_max, :bs_target, :correction_number, :correction_insulin)

end
