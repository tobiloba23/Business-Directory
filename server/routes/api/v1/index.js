import express from 'express';

const router = express.Router();

router.route('/').all((req, res) =>
  res.status(200).json({
    message: 'Magic happens on port  8020',
  }));

export default router;
