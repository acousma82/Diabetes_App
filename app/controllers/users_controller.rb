class UsersController < ApplicationController
    #before filter
      before_action :logged_in_user, only: [:edit, :update, :destroy] 
    
      before_action :correct_user,   only: [:show, :edit, :update]
      before_action :admin_user,     only: [:index, :destroy]
    
    
    #User.paginate(available via the will-paginate gem) pulls the users out of the database one chunk at a time (30 by default), based on the :page parameter. So, for example, page 1 is users 1–30, page 2 is users 31–60, etc. If page is nil, paginate simply returns the first page.Here the page parameter comes from params[:page], which is generated automatically by will_paginate inside the view.
  def index
    @users = User.where(activated: true).paginate(page: params[:page]) 
  end
  
  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      flash[:success] = "Profile updated"
      redirect_to @user

    else
      render 'edit'
    end
  end
  

  def create
    @user = User.new(user_params)
    if @user.save
      log_in @user
      flash[:success] = "Welcome to Your Diabetes Diary"
      redirect_to @user
    else
      render 'new'
    end
  end

  
private

    def user_params
      params.require(:user).permit(:name, :email, :password,
                                   :password_confirmation, :admin)
    end

      # Before filters

    
      # Confirms the correct (logged-in) user
      def correct_user
        @user = User.find(params[:id])
        redirect_to(root_url) and flash[:danger] = "It is not possible to access other users diaries" unless current_user?(@user)
        
      end

      def admin_user
        redirect_to(root_url) unless current_user.admin?
      end

    
end
