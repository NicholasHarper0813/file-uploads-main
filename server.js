const bodyParser = require( 'body-parser' );
const express = require( 'express' );
const router = express.Router();
const path = require( 'path' );
const app = express();

app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( bodyParser.json() );
app.use( '/api/profile', profile );

module.exports = router;
const profile = require( './routes/api/profile' );

if ( process.env.NODE_ENV === 'production' ) 
{
	app.use( express.static( 'client/build' ) );
	app.get( '*', ( req, res ) => res.sendFile( path.resolve( __dirname, 'client', 'build', 'index.html' ) ) );
}

const port = process.env.PORT || 5000;
app.listen( port, () => console.log( `Server running on port: ${port}` ) );
