ActsAsTalented::Engine.routes.draw do
  devise_for :employers, class_name: "ActsAsTalented::Employer", module: :devise
	root "dashboard#index"
end
