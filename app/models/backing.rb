# == Schema Information
#
# Table name: backings
#
#  id         :integer          not null, primary key
#  project_id :integer          not null
#  backer_id  :integer          not null
#  amount     :integer          not null
#  message    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Backing < ActiveRecord::Base
  validates :project_id, :backer_id, :amount, presence:true
  belongs_to :project,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: :Project

  has_many :rewards,
  primary_key: :id,
  foreign_key: :backing_id,
  class_name: :Reward

  belongs_to :backer,
  primary_key: :id,
  foreign_key: :backer_id,
  class_name: :User
end
