const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;


function() {
  const db = mongoose.connection;
  const campaignSchema = mongoose.Schema({});
  const campaignModel = mongoose.model('campaign', campaignSchema);

  campaignModel.create({ campaignTitle: ''}, function(err, doc){
    // campaign collection is created in the DB
  })
}
before(done => {
  mongoose.connect('mongodb://localhost/shoelace_challenge', { useNewUrlParser: true });
  mongoose.connection
    .once('open', () => done())
    .on('error', error => {
      console.warn('Warning:', error)
    });
})

beforeEach(done => {
  mongoose.connection.collections.templates.drop(() => {
    // Ready to run next test!
    done();
  });
})

// Create a campaign --> POST to /api/campaigns
// Delete a campaign --> DELETE to /api/campaigns/id
// Edit a campaign --> PUT to /api/campaigns/id
// Read a campaign --> GET to /api/campaigns/id
