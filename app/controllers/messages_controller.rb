class MessagesController < ApplicationController
  def index
    @message = Message.new
  end

  def create
    @message = Message.new(params[:message])
  end
end
