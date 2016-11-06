# == Schema Information
#
# Table name: rewards
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text             not null
#  backing_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  amount      :integer          not null
#

class Reward < ActiveRecord::Base
  validates :name, :description, :backing_id, :amount, presence: true

  belongs_to :backing,
  primary_key: :id,
  foreign_key: :backing_id,
  class_name: :Backing

  has_many :backers,
  through: :backing,
  source: :backer
end
