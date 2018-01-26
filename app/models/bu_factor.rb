class BuFactor < ApplicationRecord
  belongs_to :user
  default_scope -> { order(created_at: :desc)}
  validates :user_id, presence: true
  validates :zero_till_one, :one_till_two, :two_till_three, :three_till_four, :four_till_five, :five_till_six, :six_till_seven, :seven_till_eight, :eight_till_nine, :nine_till_ten, :ten_till_eleven, :eleven_till_twelve, :twelve_till_thirteen, :thirteen_till_fourteen, :fourteen_till_fifteen, :fifteen_till_sixteen, :sixteen_till_seventeen, :seventeen_till_eightteen, :eightteen_till_nineteen, :nineteen_till_twenty, :twenty_till_twentyone, :twentyone_till_twentytwo, :twentytwo_till_twentythree, :twentythree_till_zero, presence: true, numericality: :true
end
