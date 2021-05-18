import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const twUrl = 'https://id.twitch.tv/oauth2/token';

const app = express();

const { TWITCH_CLIENT_ID, TWITCH_CLIENT_SECRET } = process.env;

app.post('/api/v1/twitch', async (req, res) => {
  try {
    const post = await axios.post(`${twUrl}?client_id=${TWITCH_CLIENT_ID}&client_secret=${TWITCH_CLIENT_SECRET}&grant_type=client_credentials`);
    res.send(post.data);
  } catch (e) {
    console.log(e);
  }
});

app.listen(5000, () => {
  console.log('on');
});