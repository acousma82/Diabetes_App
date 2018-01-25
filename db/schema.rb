# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180125150208) do

  create_table "bu_factors", force: :cascade do |t|
    t.float "zero_till_one"
    t.float "one_till_two"
    t.float "two_till_three"
    t.float "three_till_four"
    t.float "four_till_five"
    t.float "five_till_six"
    t.float "six_till_seven"
    t.float "seven_till_eight"
    t.float "eight_till_nine"
    t.float "nine_till_ten"
    t.float "ten_till_eleven"
    t.float "eleven_till_twelve"
    t.float "twelve_till_thirteen"
    t.float "thirteen_till_fourteen"
    t.float "fourteen_till_fifteen"
    t.float "fifteen_till_sixteen"
    t.float "sixteen_till_seventeen"
    t.float "seventeen_till_eightteen"
    t.float "eightteen_till_nineteen"
    t.float "nineteen_till_twenty"
    t.float "twenty_till_twentyone"
    t.float "twentyone_till_twentytwo"
    t.float "twentytwo_till_twentythree"
    t.float "twentythree_till_zero"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.index ["user_id", "created_at"], name: "index_bu_factors_on_user_id_and_created_at"
    t.index ["user_id"], name: "index_bu_factors_on_user_id"
  end

  create_table "diabetes_settings", force: :cascade do |t|
    t.integer "bs_min"
    t.integer "bs_max"
    t.integer "bs_target"
    t.integer "correction_number"
    t.float "correction_insulin"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.index ["user_id", "created_at"], name: "index_diabetes_settings_on_user_id_and_created_at"
    t.index ["user_id"], name: "index_diabetes_settings_on_user_id"
  end

  create_table "diary_entries", force: :cascade do |t|
    t.text "comment"
    t.integer "bloodsugar"
    t.float "carbohydrates"
    t.float "insulin"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "created_at"], name: "index_diary_entries_on_user_id_and_created_at"
    t.index ["user_id"], name: "index_diary_entries_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
    t.string "remember_digest"
    t.boolean "admin"
    t.string "activation_digest"
    t.boolean "activated"
    t.datetime "activated_at"
    t.string "reset_digest"
    t.datetime "reset_sent_at"
    t.float "zero_till_one"
    t.float "one_till_two"
    t.float "two_till_three"
    t.float "three_till_four"
    t.float "four_till_five"
    t.float "five_till_six"
    t.float "six_till_seven"
    t.float "seven_till_eight"
    t.float "eight_till_nine"
    t.float "nine_till_ten"
    t.float "ten_till_eleven"
    t.float "eleven_till_twelve"
    t.float "twelve_till_thirteen"
    t.float "thirteen_till_fourteen"
    t.float "fourteen_till_fifteen"
    t.float "fifteen_till_sixteen"
    t.float "sixteen_till_seventeen"
    t.float "seventeen_till_eightteen"
    t.float "eightteen_till_nineteen"
    t.float "nineteen_till_twenty"
    t.float "twenty_till_twentyone"
    t.float "twentyone_till_twentytwo"
    t.float "twentytwo_till_twentythree"
    t.float "twentythree_till_zero"
  end

end
