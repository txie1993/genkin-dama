class Api::ProjectsController < ApplicationController
  before_action :require_logged_in, only: [:create]
  def index
    @projects = Project.all
    render :index
  end

  def show
   @project = Project.find(params[:id])
  end

  def destroy
   @project = Project.find(params[:id])
   if @project.destroy
     render :show
   else
     render json: @project.errors.full_messages, status: 422
   end
  end

  def create
    @project = Project.new(project_params)

    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
  @project = Project.find(params[:id])

  if @project.update(project_params)
    render :show
  else
    render json: @project.errors.full_messages, status: 422
  end
end

  private

  def project_params
    params.require(:project).permit(
    :title,
    :image_url,
    :description,
    :funding_goal,
    :creator_id
    )
  end

end
