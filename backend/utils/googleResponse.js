const { google } = require("googleapis");

const axios = require("axios");
require("dotenv").config();

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  /*
   * This is where Google will redirect the user after they
   * give permission to your application
   */
  "http://192.168.0.198.nip.io:3000/auth/googleAuth"
);

exports.getGoogleAuthURL = (req, res) => {
  console.log("Axios ne bulaya");
  /*
   * Generate a url that asks permissions to the user's email and profile
   */
  const scopes = [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
  ];

  return res.json(
    oauth2Client.generateAuthUrl({
      access_type: "offline",
      prompt: "consent",
      scope: scopes, // If you only need one scope you can pass it as string
    })
  );
};

exports.getGoogleUser = async ({ code }) => {
  const { tokens } = await oauth2Client.getToken(code);
  console.log(code);
  const googleUser = await axios
    .get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`,
      {
        headers: {
          Authorization: `Bearer ${tokens.id_token}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((error) => {
      return res.json({ status: "failed", messege: "Googl error" });
    });

  return googleUser;
};
