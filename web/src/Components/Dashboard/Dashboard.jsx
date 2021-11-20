import axios from "axios";
import { useState, useEffect } from "react";
import { baseUrl } from "./../../core";
import io from "socket.io-client";
import Typography from "@mui/material/Typography";
function Dashboard() {
  const [score, setScore] = useState({});

  useEffect(() => {
    axios.get(`${baseUrl}/api/v1/score`).then((res) => {
      console.log("res +++: ", res.data);
      setScore(res.data);
    });
  }, []);

  useEffect(() => {
    const socket = io(`${baseUrl}`);

    socket.on("connect", function () {
      console.log("connected to server");
    });
    socket.on("disconnect", function (message) {
      console.log("disconnected from server: ", message);
    });
    socket.on("SCORE", function (data) {
      console.log(data);
      setScore(data);
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div style={{ margin: "1rem" }}>
      <center>
        <h1>Live Cricktet Score Board </h1>
      </center>

    <div id='board'>
            <Typography
              sx={{ fontSize: 55 }}
            
              gutterBottom
            >
              {score?.teamOne} vs. {score?.teamTwo} (bat {score.bat})
            </Typography>
            <Typography variant="h5" component="div"  sx={{ fontSize: 45 }}>
              {score?.score} / {score?.wicket}
            </Typography>
            <Typography
              sx={{ fontSize: 35 }}
            
              gutterBottom
            >
              {score.batsman1} : {score.batsman1_score} 
            </Typography>
            <Typography
              sx={{ fontSize: 35 }}
            
              gutterBottom
            >
              {score.batsman2} : {score.batsman2_score} 
            </Typography>
            <Typography
              sx={{ fontSize: 35 }}
            
              gutterBottom
            >
              {score.bowler} : {score.bowler_runs}/{score.bowler_wickets} 
            </Typography>
            <Typography sx={{ mb: 1.5, fontsize:35 }} >
              over: {score.over}
            </Typography>
            <Typography variant="body2"  sx={{ fontSize: 25 }}>
              comentry:{" "}
              <b> {score?.comentry || "Pakistan crushing indian team"}</b>
            </Typography>
            </div>
    </div>
  );
}

export default Dashboard;
