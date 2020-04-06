class UsersController < ApplicationController
    #before filter
      before_action :logged_in_user, only: [:show, :edit, :update, :destroy] 
    
      before_action :correct_user,   only: [:show, :edit, :update, :edit_diabsettings]
      before_action :admin_user,     only: [:index, :destroy]
    
    
    #User.paginate(available via the will-paginate gem) pulls the users out of the database 
    #one chunk at a time (30 by default), based on the :page parameter. So, for example, 
    #page 1 is users 1–30, page 2 is users 31–60, etc. If page is nil, paginate simply returns 
    #the first page.Here the page parameter comes from params[:page], which is generated automatically
    #by will_paginate inside the view.
  def index
    @users = User.paginate(page: params[:page]) 
  end
  
  def new
    @user = User.new
    @replace_form_path = true
  end

  def create
    @user = User.new(user_params)   
    if @user.save
      @user.send_activation_email
      flash[:info] = "Please check your email to activate your account."
      redirect_to root_url
    else
      render 'new'
    end
  end

  def show
    @user = User.find(params[:id])
    redirect_to root_url and return unless @user.activated?
    @diary_entries = @user.diary_entries.paginate(page: params[:page])
    
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
  
  def bolus
    @bu_factors = current_user.bu_factors
    @bs_settings = current_user.diabetes_settings
    gon.bu_factors = @bu_factors.to_json
  end


  def edit_diabsettings
    #should return the latest created bu_factors for the current user
    #@bu_factors = BuFactor.find_by(user_id: params[:id])
    @user = User.find(params[:id])
    @curr_factors = @user.bu_factors.last || []
    @bu_factor = @user.bu_factors.build
    @diabetes_settings = @user.diabetes_settings.last
    @diabetes_setting = @user.diabetes_settings.build
  end
  
  def destroy
    User.find(params[:id]).destroy
    flash[:success] = "User deleted"
    redirect_to users_url
  end



private

    def user_params
      params.require(:user).permit(:name, :email, :password,
                                   :password_confirmation)
    end

          # Before filters

    
      # Confirms the correct (logged-in) user. the admin is always the correct user.
      def correct_user
        @user = User.find(params[:id])
        unless current_user?(@user) || current_user.admin?
          flash[:danger] = "It is not possible to access other users diaries"
          redirect_to(root_url) 
        end  
        
      end

      def admin_user
        redirect_to(root_url) unless current_user.admin?
      end

    

    
end
