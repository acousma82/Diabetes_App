class AddFactorOneTillZeroToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :one_till_two, :double
    add_column :users, :two_till_three, :double
    add_column :users, :three_till_four, :double
    add_column :users, :four_till_five, :double
    add_column :users, :five_till_six, :double
    add_column :users, :six_till_seven, :double
    add_column :users, :seven_till_eight, :double
    add_column :users, :eight_till_nine, :double
    add_column :users, :nine_till_ten, :double
    add_column :users, :ten_till_eleven, :double
    add_column :users, :eleven_till_twelve, :double
    add_column :users, :twelve_till_thirteen, :double
    add_column :users, :thirteen_till_fourteen, :double
    add_column :users, :fourteen_till_fifteen, :double
    add_column :users, :fifteen_till_sixteen, :double
    add_column :users, :sixteen_till_seventeen, :double
    add_column :users, :seventeen_till_eightteen, :double
    add_column :users, :eightteen_till_nineteen, :double
    add_column :users, :nineteen_till_twenty, :double
    add_column :users, :twenty_till_twentyone, :double
    add_column :users, :twentyone_till_twentytwo, :double
    add_column :users, :twentytwo_till_twentythree, :double
    add_column :users, :twentythree_till_zero, :double
  end
end
