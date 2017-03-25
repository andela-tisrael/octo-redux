import express from 'express';
import validateInput from './routeHelper/validator';

let router = express.Router();

router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);
  if (errors) {
  return  res.status(400).send(errors);
  }


});
export default router;
