import express from 'express';
import { getUserStudentAccount, getAllDataById, getByEmail } from '../Controllers/studentProfileController.js';

const router = express.Router();

router.get('/', getUserStudentAccount);
router.get('/:userId', getAllDataById);
router.get('/email/:email', getByEmail);

export default router;