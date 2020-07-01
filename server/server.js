// Requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );

// Uses
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( express.static( 'server/public' ) );

// Globals
const port = 5000;

// Server up
app.listen( port, () => {
    console.log('server up!', port );
})