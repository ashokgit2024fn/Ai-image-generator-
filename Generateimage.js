
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey:""});

const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await openai.images.generate({
      model: "dall-e-2",
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const generatedImage = response.data[0].b64_json;
    res.status(200).json({ photo: generatedImage });

  } catch (error) {
    res.status(500).json({ Errorgenerating:error });
  }
};

module.exports = generateImage;
