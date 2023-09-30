import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "org-3FoXI7L3tfnx24EGgLu55SoN",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();
