import express from 'express'
import StaffSignIn from '../Controllers/staffSignInController.js';

const router = express.Router()

router.post('/', StaffSignIn);

export default router;

