class Addamount < ActiveRecord::Migration
  def change
    add_column :rewards, :amount, :integer, null: false
  end
end
