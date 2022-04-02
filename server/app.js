const textToSpeech = require("@google-cloud/text-to-speech");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

require("dotenv").config();
// Import other required libraries
const fs = require("fs");
const util = require("util");
// Creates a client
const client = new textToSpeech.TextToSpeechClient();
async function quickStart(p) {
  // The text to synthesize
  const text = p;
  // Construct the request
  const request = {
    input: { text: text },
    // Select the language and SSML voice gender (optional)
    voice: { languageCode: "sr-RS", ssmlGender: "FEMALE" },
    // select the type of audio encoding
    audioConfig: { audioEncoding: "MP3" },
  };

  // Performs the text-to-speech request
  const [response] = await client.synthesizeSpeech(request);
  // Write the binary audio content to a local file
  const writeFile = util.promisify(fs.writeFile);
  await writeFile(
    "./client/src/Views/output.mp3",
    response.audioContent,
    "binary"
  );
  console.log("Audio content written to file: output.mp3");
}

app.post("/api", async (req, res) => {
  const body2 = req.body.data;
  console.log(body2);
  await quickStart(body2);
  await res.send({ hi: "hello " + body2 });
});

app.listen(3030, () => {
  console.log("Server hosted on port 3030");
});
