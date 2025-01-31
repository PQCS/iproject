const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

const generateSongRecommendation = async (req, res) => {
    const { prompt } = req.body;
    try {
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt,
            max_tokens: 150,
        });
        res.json(response.data.choices[0].text);
    } catch (error) {
        res.status(500).json({ error: 'Error generating recommendation' });
    }
};

module.exports = { generateSongRecommendation };
