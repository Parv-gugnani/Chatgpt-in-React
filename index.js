const { Configuration, OpenAIApi } = require("openai");
const express = require("express");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function callApi() {
  try {
    console.log(completion.data.choices[0].text);
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
  }
}

//create

const app = express();
const port = 3000;

app.post("/", async (req, res) => {
  const completion = await openai.createCompletion({
    engine: "text-davinci-003",
    prompt: "Say this is a test.",
    max_tokens: 7,
    temperature: 0,
  });
  console.log(response.data.choices[0].text);
  res.json({
    data: response.data,
  });
});

app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
});
