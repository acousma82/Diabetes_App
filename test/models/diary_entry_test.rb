require 'test_helper'

class DiaryEntryTest < ActiveSupport::TestCase
 
  def setup
    @user = users(:michael)
    @diary_entry = @user.diary_entries.build(bloodsugar: 120, user_id: @user.id)
    @empty_entry = @user.diary_entries.build(user_id: @user.id)
  end

  test "should be valid" do
    assert @diary_entry.valid?
  end
  
  test "user id should be present" do
    @diary_entry.user_id = nil
    assert_not @diary_entry.valid?
  end

  test "some content should be present" do
    assert_not @empty_entry.valid?
  end

  test "order should be most recent last" do
    assert_equal diary_entries(:most_recent), DiaryEntry.last
  end

end
