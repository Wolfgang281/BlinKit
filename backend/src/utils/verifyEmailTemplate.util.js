const verificationEmailTemplate = (name, url) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Email Verification</title>
  </head>
  <body style="font-family: Arial, sans-serif; background-color: #f6f6f6; padding: 20px;">

      <div style="max-width: 500px; margin: auto; background: white; padding: 25px; border-radius: 8px;">
          
          <h2 style="text-align: center; color: #333;">
              Verify Your Email Address
          </h2>

          <p style="font-size: 16px; color: #555;">
              Hello <strong>${name}</strong>,
          </p>

          <p style="font-size: 15px; color: #555;">
              Thank you for creating an account. Please verify your email by clicking the button below:
          </p>

          <div style="text-align: center; margin: 25px 0;">
              <a href="${url}"
                  style="
                      background-color: #4CAF50;
                      color: white;
                      padding: 12px 20px;
                      text-decoration: none;
                      border-radius: 5px;
                      font-size: 16px;
                      display: inline-block;
                  ">
                  Verify Email
              </a>
          </div>

          <p style="font-size: 14px; color: #777;">
              If the button doesn’t work, click the link below:
          </p>

          <p style="font-size: 14px; color: #555;">
              <a href="${url}" style="color: #0066cc;">${url}</a>
          </p>

          <p style="font-size: 12px; color: #999; margin-top: 20px;">
              If you did not request this, you can safely ignore this email.
          </p>

      </div>

  </body>
  </html>
  `;
};

export default verificationEmailTemplate;
