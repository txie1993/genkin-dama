class CreateRewardings < ActiveRecord::Migration
  def change
    create_table :rewardings do |t|
      t.integer :user_id, null:false
      t.integer :reward_id, null:false
      t.timestamps
    end
  end
end
