Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :projects, only: [:create, :destroy, :show, :update]
    resources :rewards, only: [:create, :destroy, :show, :update]
    resources :tags, only: [:create, :destroy, :show, :update]
    resources :taggings, only: [:create, :destroy]
  end

  root "static_pages#root"
end
