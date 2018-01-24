class AddUseridAndIndexToDiabetesSettings < ActiveRecord::Migration[5.1]
  def change
    add_reference :diabetes_settings, :user, foreign_key: true
    add_index :diabetes_settings, [:user_id, :created_at]
  end

end
