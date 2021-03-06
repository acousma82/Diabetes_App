require 'test_helper'

class UsersSignupTest < ActionDispatch::IntegrationTest

  def setup
    #Because the deliveries array is global, we have to reset it in the setup method to prevent our code from breaking if any other tests deliver email 
    ActionMailer::Base.deliveries.clear
  end


  test "invalid signup information" do
    get signup_path
    assert_select 'form[action="/signup"]'
     
     # Hier wird überprüft ob trotz falcher Nutzereingabe sich die Gesamtzahl der Nutzer erhöht. Wenn sie sich erhöht schlägt der Test fehlt, wenn nicht funktioniert das sign up denn es lässt keine invalien Infos durch.
      assert_no_difference 'User.count' do
      post signup_path, params: { user: { name:  "",
                                         email: "user@invalid",
                                         password:              "foo",
                                         password_confirmation: "bar" } }
    end
    #hier wird überprüft, dass wenn das speichern eines users fehlschlägt, die signup Seite neu geladen wird
    assert_template 'users/new'
    #hier wird überprüft ob bei falschen signup daten die fehlermeldungs divbs im html vorhanden sind
    assert_select 'div#error_explanation'
    assert_select 'div.field_with_errors'
    
  end


test "valid signup information with account activation" do
    get signup_path
    assert_difference 'User.count', 1 do
      post signup_path, params: { user: { name:  "Example User",
                                         email: "user@example.com",
                                         password:              "password",
                                         password_confirmation: "password" } }
    end
    #verifies that exactly 1 message was delivered.
    assert_equal 1, ActionMailer::Base.deliveries.size 
    user = assigns(:user)
    assert_not user.activated?
    #Try to log in before activation.
    log_in_as(user)
    assert_not is_logged_in?
    # Invalid activation token
    get edit_account_activation_path("invalid token", email: user.email)
    assert_not is_logged_in?
    # Valid token, wrong email
    get edit_account_activation_path(user.activation_token, email: 'wrong')
    assert_not is_logged_in?
    # Valid activation token
    get edit_account_activation_path(user.activation_token, email: user.email)
    assert user.reload.activated?
    follow_redirect!
    assert_template 'users/show'
    assert is_logged_in?
    assert_not flash.nil?
  end

end
