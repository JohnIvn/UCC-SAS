import Guest from '../Models/guestAccountModel.js';


export const addGuestEmail = async (req, res) => {
  const { name } = req.body; 

  try {
    const newGuest = await Guest.create({
      name, 
    });

    return res.status(201).json({
      message: 'Guest created successfully',
      guest: newGuest,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'An error occurred while adding the guest.',
      error: error.message,
    });
  }
};
