const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

describe('Templates controller', () => {
  it('GET to /api/templates/1 retrieves a Single Ad template', done => {
    request(app)
      .get('/api/templates/1')
      .then(res => {
        // assert(res.body.adTitle === 'Default Title')
        // assert(res.body.adCopy === 'Default Text')
        // assert(res.body.campaignObjective === 'LeadGeneration')
        done();
      })
    })

  it('GET to /api/templates/2 retrieves a Carousel Ad template', done => {
    request(app)
      .get('/api/templates/2')
      .then(res => {
        // assert(res.body.ads.length === 3)
        // assert(res.body.ads[0].adTitle === 'Default Title1')
        // assert(res.body.ads[0].adCopy === 'Default Text1')
        // assert(res.body.campaignObjective === 'Conversions')
        done();
      })
    })

  it('GET to /api/templates/3 retrieves a Slider Ad template', done => {
    request(app)
      .get('/api/templates/3')
      .then(res => {
        // assert(res.body.ads.length === 3)
        // assert(res.body.ads[0].adTitle === 'Default Title1')
        // assert(res.body.ads[0].adCopy === 'Default Text1')
        // assert(res.body.campaignObjective === 'Impressions')
        done();
      })
    })
})
