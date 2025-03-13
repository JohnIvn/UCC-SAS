import express from 'express';
import { addGuestEmail } from '../Controllers/guestController.js';

const router = express.Router();

router.post('/', addGuestEmail);

export default router;
