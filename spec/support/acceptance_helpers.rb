module AcceptanceHelpers
  def web_sign_in(email_or_user, password_or_nil = nil)
    if password_or_nil.nil?
      user = email_or_user

      web_sign_in_with_user(user)
    else
      email    = email_or_user
      password = password_or_nil

      web_sign_in_with_email_and_password(email, password)
    end
  end

  def wait_for_ajax_to_complete
    page.wait_until_true { page.evaluate_script('jQuery.active') == 0 }
  end

  def click_on_and_wait(*args)
    click_on *args
    wait_for_ajax_to_complete
  end

  private

  def submit_form form_id
    form = page.find("form[id='#{form_id}']")
    class << form
      def submit!
        Capybara::RackTest::Form.new(driver, native).submit({})
      end
    end
    form.submit!
  end

  def visit_intro_and_sign_in(email, password)
    visit "/index"
    within("#home_sign_in") do
      fill_in 'Email', with: user.email
      fill_in 'Password', with: "12345678"
    end

    submit_form 'home_sign_in'
  end

  def web_sign_in_with_email_and_password(email, password)
    # visit "/employers/sign_in"
    visit new_employer_session_path
    fill_in "Email", with: email
    fill_in "Password", with: password

    submit_form 'new_employer'
  end

  def web_sign_in_with_user(user)
    web_sign_in_with_email_and_password(user.email, user.password)
  end
end

RSpec.configure do |config|
  config.include AcceptanceHelpers
end