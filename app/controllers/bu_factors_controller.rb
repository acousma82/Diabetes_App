class BuFactorsController < ApplicationController
     
     #before_filter
     before_action :logged_in_user, only: [:create] 
     before_action :correct_user,   only: [:create]
     before_action :autofill_bu_factors, only: [:create]
     
  
  def create
    @bu_factors = current_user.bu_factors.build(@bu_factor_params)   
    if @bu_factors.save
      flash[:success] = "Bu Factors updated"
      redirect_to new_user_diabetes_setting_path
    else
      flash[:danger] = "Bu Factors couldn't be updated"
      render "diabetes_settings/new", :locals => { :user =>  @user = @current_user, 
                                                   :bu_factor => @bu_factor = @bu_factors,
                                                   :diabetes_setting => @diabetes_setting = @current_user.diabetes_settings.build, 
                                                   :curr_factor => @curr_factors = @user.bu_factors.last, 
                                                   :diabetes_settings => @diabetes_settings = @user.diabetes_settings.last}
    end
  end


  private
      def bu_factor_params
        params.require(:bu_factor).permit(:zero_till_one, :one_till_two, 
        :two_till_three, :three_till_four, :four_till_five, :five_till_six, 
        :six_till_seven, :seven_till_eight, :eight_till_nine, :nine_till_ten, 
        :ten_till_eleven, :eleven_till_twelve, :twelve_till_thirteen, 
        :thirteen_till_fourteen, :fourteen_till_fifteen, :fifteen_till_sixteen, 
        :sixteen_till_seventeen, :seventeen_till_eightteen, :eightteen_till_nineteen, 
        :nineteen_till_twenty, :twenty_till_twentyone, :twentyone_till_twentytwo, 
        :twentytwo_till_twentythree, :twentythree_till_zero)
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

      def autofill_bu_factors
        @bu_factor_params = bu_factor_params
        bu_factor_hash = bu_factor_params.to_h
        factor_array = bu_factor_hash.values
        bu_factor_hash.each_with_index do |(time, factor), index|
          @bu_factor_params[time] = factor_array[get_factor(index)]
        end
        @bu_factor_params
      end

      def get_factor(index)
        factor_array = bu_factor_params.to_h.values
        index = 23 if index < 0
        return index unless factor_array[index].blank?

        return get_factor(index -1)
      end

      def admin_user
        redirect_to(root_url) unless current_user.admin?
      end

end
