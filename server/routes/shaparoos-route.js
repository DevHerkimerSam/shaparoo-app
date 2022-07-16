// Import express
const express = require('express')

// Import shaparoos-controller
const shaparoosRoutes = require('./../controllers/shaparoos-controller.js')

// Create router
const router = express.Router()

// Add route for GET request to retrieve all shaparoos
// In server.js, shaparoos route is specified as '/shaparoos'
// this means that '/all' translates to '/shaparoos/all'
router.get('/all', shaparoosRoutes.shaparoosAll)

// Add route for GET request to retrieve one shaparoo
// In server.js, shaparoos route is specified as '/shaparoos'
// this means that '/all' translates to '/shaparoos/one'
router.get('/one', shaparoosRoutes.shaparoosOne)

// Add route for POST request to create new shaparoo
// In server.js, shaparoos route is specified as '/shaparoos'
// this means that '/create' translates to '/shaparoos/create'
router.post('/create', shaparoosRoutes.shaparoosCreate)

// Add route for PUT request to update specific shaparoo
// In server.js, shaparoos route is specified as '/shaparoos'
// this means that '/update' translates to '/shaparoos/update'
router.put('/update', shaparoosRoutes.shaparoosUpdate)

// Add route for PUT request to delete specific shaparoo
// In server.js, shaparoos route is specified as '/shaparoos'
// this means that '/delete' translates to '/shaparoos/delete'
router.put('/delete', shaparoosRoutes.shaparoosDelete)

// Add route for PUT request to reset shaparoos list
// In server.js, shaparoos route is specified as '/shaparoos'
// this means that '/reset' translates to '/shaparoos/reset'
router.put('/reset', shaparoosRoutes.shaparoosReset)

// Export router
module.exports = router