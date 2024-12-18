const Subscribe = require("../models/product.models");

const getSubs = async(req, res)=>{
    try {
        const subscriptions = await Subscribe.find();
        res.status(200).json(subscriptions);
      } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const getSingleSub = async (req, res) => {
    try {
      const { id } = req.params;
      const subscription = await Subscribe.findById(id);
  
      if (!subscription) {
        return res.status(404).json({ message: "Subscription not found" });
      }
  
      res.status(200).json(subscription);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}

const postSubs = async (req, res) => {
    try {
      const { email } = req.body;
  
      // Validate input
      if (!email) {
        return res.status(400).json({ message: "Please provide an email to subscribe." });
      }
  
      const newSubscription = await Subscribe.create(req.body);
      res.status(201).json(newSubscription); // Send back the created document
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

const putSubs = (async (req, res) => {
    try {
      const { id } = req.params;
  
      // Update the document
      const updatedSubscription = await Subscribe.findByIdAndUpdate(id, req.body, { 
        new: true, // Return the updated document
        runValidators: true // Run schema validation
      });
  
      if (!updatedSubscription) {
        return res.status(404).json({ message: "Subscription not found" });
      }
  
      res.status(200).json(updatedSubscription);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })

  const deleteSubs = (async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedSubscription = await Subscribe.findByIdAndDelete(id);
  
      if (!deletedSubscription) {
        return res.status(404).json({ message: "Subscription not found" });
      }
  
      res.status(200).json({ message: "Subscription deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })
module.exports = {
    getSubs, 
    getSingleSub,
    postSubs,
    putSubs,
    deleteSubs
}