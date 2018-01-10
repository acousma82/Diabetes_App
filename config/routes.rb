Rails.application.routes.draw do

    
    get 'password_resets/new'
  
    get 'password_resets/edit'
  
    get 'sessions/new'
  
    root 'static_pages#home'
    get  '/help',    to: 'static_pages#help'
    get  '/about',   to: 'static_pages#about'
    get  '/contact', to: 'static_pages#contact'
    get '/bolus',  to: 'static_pages#bolus'
    get  '/signup',  to: 'users#new'
    post '/signup',  to: 'users#create'
    get  '/users',   to: 'users#index'
    get    '/login',   to: 'sessions#new'
    post   '/login',   to: 'sessions#create'
    delete '/logout',  to: 'sessions#destroy'
    #the member method arranges for the routes to respond to URLs containing the user id.
    #this code creates /users/[user_id]/following and /users/[user_id]/followers path
    resources :users, except: [:new, :create]#do
      #member do
        #get :following, :followers
      #end
    #end
  
    resources :account_activations, only: [:edit]
    resources :password_resets,     only: [:new, :create, :edit, :update]
    #resources :microposts,          only: [:create, :destroy]
    #resources :relationships,       only: [:create, :destroy]
  
  

  
end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html