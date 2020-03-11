export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = "4ff33cf0a2bb43deb113db9f1faaee2d";
export const redirectUri = "http://localhost:3000/redirect";
export const scopes = [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
];