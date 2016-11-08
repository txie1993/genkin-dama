# == Schema Information
#
# Table name: rewards
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text             not null
#  project_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  amount      :integer          not null
#

class Reward < ActiveRecord::Base
  validates :name, :description, :project_id, :amount, presence: true

  belongs_to :project,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: :Project

  has_many :rewardings,
  dependent: :destroy

  has_many :rewardees,
  through: :rewardings,
  source: :user
end
