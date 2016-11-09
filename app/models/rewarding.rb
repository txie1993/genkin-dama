 # == Schema Information
#
# Table name: rewardings
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  reward_id  :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Rewarding < ActiveRecord::Base
  validates :user_id, :reward_id, presence:true
  validates :user_id, uniqueness: {scope: :reward_id, message: "Can only claim reward once"}
  belongs_to :user
  belongs_to :reward
end
