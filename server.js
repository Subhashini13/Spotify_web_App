const express = require('express');

const cors = require('cors')
const spotifyWebAPi = require('spotify-web-api-node');

const app = express();
app.use(cors())

app.post('/login', (req, res) => {
    const spotifyApi = new spotifyApi({
        redirectUri : 'http://localhost:3001',
        clientId : '223a3a5cd9464e069a219ba10acf3397',
        clientSecret : '81e572e144494c36929101549f532eae'

    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken : data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in

,        })
    })
    .catch(() => {
        res.sendStatus(400)
    })
})

app.listen(3002)