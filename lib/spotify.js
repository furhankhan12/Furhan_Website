import querystring from 'querystring';
const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token
} = process.env;

//encode into 64 
const base = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${base}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    //turn key value pair to string
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token
    })
  });
  return response.json()
};

const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=15`;

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();
  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};