const Campaign = require('../models/campaign');

module.exports = {
  create(req, res) {
    const data = req.body;
    const { campaignTitle, campaignObjective, adNetworkID, status, template } = data;
    const campaign = new Campaign({
      campaignTitle,
      template,
      ads: data.ad ? [data.ad] : data.ads,
      campaignObjective,
      status,
      adNetworkID,
    });
    campaign.save();
    res.send(campaign);
  },
}
