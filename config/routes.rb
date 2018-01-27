Rails.application.routes.draw do
 

    root 'static_pages#home'
    get  '/help',    to: 'static_pages#help'
    get  '/about',   to: 'static_pages#about'
    get  '/contact', to: 'static_pages#contact'
    get '/bolus',  to: 'static_pages#bolus'
    get  '/signup',  to: 'users#new'
    post '/signup',  to: 'users#create'
    get  '/users',   to: 'users#index'
    get 'users/:id/edit/diabsettings', to: 'users#edit_diabsettings', as: :edit_diabsettings
    get    '/login',   to: 'sessions#new'
    post   '/login',   to: 'sessions#create'
    delete '/logout',  to: 'sessions#destroy'
    post '/diaryentry',  to: 'diary_entries#create', as: :diary_entry
    get '/diaryentry',  to: 'diary_entries#new'

    resources :users, except: [:new]
    resources :account_activations, only: [:edit]
    resources :password_resets,     only: [:new, :create, :edit, :update]  
    resources :diary_entries
    resources :diabetes_settings, only:[:new, :create, :edit, :update]
    resources :bu_factors,  only: [:create]
  end



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html