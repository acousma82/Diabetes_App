class BuFactorsController < ApplicationController
  
  
  def create
    @bu_factors = current_user.bu_factors.build(bu_factor_params)   
    if @bu_factors.save
      flash[:success] = "Bu Factors updated"
      redirect_to edit_diabsettings_path(current_user)
    else
      redirect_to edit_diabsettings_path(current_user)
    end
  end

  private
  def bu_factor_params
    params.require(:bu_factor).permit(:zero_till_one, :one_till_two, :two_till_three, :three_till_four, :four_till_five, :five_till_six, :six_till_seven, :seven_till_eight, :eight_till_nine, :nine_till_ten, :ten_till_eleven, :eleven_till_twelve, :twelve_till_thirteen, :thirteen_till_fourteen, :fourteen_till_fifteen, :fifteen_till_sixteen, :sixteen_till_seventeen, :seventeen_till_eightteen, :eightteen_till_nineteen, :nineteen_till_twenty, :twenty_till_twentyone, :twentyone_till_twentytwo, :twentytwo_till_twentythree, :twentythree_till_zero)
  end

end
