// Import database
const knex = require('./../db')

// Retrieve all shaparoos
exports.shaparoosAll = async (req, res) => {
  // Get all shaparoos from database
  knex
    .select('*') // select all records
    .from('shaparoos') // from 'shaparoos' table
    .then(userData => {
      // Send shaparooss extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving shaparoos: ${err}` })
    })
}

// Create new shaparoo
exports.shaparoosCreate = async (req, res) => {
  // Add new shaparoo to database
  knex('shaparoos')
    .insert({ // insert new record, a shaparoo
      'name': req.body.name,
      'form': req.body.form,
      'color': req.body.color
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `Shaparoo named \'${req.body.name}\' a ${req.body.color} ${req.body.form} created.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating ${req.body.name} shaparoo: ${err}` })
    })
}

// Remove specific shaparoo
exports.shaparoosDelete = async (req, res) => {
  // Find specific shaparoo in the database and remove it
  knex('shaparoos')
    .where('id', req.body.id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({ message: `Shaparoo ${req.body.id} deleted.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error deleting ${req.body.id} shaparoo: ${err}` })
    })
}

// Remove all shaparoos on the list
exports.shaparoosReset = async (req, res) => {
  // Remove all shaparoos from database
  knex
    .select('*') // select all records
    .from('shaparoos') // from 'shaparoos' table
    .truncate() // remove the selection
    .then(() => {
      // Send a success message in response
      res.json({ message: 'Shaparoo list cleared.' })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error resetting shaparoo list: ${err}.` })
    })
}