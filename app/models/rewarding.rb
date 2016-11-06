# == Schema Information
#
# Table name: rewardings
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  reward_id  :integer
#  created_at :datetime
#  updated_at :datetime
#

class Rewarding < ActiveRecord::Base
  belongs_to :user

  belongs_to :reward
end
