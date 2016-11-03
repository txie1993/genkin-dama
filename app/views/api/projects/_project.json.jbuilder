json.extract! project, :id, :title, :image_url, :description, :funding_goal, :creator_id, :end_date

json.backers project.backers.map(&:id)

json.creator project.creator
