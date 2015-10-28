import express from 'express';

const router = express.Router();

router.post('/dump', (req, res) => {
  const distance = req.body.distance;
  const remoteAddress = req.body.remoteAddress;

  console.log(distance, remoteAddress);
});

router.get('/feed/home', (req, res) => {
  const token = req.query.oauth_token;
  const limit = req.query.limit;
  const newerThan = req.query.newer_than;
  const olderThan = req.query.older_than;


});

export default router;
