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
#

class Reward < ActiveRecord::Base
  belongs_to :backing,
  primary_key: :id,
  foreign_key: :backing_id,
  class_name: :Backing

  has_one :backer,
  through: :backing,
  source: :backer
end
