require 'spec_helper'

feature "Sign in to your Talent account", js: false do

  let(:employer) { FactoryGirl.create(:acts_as_talented_employer) }

  scenario "Signing in with valid credentials" do
    web_sign_in employer.email, "1234678"
    # binding.pry
    # expect(page).to have_content 'Invalid email or password.'
  end

  # scenario "Visiting the app when not already signed in redirects the user to the login page" do
  #   visit "/home"
  #   expect(current_path).to eq new_user_session_path
  # end

end