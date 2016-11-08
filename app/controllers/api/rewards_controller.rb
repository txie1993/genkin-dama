class Api::RewardsController < ApplicationController
  def index
    @rewards = Reward.all
    render :index
  end

  def show
   @reward = Reward.find(params[:id])
  end

  def destroy
   @reward = Reward.find(params[:id])
   if @reward.destroy
     render :show
   else
     render json: @reward.errors.full_messages, status: 422
   end
  end

  def create
    @reward = Reward.new(reward_params)

    if @reward.save
      render :show
    else
      render json: @reward.errors.full_messages, status: 422
    end
  end

  def update
  @reward = Reward.find(params[:id])

  if @reward.update(reward_params)
    render :show
  else
    render json: @reward.errors.full_messages, status: 422
  end
end

  private

  def reward_params
    params.require(:reward).permit(
    :project_id,
    :name,
    :description,
    :amount
    )
  end
end
