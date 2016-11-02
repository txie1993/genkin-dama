# == Schema Information
#
# Table name: projects
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  image_url    :string           not null
#  description  :text             not null
#  funding_goal :integer          not null
#  creator_id   :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Project < ActiveRecord::Base
  validates :title, :image_url, :description, :funding_goal, :creator_id, presence: true

  has_many :backings,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: :Backing

  has_many :backers,
  through: :backings,
  source: :backer

  belongs_to :creator,
  primary_key: :id,
  foreign_key: :creator_id,
  class_name: :User

  has_many :taggings,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: :Tagging

  has_many :tags,
  through: :taggings,
  source: :tag
end
