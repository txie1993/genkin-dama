class Api::RewardingsController < ApplicationController
  def index
    @rewardings = Rewarding.all
    render :index
  end

  def show
   @rewarding = Rewarding.find(params[:id])
  end

  def destroy
   @rewarding = Rewarding.find(params[:id])
   if @rewarding.destroy
     render :show
   else
     render json: @rewarding.errors.full_messages, status: 422
   end
  end

  def create
    @rewarding = Rewarding.new(rewarding_params)

    @rewarding.user_id = current_user.id
    if @rewarding.valid?
      @rewarding.reward.project.rewards.each do |reward|
        next unless Rewarding.where(reward_id: reward.id, user_id: current_user.id).empty?
        Rewarding.create(reward_id: reward.id, user_id: current_user.id) if reward.amount <= @rewarding.reward.amount
      end
      render :show
    else
      render json: @rewarding.errors.full_messages, status: 422
    end
  end

    private

    def rewarding_params
        params.require(:rewarding).permit(
            :reward_id
        )
    end
end
