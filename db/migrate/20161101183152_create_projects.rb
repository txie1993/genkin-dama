class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title, null:false
      t.string :image_url, null:false
      t.text :description, null:false
      t.integer :funding_goal, null:false
      t.integer :creator_id, null:false

      t.timestamps null: false
    end
    add_index :projects, :funding_goal
  end
end
