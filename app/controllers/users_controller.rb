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
    if params[:type] == 'Name'
      users = User.all.order(:name).pluck(:name, :date, :number, :description)
      # column_name = 'new_name'
    elsif params[:type] == 'Date'
      users = User.all.order(:date).pluck(:name, :date, :number, :description)
    elsif params[:type] == 'Number'
      users = User.all.order(:number).pluck(:name, :date, :number, :description)
    elsif params[:type] == 'Description'
      users = User.all.order(:description).pluck(:name, :date, :number, :description)
    end

    render json: { users: users }, status: 200
  end
end
