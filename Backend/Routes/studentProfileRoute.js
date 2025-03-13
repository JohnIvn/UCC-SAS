import express from 'express';
import authenticateToken from '../Middleware/authentication.js';
import { getUserStudentAccount, getAllDataById, getByEmail } from '../Controllers/studentProfileController.js';

const router = express.Router();

router.get('/', authenticateToken, getUserStudentAccount);
router.get('/api/:userId', authenticateToken, getAllDataById);
router.get('/email/:email', authenticateToken, getByEmail);

export default router;