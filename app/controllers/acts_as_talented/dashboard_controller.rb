require_dependency "acts_as_talented/application_controller"

module ActsAsTalented
  class DashboardController < ApplicationController
		before_action :authenticate_employer!

  	def index
  		binding.pry
  	end
  end
end
