import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'

const FourPage = () => (
  <>
    <SEO title="Page four" />
    <h1>Hi from the four page</h1>
    <p>Welcome to page 4</p>
    <div className="klaviyo-form-WQRPAB"></div>
    {/* <form
      id="email_signup"
      class="klaviyo_styling klaviyo_gdpr_embed_Y7fUQL"
      action="//manage.kmail-lists.com/subscriptions/subscribe"
      data-ajax-submit="//manage.kmail-lists.com/ajax/subscriptions/subscribe"
      method="GET"
      target="_blank"
      novalidate="novalidate"
    >
      <input type="hidden" name="g" value="Y7fUQL" />
      <input type="hidden" name="$fields" value="$consent" />
      <input type="hidden" name="$list_fields" value="$consent" />
      <div class="klaviyo_field_group">
        <label for="k_id_email">Newsletter Sign Up</label>
        <input
          class=""
          type="email"
          value=""
          name="email"
          id="k_id_email"
          placeholder="Your email"
        />
        <div class="klaviyo_field_group klaviyo_form_actions">
          <div class="klaviyo_helptext">
            {' '}
            How would you like to hear from us? (please select at least one
            option){' '}
          </div>
        </div>
      </div>
      <div class="klaviyo_messages">
        <div class="success_message" style={{ display: 'none' }}></div>
        <div class="error_message" style={{ display: 'none' }}></div>
      </div>
      <div class="klaviyo_form_actions">
        <button type="submit" class="klaviyo_submit_button">
          Subscribe
        </button>{' '}
      </div>
    </form> */}
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default FourPage
