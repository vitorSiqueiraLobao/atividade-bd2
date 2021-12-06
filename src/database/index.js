const mongoose = require(`mongoose`);

mongoose.connect(`mongodb://localhost/atividade-bd2`);
mongoose.Promise = global.Promise;

module.exports = mongoose;
