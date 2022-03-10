# Get Current User's Recently Played Tracks (Spotify API) WIP

Note: This is a Node.js and Express.js application that uses the Spotify Web API, along with Spotify Web API Node Wrapper, to get the current user's recently played tracks.

Required credentials: Client ID, Client Secret.
You can get these from [Spotify for Developers](https://developer.spotify.com/dashboard/applications).

To get this application running, make sure you do the following in the Terminal:
`npm install`
`nodemon server.js`

User will need to have a Spotify account to use this application.
Once user has logged in, they will be able to see their recently played tracks.

To get the current user's recently played tracks, make a GET request to the following URL:
`http://localhost:8888/recent`

TODO: Fix the following errors: `Registering with duplicate name`, `Invalid password for user`

## [Spotify](https://open.spotify.com)

## [Spotify Web API](https://developer.spotify.com/documentation/web-api/)

## [Spotify Web API Node Wrapper](https://github.com/thelinmichael/spotify-web-api-node)
