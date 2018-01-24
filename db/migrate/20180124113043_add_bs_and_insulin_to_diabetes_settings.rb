class AddBsAndInsulinToDiabetesSettings < ActiveRecord::Migration[5.1]
  def change
    add_column :diabetes_settings, :bs_min, :integer
    add_column :diabetes_settings, :bs_max, :integer
    add_column :diabetes_settings, :bs_target, :integer
    add_column :diabetes_settings, :correction_number, :integer
    add_column :diabetes_settings, :correction_insulin, :float
  end
end
