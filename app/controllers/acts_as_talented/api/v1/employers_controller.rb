require_dependency "acts_as_talented/application_controller"

module ActsAsTalented
  class Api::V1::EmployersController < Api::ApiController
    before_filter :authenticate_employer!
    respond_to :json

    def index
      respond_with Employer.all.to_json
    end

  end
end