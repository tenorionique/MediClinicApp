import express  from 'express';

let router = express.Router();

router.get('/', (req, res) => {
  console.log('GET /');
  res.status(200).json({ message: 'Hello, world!' });
});

export default router;