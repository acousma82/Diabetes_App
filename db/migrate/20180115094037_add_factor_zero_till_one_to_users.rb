class AddFactorZeroTillOneToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :zero_till_one, :double
  end
end
