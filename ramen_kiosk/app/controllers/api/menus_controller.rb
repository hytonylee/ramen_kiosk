# module Api
#   module V1
#     class QuestionsController < ApplicationController
#     end
#   end
# end
# 👇 short-hand syntax for the above 👆
class Api::MenusController < Api::ApplicationController
  # before_action :authenticate_user!
  before_action :find_question, only: [:show, :update, :destroy]

  def index
    menus = Menu.order(created_at: :desc)
    render json: menus
  end

  def show
    render json: @menu
  end

  def create
    menu = Menu.new question_params
    menu.user = current_user
    menu.save!
    render json: {id: menu.id}
  end

  private
  def find_question
    @menu = Menu.find params[:id]
  end

  def question_params
    params.require(:menu).permit(:title, :body)
  end
end
