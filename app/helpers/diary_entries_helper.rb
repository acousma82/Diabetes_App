module DiaryEntriesHelper

  def created_at_new_day? 
    last_diary_entry = current_user.diary_entries.second_to_last
    new_diary_entry = current_user.diary_entries.last
    return true if new_diary_entry.created_at.strftime("%d") > last_diary_entry.created_at.strftime("%d")
  end
end
