# == Schema Information
#
# Table name: taggings
#
#  id         :integer          not null, primary key
#  project_id :integer          not null
#  tag_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tagging < ActiveRecord::Base
  validates :project_id, :tag_id, presence: true

  belongs_to :tag
  belongs_to :project
end
