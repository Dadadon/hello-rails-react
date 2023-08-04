# frozen_string_literal: true

module Api
  class GreetingsController < ApplicationController
    def random
      @greeting = Greeting.order('RANDOM()').first
      render json: { message: @greeting.message }
    end
  end
end
