class DiabetesSetting < ApplicationRecord
    belongs_to :user
    validates :user_id, presence: true
    validates :bs_min, :bs_max, :bs_target, :correction_number, numericality: { only_integer: true, allow_nil: true }, presence: :true
    validates :user_id, presence: true
    validates :correction_insulin, numericality: :true
    validate :bs_min_is_less_than_bs_max
    validate :bs_max_is_greater_than_bs_min
    validate :bs_target_is_greater_than_bs_min
    validate :bs_target_is_less_than_bs_max



    private

    def bs_min_is_less_than_bs_max
        if bs_min.present? && bs_min > bs_max
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

  