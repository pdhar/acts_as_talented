$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "acts_as_talented/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "acts_as_talented"
  s.version     = ActsAsTalented::VERSION
  s.authors     = ["Pranav Dhar"]
  s.email       = ["pranav.dhar2@gmail.com"]
  s.homepage    = "https://github.com/pdhar/acts_as_talented"
  s.summary     = "A rails engine that lets you mount a job search engine."
  s.description = "A rails engine that lets you mount a job search engine"
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.rdoc"]

  s.add_dependency "rails", "~> 4.1.6"
  s.add_dependency "devise"
  s.add_dependency "cancan"
  
  s.add_dependency "angularjs-rails"
  s.add_dependency "angular-rails-templates"

  s.add_dependency "bootstrap-sass", "~> 3.2"
  s.add_dependency "sass-rails", ">= 3.2"
  s.add_dependency "autoprefixer-rails"
  s.add_dependency "jquery-rails"

  s.add_development_dependency 'pg'
  s.add_development_dependency 'rspec-rails'
  s.add_development_dependency 'capybara'
  s.add_development_dependency 'factory_girl_rails'
  s.add_development_dependency 'pry'
  s.add_development_dependency 'shoulda-matchers'
  s.add_development_dependency 'database_cleaner'
  s.add_development_dependency 'codeclimate-test-reporter'

  s.test_files = Dir["spec/**/*"]
end
