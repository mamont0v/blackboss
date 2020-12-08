
//const file = require('') (импорт был) обязательно указывать типы js или иной другой


//if (process.env.NODE_ENV !== 'production') require('dotenv').config(); // require('dotenv').config();
import dotenv from 'dotenv';
// const { ApolloServer } = require('apollo-server-express');
import express from 'express'; //web application framework for Node
import cors from 'cors'; //Cross-Origin Resource Sharing middleware
// const bodyParser = require('body-parser'); //body parsing middleware
import path from 'path';
import mongoose from 'mongoose';
//const helmet = require('helmet');
//const products = require('./data/data.js');
//const router = express.Router({ mergeParams: true });
//sensetive information
//const { MONGODB } = require('./config.js');
//product DB
//import products from './data/products.js'; //Не нужно так как мы в мангусе а не локально
//const typeDefs = require('./graphql/typeDefs');
//const resolvers = require('./graphql/resolvers')
import connectionDB from './configdb/db.js';
import colors from 'colors';
import productRoutes from './routers/Product.routes.js';
import { notFound, errorHandler } from './middlewares/errorHandling.js';

dotenv.config();

connectionDB();

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: ({ req }) => ({ req })
// });


const PORT = process.env.PORT || 5000

const app = express();

// const port = process.env.PORT || 5000;

// app.use(helmet());



//cors provides Express middleware to enable CORS with various options.
//corsOptions = {
//   origin: "http://localhost:8081"
// };
app.use(cors()); //corsOptions


//Routes
app.use('/api/products', productRoutes)

// use body parser to get data from POST requests
// parse requests of content-type - application/json
//body-parser helps to parse the request and create the req.body object
// app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
//middleware for parsing bodies from URL
// app.use(bodyParser.urlencoded({ extended: true }));


// server.applyMiddleware({ app });


//Error Handling
//Промежуточный обработчик для обработки ошибок должен быть определен последним, после указания всех app.use() и вызовов маршрутов
app.use(notFound);
app.use(errorHandler)



app.listen(PORT, error => {
  if (error) throw error;
  console.log(`Server running im ${process.env.NODE_ENV} on ${process.env.PORT} port`.yellow.bold);
})

// Use API routes from the api folder
// const apis = require("./api");
// app.use("/api", apis);

//Connect MongoDB before a own server!!!
// mongoose
//   .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     return app.listen({ port: port }, error => {
//       if (error) throw error;
//       console.log(`Server running on ${port}`);
//     })
//   })
//   .then((res) => {
//     console.log(`MONGOOSE ON 👉 HETE  ${port}`) //${res.url}
//   })
//   .then(() => {
//     console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`)
//   })
//   .catch((err) => console.log(err));

//since mongoose promise is depreciated, we overide it with node's promise < node 13v. For latest > 13v node not use this promise
// mongoose.Promise = global.Promise;

// const connection = mongoose.connection;

// connection.once("open", function () {
//   console.log("Connection with MongoDB was successful");
// });

const __dirname = path.resolve();

//For development mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html")); //or path.join
  });
} else {
  app.get('/', (req, res, next) => {
    res.send('API running ✌').json({
      message: 'hello'
    });
  });
}








// app.listen({ port: 5000 }, () => {
//   console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`)
// })


// if (process.env.NODE_ENV !== 'production') require('dotenv').config();

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// const app = express();





// app.post('/payment', (req, res) => {
//   const body = {
//     source: req.body.token.id,
//     amount: req.body.amount,
//     currency: 'usd'
//   };
//   stripe.charges.create(body, (stripeErr, stripeRes) => {
//     if (stripeErr) {
//       res.status(500).send({ error: stripeErr });
//     } else {
//       res.status(200).send({ error: stripeRes });
//     }
//   });
// });



// app.listen(port, error => {
//     if (error) throw error;
//     console.log(`Server running on ${port}`);
//   });