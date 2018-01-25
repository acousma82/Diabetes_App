class CreateBuFactors < ActiveRecord::Migration[5.1]
  def change
    create_table :bu_factors do |t|
      t.float :zero_till_one
      t.float :one_till_two
      t.float :two_till_three
      t.float :three_till_four
      t.float :four_till_five
      t.float :five_till_six
      t.float :six_till_seven
      t.float :seven_till_eight
      t.float :eight_till_nine
      t.float :nine_till_ten
      t.float :ten_till_eleven
      t.float :eleven_till_twelve
      t.float :twelve_till_thirteen
      t.float :thirteen_till_fourteen
      t.float :fourteen_till_fifteen
      t.float :fifteen_till_sixteen
      t.float :sixteen_till_seventeen
      t.float :seventeen_till_eightteen
      t.float :eightteen_till_nineteen
      t.float :nineteen_till_twenty
      t.float :twenty_till_twentyone
      t.float :twentyone_till_twentytwo
      t.float :twentytwo_till_twentythree
      t.float :twentythree_till_zero

      t.timestamps
    end
    add_reference :bu_factors, :user, foreign_key: true
    add_index :bu_factors, [:user_id, :created_at]
  end
end
