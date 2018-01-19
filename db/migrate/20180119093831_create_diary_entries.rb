class CreateDiaryEntries < ActiveRecord::Migration[5.1]
  def change
    create_table :diary_entries do |t|
      t.text :comment
      t.integer :bloodsugar
      t.float :carbohydrates
      t.float :insulin
      t.references :user, foreign_key: true

      t.timestamps
    end
    add_index :diary_entries, [:user_id, :created_at]
  end
end
