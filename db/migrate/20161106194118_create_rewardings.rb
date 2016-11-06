class CreateRewardings < ActiveRecord::Migration
  def change
    create_table :rewardings do |t|
      t.integer :user_id
      t.integer :reward_id
      t.timestamps
    end
  end
end
