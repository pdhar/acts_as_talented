require_dependency "acts_as_talented/application_controller"

module ActsAsTalented
  class Api::ApiController < ActionController::Base

    before_filter :allow_cors

    private

    def allow_cors
      headers["Access-Control-Allow-Origin"] = "*"
      headers["Access-Control-Allow-Methods"] = %w{GET POST PUT DELETE}.join(",")
      headers["Access-Control-Allow-Headers"] =
        %w{Origin Accept Content-Type X-Requested-With X-CSRF-Token}.join(",")

      head(:ok) if request.request_method == "OPTIONS"
    end

  end
end
