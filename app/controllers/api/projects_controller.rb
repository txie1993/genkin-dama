class Api::ProjectsController < ApplicationController
  before_action :require_logged_in, only: [:create]
  def index
    @projects = Project.all
    render :index
  end

  def show
   @project = @project.find(params[:id])
  end

  def destroy
   @project = @project.find(params[:id])
   @project.destroy
  end

  def create
    @project = Project.create!(project_params)
    render :show
  end

  private

  def bench_params
    params.require(:project).permit(
    :title,
    :image_url,
    :description,
    :funding_goal,
    :creator_id
    )
  end

end
