class MessagesController < ApplicationController
  def index
    @message = Message.new
  end

  def create
    @message = Message.create(params[:message])
  end
end
