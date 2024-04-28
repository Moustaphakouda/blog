const mongoose = require('mongoose');
// Allow Promises
mongoose.Promise = global.Promise;
// Connection
mongoose.connect(
    ('mongodb://127.0.0.1:27017/products'));
// Validation
 mongoose.connection
  .on('open', () => console.info('Database connected!'))
  .on('error', err => console.info('imposible de se connecter a la base de donnees'));