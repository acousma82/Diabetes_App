class DiabetesSetting < ApplicationRecord
    belongs_to :user
    validates :zero_till_one, :one_till_two, :two_till_three, :three_till_four, :four_till_five, :five_till_six, :six_till_seven, :seven_till_eight, :eight_till_nine, :nine_till_ten, :ten_till_eleven,         :eleven_till_twelve, :twelve_till_thirteen, :thirteen_till_fourteen, :fourteen_till_fifteen, :fifteen_till_sixteen, :sixteen_till_seventeen, :seventeen_till_eightteen, :eightteen_till_nineteen, :nineteen_till_twenty, :twenty_till_twentyone, :twentyone_till_twentytwo, :twentytwo_till_twentythree, :twentythree_till_zero, presence: true

    validates :bs_min, :bs_max, :bs_target, :correction_number, numericality: { only_integer: true }
    validates :correction_insulin, numericality: {true
    validates :bs_min {less_than:  }
    validates :bs_max {greater_than: :bs_min}
    validates :bs_target {less_than: :bs_max}
    validates :bs_target {greater_than: :bs_min}



    private

    def bs_min_is_less_than_bs_max
        if bs_min.present? && bs_min < bs_max
            errors.add :base, "Bloodsugar Minimum must be higher than blood sugar maximum"
        end
    end

    def bs_max_is_greater_than_bs_min
        if bs_max.present? && bs_max < bs_min
            errors.add :base, "Bloodsugar maximum must be higher than blood sugar minimum"
        end
    end

    def bs_target_is_greater_than_bs_min
        if bs_target.present? && bs_target < bs_min
            errors.add :base, "Bloodsugar target value must be higher than blood sugar minimum"
        end
    end

    def bs_target_is_less_than_bs_max
        if bs_target.present? && bs_target > bs_max
            errors.add :base, "Bloodsugar target value must be lower than blood sugar maximum"
        end
    end

end

  