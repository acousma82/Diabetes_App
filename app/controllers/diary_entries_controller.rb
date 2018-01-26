class DiaryEntriesController < ApplicationController
    
    def new
        @bu_factors = current_user.bu_factors
        @bs_settings = current_user.diabetes_settings
        gon.bu_factors = @bu_factors.to_json
    end
    
    def create
        @diary_entry = current_user.diary_entries.build(diary_entry_params)
        if @diary_entry.save
            flash.now[:success] = "A new Diary entry was created!"
            redirect_to current_user
        else
            flash.now[:danger] = "Diary entry could not be created!"
            render 'new'
        end
    end
    
    def update
    end
    
    def destroy
    end
    
    private
    
    def diary_entry_params
        params.require(:diary_entry).permit(:comment, :insulin, :bloodsugar, :carbohydrates)
    end
    
end
    
    