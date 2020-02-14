import SpotifyWebAPI from "spotify-web-api-js";

let globalAccessToken = "";
export function redirectUrlToSpotifyForLogin() {
    const CLIENT_ID = 'cee959f14e8e4d4da32f7d6e6b76fc28';
    const CLIENT_SECRET = '';
	const REDIRECT_URI = 'http://localhost:8888/callback';
	const scopes = [
        'user-read-private',
        'user-read-email',
        'user-read-playback-state', 
        'user-library-read', 
        'user-library-modify', 
        'user-modify-playback-state',
        'user-read-currently-playing', 
        'user-top-read'
    ];
    var state = generateRandomString(16);
	return (
		"https://accounts.spotify.com/authorize?client_id=" +
		CLIENT_ID +
		"&redirect_uri=" +
		encodeURIComponent(REDIRECT_URI) +
		"&scope=" +
		encodeURIComponent(scopes.join(" ")) +
        "&response_type=token" + 
        "&state=" + 
        encodeURIComponent(state)
	);
}

export function checkUrlForSpotifyAccessToken() {
	const params = getHashParams();
	const accessToken = params.access_token;
	if (!accessToken) {
		return false;
	} else {
		return accessToken;
	}
}

function generateRandomString(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

function getHashParams() {
	//helper function to parse the query string that spotify sends back when you log in
	var hashParams = {};
	var e,
		r = /([^&;=]+)=?([^&;]*)/g,
		q = window.location.hash.substring(1);
	// eslint-disable-next-line
	while ((e = r.exec(q))) {
		hashParams[e[1]] = decodeURIComponent(e[2]);
	}
	return hashParams;
}

export function setAccessToken(accessToken) {
	//since using spotifyApi as helper library you can set the access code once
	//you get it and then not have to include it in every request
	SpotifyWebAPI.setAccessToken(accessToken);
	globalAccessToken = accessToken;
}