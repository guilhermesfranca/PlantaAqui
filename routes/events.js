
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/', eventController.getAllEvents);
router.post('/', eventController.createEvent);
router.delete('/:id', eventController.deleteEvent);
router.put('/:id/join', eventController.joinEvent);

module.exports = router;