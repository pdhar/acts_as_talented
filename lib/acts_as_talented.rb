require "acts_as_talented/engine"
require "cancan"
require "jquery-rails"
require "bootstrap-sass"
require "sass-rails"
require "autoprefixer-rails"
require "angularjs-rails"
require "angular-rails-templates"

module ActsAsTalented
	class << self
    attr_accessor :your_config_var
  end

  def self.setup(&block)
    # You can yield your own object encapsulating your configuration logic/state
    yield self
  end

end
