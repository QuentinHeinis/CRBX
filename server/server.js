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
    // const image = ""
    // const prompt = "3d red donuts with light background"
    // const response = await openai.createImageEdit(
    //     fs.createReadStream("./test.png"),
    //     fs.createReadStream("./test.png"),
    //     "3d red donuts with light background",
    //     1,
    //     "1024x1024"
    // );
    // console.log(response)
    // res.status(200).send({
    //     bot: response.data
    // })
    res.status(200).send({
        message: "test"
    })
})

app.post('/', async (req, res) => {
    try {
        const prompt = req.body.prompt;
        const image = req.body.image;


        const response = await openai.createImageEdit(
            fs.createReadStream(`${image}`),
            fs.createReadStream(`${image}`),
            `${prompt}`,
            1,
            "1024x1024"
        );
        res.status(200).send({
            bot: response.data
        });

    } catch (error) {
        console.error(error)
        res.status(500).send(error || 'Something went wrong');
    }
})

app.listen(5000, () => console.log('AI server started on http://localhost:5000'))