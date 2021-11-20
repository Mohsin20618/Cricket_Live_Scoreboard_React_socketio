import express from 'express'
import mongoose from "mongoose"
import cors from "cors"
import path from "path";
import { createServer } from "http";
import { Server } from "socket.io";
const __dirname = path.resolve();

const PORT = process.env.PORT || 5000
const app = express()

mongoose.connect(
  "mongodb+srv://Mohsin:Mohsin20618@cluster0.tdyk5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);


const Score = mongoose.model("Score", {
    teamOne: String,
    teamTwo: String,
    bat: String,
    score: String,
    wicket: String,
    over: String,
    batsman1: String,
    batsman2: String,
    bowler: String,
    batsman1_score:String,
    batsman2_score:String,
    bowler_wickets:String,
    bowler_runs:String,
    commentary:String
})
app.use(express.json())

app.use(cors({
    origin: true,
}))

app.use('/', express.static(path.join(__dirname, 'web/build')))
app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "./web/build/index.html"))
})

app.post("/api/v1/score", (req, res) => {
    const newScore = new Score({
        teamOne: req.body.teamOne,
        teamTwo: req.body.teamTwo,
        bat: req.body.bat,
        score: req.body.score,
        wicket: req.body.wicket,
        over: req.body.over,
        batsman1:req.body.batsman1,
        batsman2:req.body.batsman2,
        bowler:req.body.bowler,
        batsman1_score:req.body.batsman1_score,
        batsman2_score:req.body.batsman2_score,
        bowler_wickets:req.body.bowler_wickets,
        bowler_runs:req.body.bowler_runs,
        commentary:req.body.commentary,
    });
    newScore.save().then(() => {
        console.log("Score created");

        io.emit("SCORE", {
            teamOne: req.body.teamOne,
            teamTwo: req.body.teamTwo,
            bat: req.body.bat,
            score: req.body.score,
            wicket: req.body.wicket,
            over: req.body.over,
            batsman1:req.body.batsman1,
            batsman2:req.body.batsman2,
            bowler:req.body.bowler,
            batsman1_score:req.body.batsman1_score,
            batsman2_score:req.body.batsman2_score,
            bowler_wickets:req.body.bowler_wickets,
            bowler_runs:req.body.bowler_runs,
            commentary:req.body.commentary,
        });

        res.send("Score created");
    });
});

app.get("/api/v1/score", (req, res) => {

    Score.findOne({})
        .sort({ _id: "desc" })
        .exec(function (err, data) {
            res.send(data);
        });
});

app.get("/**", (req, res, next) => {
    res.sendFile(path.join(__dirname, "./web/build/index.html"))
    // res.redirect("/")
})

const server = createServer(app);
const io = new Server(server, { cors: { origin: "*", methods: "*", } });

io.on("connection", (socket) => {
    console.log("New client connected with id: ", socket.id);
    socket.on("disconnect", (message) => {
        console.log("Client disconnected with id: ", message);
    });
});

server.listen(PORT, function () {
    console.log("server is running on", PORT);
})