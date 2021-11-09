var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var butterfly_controller = require('../controllers/butterfly');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// Handbag ROUTES ///
// POST request for creating a Handbag.
router.post('/butterfly', butterfly_controller.butterfly_create_post);
// DELETE request to delete Handbag.
router.delete('/butterfly/:id', butterfly_controller.butterfly_delete);
// PUT request to update Handbag.
router.put('/butterfly/:id', butterfly_controller.butterfly_update_put);
// GET request for one Handbag.
router.get('/butterfly/:id', butterfly_controller.butterfly_detail);
// GET request for list of all Handbag.
router.get('/butterfly', butterfly_controller.butterfly_list);
module.exports = router;