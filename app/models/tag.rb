# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ActiveRecord::Base
  validates :name, presence: true

  has_many :taggings,
  primary_key: :id,
  foreign_key: :tag_id,
  class_name: :Tagging,
  dependent: :destroy

  has_many :projects,
  through: :taggings,
  source: :project
end
