Rails.application.routes.draw do

    root 'static_pages#home'
    get  '/help',    to: 'static_pages#help'
    get  '/about',   to: 'static_pages#about'
    get  '/contact', to: 'static_pages#contact'
    get '/bolus',  to: 'static_pages#bolus'
    get  '/signup',  to: 'users#new'
    post '/signup',  to: 'users#create'
    get  '/users',   to: 'users#index'
    get '/users/bolus', to: 'users#bolus'
    get 'users/:id/edit/diabsettings', to: 'users#edit_diabsettings'
    get    '/login',   to: 'sessions#new'
    post   '/login',   to: 'sessions#create'
    delete '/logout',  to: 'sessions#destroy'

    resources :users, except: [:new] do
      member do
        get :diabsettings
        post :diabsettings
      end
    end
    resources :account_activations, only: [:edit]
    resources :password_resets,     only: [:new, :create, :edit, :update]  
end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html