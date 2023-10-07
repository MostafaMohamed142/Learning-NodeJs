//middleware is the code which runs between the response and the request
//  Middleware functions are functions that have access to the request object ( req ),
//  the response object ( res ), and the next function in the application's request-response cycle.
//   The next function is a function in the Express router which, when invoked,
//  executes the middleware succeeding the current middleware.

const app = express()
app.use('route' , express.static('whatever in that route in will map through it'))