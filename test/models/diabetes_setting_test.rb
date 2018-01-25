require 'test_helper'

class DiabetesSettingTest < ActiveSupport::TestCase

  def setup
    @user = users(:michael)
    @diab_setting = @user.diabetes_settings.build(bs_min: 80, bs_max:150, bs_target:110, correction_insulin: 0.5, correction_number: 20, user_id: @user.id)
    @diab_setting_wr1 = @user.diabetes_settings.build(bs_min:150, bs_max: 100, user_id: @user.id)
  end

  test "should be valid" do
    assert @diab_setting.valid?
  end

  test "bloodsugar minimum should be less than maximum and vice versa" do
    assert_not  @diab_setting_wr1.valid?
  end

  test "bs_target value shouls be lower than bs_max" do
    @diab_setting.bs_target = 180
    assert_not @diab_setting.valid?
  end

  test "user id should be present" do
    @diab_setting.user_id = nil
    assert_not @diab_setting.valid?
  end

end
