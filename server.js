const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const path = require( 'path' );
const router = express.Router();
const app = express();

app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( bodyParser.json() );

module.exports = router;

const profile = require( './routes/api/profile' );
app.use( '/api/profile', profile );

if ( process.env.NODE_ENV === 'production' ) {
	// Set a static folder
	app.use( express.static( 'client/build' ) );
	app.get( '*', ( req, res ) => res.sendFile( path.resolve( __dirname, 'client', 'build', 'index.html' ) ) );

}

const port = process.env.PORT || 5000;
app.listen( port, () => console.log( `Server running on port: ${port}` ) );
