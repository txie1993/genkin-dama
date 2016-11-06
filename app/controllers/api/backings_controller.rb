class Api::BackingsController < ApplicationController
  def index
    @backings = Backing.all
    render :index
  end

  def show
   @backing = Backing.find(params[:id])
  end

  def destroy
   @backing = Backing.find(params[:id])
   if @backing.destroy
     render :show
   else
     render json: @backing.errors.full_messages, status: 422
   end
  end

  def create
    @backing = Backing.new(backing_params)
    @backing.creator_id = current_user.id

    if @backing.save
      render :show
    else
      render json: @backing.errors.full_messages, status: 422
    end
  end

  def update
  @backing = Backing.find(params[:id])

  if @backing.update(backing_params)
    render :show
  else
    render json: @backing.errors.full_messages, status: 422
  end
end

  private

  def backing_params
    params.require(:backing).permit(
    :project_id,
    :backer_id,
    :amount,
    :message
    )
  end

end
