class DiaryEntry < ApplicationRecord
  #bedeutet das jeder Tagebucheintrag einem User zugeordnet wird. Bei der Erstellung eines neuen entry wir geschaut ob es eine user_id gibt und ob es einen user gibt der diese id hat
  belongs_to :user
  default_scope -> { order(created_at: :asc)}
  validates :user_id, presence: true
  validate :has_content

	


private
def has_content
  unless [comment?, insulin?, bloodsugar?, carbohydrates?].include?(true)
    errors.add :base, 'You need at least some content to make an entry!'
  end
end 


end
