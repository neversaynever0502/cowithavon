var mongoose = require( 'mongoose' ); 
var Schema = mongoose.Schema; 
var Pay = new Schema({ user_id : String, content : String, money: Number, updated_at : Date });
mongoose.model( 'Pay', Pay ); 
mongoose.connect( 'mongodb://localhost/express-pay' );