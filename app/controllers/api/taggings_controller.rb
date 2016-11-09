class Api::TaggingsController < ApplicationController
  def index
    @taggings = Tagging.all
    render :index
  end

  def show
   @tagging = Tagging.find(params[:id])
  end

  def destroy
   @tagging = Tagging.find(params[:id])
   if @tagging.destroy
     render :show
   else
     render json: @tagging.errors.full_messages, status: 422
   end
  end

  def create
    @tagging = Tagging.new(tagging_params)

    if @tagging.save
      render :show
    else
      render json: @tagging.errors.full_messages, status: 422
    end
  end

  def update
  @tagging = Tagging.find(params[:id])

  if @tagging.update(tagging_params)
    render :show
  else
    render json: @tagging.errors.full_messages, status: 422
  end
  end

  private

  def tagging_params
    params.require(:tagging).permit(
    :project_id,
    :name,
    :description,
    :amount
    )
  end
end
