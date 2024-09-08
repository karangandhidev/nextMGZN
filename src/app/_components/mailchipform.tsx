import Head from 'next/head';
import { useEffect } from 'react';

const MailchimpForm = () => {
  useEffect(() => {
    // Load Mailchimp validation script
    const script = document.createElement('script');
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);
    
    // Cleanup the script
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <link
          href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
          rel="stylesheet"
          type="text/css"
        />
        <style>
          {`
            #mc_embed_signup {
              background: #fff;
              clear: left;
              font: 14px Helvetica, Arial, sans-serif;
              width: 600px;
            }
          `}
        </style>
      </Head>
      <div id="mc_embed_signup">
        <form
          action="https://gmail.us10.list-manage.com/subscribe/post?u=7ec5a0b77c11407db579e4bfa&amp;id=99aee8a868&amp;f_id=000ad5e5f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <h2>Enroll for the webinar</h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">First Name <span className="asterisk">*</span></label>
              <input type="text" name="FNAME" className="required text" id="mce-FNAME" required />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-LNAME">Last Name</label>
              <input type="text" name="LNAME" className="text" id="mce-LNAME" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-PHONE">Phone Number <span className="asterisk">*</span></label>
              <input type="text" name="PHONE" className="REQ_CSS" id="mce-PHONE" />
            </div>
            <div hidden>
              <input type="hidden" name="tags" value="12981676" />
            </div>
            <div id="mce-responses" className="clear foot">
              <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
              <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
            </div>
            <div style={{ position: 'absolute', left: '-5000px' }}>
              <input type="text" name="b_7ec5a0b77c11407db579e4bfa_99aee8a868" tabIndex={-1} />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                <p style={{ margin: '0 auto' }}>
                  <a href="http://eepurl.com/iYqmsg" title="Mailchimp - email marketing made easy and fun">
                    <img
                      className="refferal_badge"
                      src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                      alt="Intuit Mailchimp"
                      style={{ width: '220px', height: '40px', display: 'flex', padding: '2px 0', justifyContent: 'center', alignItems: 'center' }}
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default MailchimpForm;
