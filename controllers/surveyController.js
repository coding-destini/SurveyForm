const Survey = require('../models/surveyModel');

module.exports.getForm = async (req, res) => {
  try {
    //all survey data from the database
    const allSurveys = await Survey.find();
    res.json({ surveys: allSurveys });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports.submitForm = async (req, res) => {
  try {
    const surveyData = req.body;
    const survey = new Survey(surveyData);
    await survey.save();
    res.json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
