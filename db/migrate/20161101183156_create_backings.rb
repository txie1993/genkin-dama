class CreateBackings < ActiveRecord::Migration
  def change
    create_table :backings do |t|
      t.integer :project_id, null:false
      t.integer :backer_id, null:false
      t.integer :amount, null:false
      t.string :message

      t.timestamps null: false
    end
    add_index :backings, :project_id
    add_index :backings, :backer_id
  end
end
