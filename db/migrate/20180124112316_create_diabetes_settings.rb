class CreateDiabetesSettings < ActiveRecord::Migration[5.1]
  def change
    create_table :diabetes_settings do |t|
      t.integer :bs_min
      t.integer :bs_max
      t.integer :bs_target
      t.integer :correction_number
      t.float :correction_insulin

      t.timestamps
    end
    add_reference :diabetes_settings, :user, foreign_key: true
    add_index :diabetes_settings, [:user_id, :created_at]
  end
  
end
