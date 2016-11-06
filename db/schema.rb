# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161106194118) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "backings", force: :cascade do |t|
    t.integer  "project_id", null: false
    t.integer  "backer_id",  null: false
    t.integer  "amount",     null: false
    t.string   "message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "backings", ["backer_id"], name: "index_backings_on_backer_id", using: :btree
  add_index "backings", ["project_id"], name: "index_backings_on_project_id", using: :btree

  create_table "projects", force: :cascade do |t|
    t.string   "title",        null: false
    t.string   "image_url",    null: false
    t.text     "description",  null: false
    t.integer  "funding_goal", null: false
    t.integer  "creator_id",   null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.date     "end_date"
  end

  add_index "projects", ["funding_goal"], name: "index_projects_on_funding_goal", using: :btree

  create_table "rewardings", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "reward_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "rewards", force: :cascade do |t|
    t.string   "name",        null: false
    t.text     "description", null: false
    t.integer  "backing_id",  null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "amount",      null: false
  end

  add_index "rewards", ["backing_id"], name: "index_rewards_on_backing_id", using: :btree

  create_table "taggings", force: :cascade do |t|
    t.integer  "project_id", null: false
    t.integer  "tag_id",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "taggings", ["project_id"], name: "index_taggings_on_project_id", using: :btree
  add_index "taggings", ["tag_id"], name: "index_taggings_on_tag_id", using: :btree

  create_table "tags", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
