class UsersController < ApplicationController

  def index
    @users = User.all
  end

  def import
    succes = User.import(params[:file])
    if succes
      redirect_to users_url, notice: 'Users were imported!'
    else
      redirect_to users_url, notice: 'Error!'
    end
  end

  def sorting
    users = User.all.order(params[:type].downcase).pluck(:name, :date, :number, :description)
    render json: { users: users }, status: 200
  end

  def search
    users = User.where(name: params[:name]).pluck(:name, :date, :number, :description)
    if users
      render json: { users: users }, status: 200
    else
      render json: { status: 404 }
    end
  end
end
