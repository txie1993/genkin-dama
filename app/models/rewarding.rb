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
  belongs_to :user

  belongs_to :reward
end
