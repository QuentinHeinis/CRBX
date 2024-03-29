import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import { Configuration, OpenAIApi } from 'openai'
import fs from 'fs'
dotenv.config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
    res.status(200).send({
        message: "hello world"
    })
})

app.post('/', async (req, res) => {
    try {
        const prompt = req.body.prompt

        const response = await openai.createImage({
            prompt: `${prompt}`,
            n: 1,
            size: "1024x1024",
        });
        res.status(200).send({
            bot: response.data
        });

    } catch (error) {
        console.error(error)
        res.status(500).send(error || 'Something went wrong');
    }
})

app.listen(5000, () => console.log('AI server started on http://localhost:5000'))