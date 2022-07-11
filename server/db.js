// Import path module
const path = require('path')

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, 'db/database.sqlite')

// Create connection to SQLite database
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true
})
// Create a table in the database called "shaparoos"
knex.schema
  // Make sure no "shaparoos" table exists
  // before trying to create new
  .hasTable('shaparoos')
    .then((exists) => {
      if (!exists) {
        // If no "shaparoos" table exists
        // create new, with "id", "name", "form, and "color" columns
        // and use "id" as a primary identification
        // and increment "id" with every new record (shaparoo)
        return knex.schema.createTable('shaparoos', (table)  => {
          table.increments('id').primary()
          table.string('name')
          table.string('form')
          table.integer('color')
        })
        .then(() => {
          // Log success message
          console.log('Table \'Shaproos\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      // Log success message
      console.log('done')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
    })

// Just for debugging purposes:
// Log all data in "shaparooss" table
knex.select('*').from('shaparoos')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))

// Export the database
module.exports = knex