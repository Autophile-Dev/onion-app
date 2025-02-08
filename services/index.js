const servers = {
  staging: "http://10.0.2.2:8000/",
  production: "http://85.31.233.109:8000/",
};

const ROOT_URL = servers.production;
const CRYPTO_URL = "https://min-api.cryptocompare.com/";
const CRYPTO_HEADERS = {
  Authorization:
    "5a3ebd898c839f8ac531b7e5b267b4ee2fe6e2e02f473be9cb24f2364c1abfd4",
};
const rapid_api_url = "https://fear-and-greed-index.p.rapidapi.com/";
const rapid_api_headers = {
  "X-RapidAPI-Key": "34b391b3a0msh83e41e7b7d602a5p164702jsnb3e5cfcbbe2b",
  "X-RapidAPI-Host": "fear-and-greed-index.p.rapidapi.com",
};
const FEAR_AND_GREED_URL = "https://api.alternative.me/fng/";
const clientId =
  "555312115273-t4oaqttu125jfs42jqgh9e3th618sopf.apps.googleusercontent.com";
const androidClientId =
  "555312115273-6eir5oaghkchqcuolrq5eom9q8h74fs0.apps.googleusercontent.com";
const iosClientId =
  "555312115273-rjkbo7du5q9cusis8p6vs14q08vbseon.apps.googleusercontent.com";
const WEBSITE_LINK = `https://onioncryptosignals.com/`;
const YOUTUBE_LINK = `https://www.youtube.com/channel/UCG5YaPiaaWuKQBqEDysWqiA`;
const TELEGRAM_LINK = `https://t.me/onioncrypto`;
const FACEBOOK_LINK = `https://www.facebook.com/onioncrypto`;
const DISCORD_LINK = `https://discord.gg/QEsuGuQF2S`;

const SUPPORT_LINK = `https://t.me/onioncr`;
const EULA_LINK = `https://onioncryptosignals.com/?page_id=553`;
const PRIVACY_POLICY_LINK = `https://onioncryptosignals.com/?page_id=150`;

export {
  clientId,
  androidClientId,
  iosClientId,
  CRYPTO_HEADERS,
  servers,
  ROOT_URL,
  CRYPTO_URL,
  rapid_api_url,
  rapid_api_headers,
  WEBSITE_LINK,
  SUPPORT_LINK,
  EULA_LINK,
  PRIVACY_POLICY_LINK,
  YOUTUBE_LINK,
  TELEGRAM_LINK,
  FACEBOOK_LINK,
  DISCORD_LINK,
  FEAR_AND_GREED_URL,
};

// Upload Keystore hashes
//     Google Certificate Fingerprint:     95:72:C9:2F:B9:07:1C:13:85:AF:CE:3D:42:B9:50:B6:E7:C7:5A:18
//     Google Certificate Hash (SHA-1):    9572C92FB9071C1385AFCE3D42B950B6E7C75A18
//     Google Certificate Hash (SHA-256):  4170CCF1AE8F0812CA252C849112C39AE3BFE617857FAC83706637AF71F499B3
//     Facebook Key Hash:                  lXLJL7kHHBOFr849QrlQtufHWhg=
//   Push Notifications credentials
//     FCM Api Key:  ---------------------
