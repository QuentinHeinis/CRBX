import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-JDK210ccL3xm9Ld5SLFVFNG7",
    apiKey: import.meta.env.VITE_OPENAI,
});
export const openai = new OpenAIApi(configuration);
// export const response = await openai.listEngines();
// export const response = await openai.createImage({
//     prompt: "3d rings with a dark background",
//     n: 1,
//     size: "1024x1024",
// });