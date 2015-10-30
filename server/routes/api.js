import express from 'express';
import Firebase from 'firebase';

const router = express.Router();

let data = {};

router.post('/dump', (req, res) => {
  const distance = req.body.distance;
  const remoteAddress = req.body.remoteAddress;

  console.log(distance, remoteAddress);

  const firebase = new Firebase('https://parkviz.firebaseio.com/');

  data[remoteAddress] = { distance: distance };

  firebase.set(data);
});

export default router;
