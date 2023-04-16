const express = require('express');
const router = express.Router();
const {Suggestion} = require('../models/suggestionModal');
const {Project} = require('../models/projectModal');
const {User} = require('../models/userModal');
const {addSuggestion, getSuggestions, updateSuggestions, deleteSuggestion} = require('../controllers/suggestionControlers');

router.post('/addSuggestion', addSuggestion);
router.get('/getSuggestions/:id', getSuggestions);
router.patch('/updateSuggestions/:id', updateSuggestions);
router.delete('/deleteSuggestion/:id', deleteSuggestion);

module.exports = router;
