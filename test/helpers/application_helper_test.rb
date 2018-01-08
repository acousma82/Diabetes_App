class ApplicationHelperTest < ActionView::TestCase
    test "full title helper" do
        assert_equal full_title,         "My Diabetes Diary App Ruby on Rails"
        assert_equal full_title("Help"), "Help | My Diabetes Diary App Ruby on Rails"
    end
  end