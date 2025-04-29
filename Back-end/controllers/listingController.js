const { connection } = require('../config/db');

const getListings = async (req, res, next) => {
  try {
    const query = 'SELECT * FROM Listings';

    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error fetching listings:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
      res.status(200).json({ listings: results });
    });
  } catch (error) {
    next(error);
  }
};

const addListing = async (req, res, next) => {
  try {
    const { title, description, rent, address, numRooms, contactInfo } = req.body;

    if (!title || !description || !rent || !address || !numRooms || !contactInfo) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    if (rent < 0 || numRooms < 1 ) {
      return res.status(400).json({ message: 'Rent or Number of rooms cannot be negative.' });
    }

    const query = `
      INSERT INTO Listings (Title, Description, Rent, Address, NumRooms, ContactInfo)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    const values = [title, description, rent, address, numRooms, contactInfo];

    connection.query(query, values, (error, results) => {
      if (error) {
        console.error('Error inserting listing:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
      res.status(201).json({ message: 'Listing added successfully', listingId: results.insertId });
    });

  } catch (error) {
    console.error('Unexpected server error:', error);
    next(error);
  }
};

module.exports = { getListings, addListing };
