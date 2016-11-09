json.extract! project, :id, :title, :image_url, :description, :funding_goal, :creator_id, :end_date, :collected_funds, :num_backers, :remaining_days, :rewards, :tags
json.backers project.backers.map(&:id)

json.creator project.creator
