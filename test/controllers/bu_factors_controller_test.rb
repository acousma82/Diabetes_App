require 'test_helper'

class BuFactorsControllerTest < ActionDispatch::IntegrationTest
  test "should get action:create" do
    get bu_factors_action:create_url
    assert_response :success
  end

end
