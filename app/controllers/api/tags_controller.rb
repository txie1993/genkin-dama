class Api::TagsController < ApplicationController
  def index
    @tags = Tag.all
    render :index
  end

  def show
   @tag = Tag.find(params[:id])
  end

  def destroy
   @tag = Tag.find(params[:id])
   if @tag.destroy
     render :show
   else
     render json: @tag.errors.full_messages, status: 422
   end
  end

  def create
    @tag = Tag.new(tag_params)

    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def update
  @tag = Tag.find(params[:id])

  if @tag.update(tag_params)
    render :show
  else
    render json: @tag.errors.full_messages, status: 422
  end
end

  private

  def tag_params
    params.require(:tag).permit(
    :name
    )
  end
end
