import axios from "axios";
import { useState, useEffect } from "react";
import { baseUrl } from "./../../core";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
function Admin() {
  const [score, setScore] = useState({
    teamOne: "",
    teamTwo: "",
    bat: "",
    score: "",
    wicket: "",
    over: "",
    batsman1: "",
    batsman2: "",
    bowler: "",
    batsman1_score: "",
    batsman2_score: "",
    bowler_wickets: "",
    bowler_runs: "",
  });

  useEffect(() => {
    axios.get(`${baseUrl}/api/v1/score`).then((res) => {
      console.log("res +++: ", res.data);
      setScore(res.data);
    });
  }, []);

  const submit = () => {
    axios.post(`${baseUrl}/api/v1/score`, score).then((res) => {
      console.log("res: ", res.data);
    });
  };

  return (
    <div style={{ margin: "1rem" }}>
      <center>
        <h1> Admin Control page </h1>
      </center>
      <div className="team">
        <TextField
          sx={({ ml: 4 }, { p: 2 })}
          size="medium"
          label="Team 1"
          variant="standard"
          value={score.teamOne}
          onChange={(e) => {
            setScore((prev) => {
              return { ...prev, teamOne: e.target.value };
            });
          }}
          placeholder="enter team one name"
        />
        <TextField
          sx={({ ml: 4 }, { p: 2 })}
          size="medium"
          label="Team 2"
          variant="standard"
          value={score.teamTwo}
          onChange={(e) => {
            setScore((prev) => {
              return { ...prev, teamTwo: e.target.value };
            });
          }}
          placeholder="enter team two name"
        />
        <br />
        <TextField
          sx={({ ml: 4 }, { p: 2 })}
          size="medium"
          label="Bating team"
          variant="standard"
          value={score.bat}
          onChange={(e) => {
            setScore((prev) => {
              return { ...prev, bat: e.target.value };
            });
          }}
          placeholder="who is batting"
        />
        <TextField
          sx={({ ml: 4 }, { p: 2 })}
          size="medium"
          label="runs/score"
          variant="standard"
          type="number"
          value={score.score}
          onChange={(e) => {
            setScore((prev) => {
              return { ...prev, score: e.target.value };
            });
          }}
          placeholder="What's the score"
        />
        <br />
        <TextField
          sx={({ ml: 4 }, { p: 2 })}
          size="medium"
          label="wicket"
          variant="standard"
          type="number"
          value={score.wicket}
          onChange={(e) => {
            setScore((prev) => {
              return { ...prev, wicket: e.target.value };
            });
          }}
          placeholder="how many wickets"
        />
        <TextField
          sx={({ ml: 4 }, { p: 2 })}
          size="medium"
          label="over"
          variant="standard"
          type="number"
          value={score.over}
          onChange={(e) => {
            setScore((prev) => {
              return { ...prev, over: e.target.value };
            });
          }}
          placeholder="how many overs"
        />
        <br />
        <TextField
          sx={({ ml: 4 }, { p: 2 })}
          size="medium"
          label="batsman1"
          variant="standard"
          value={score.batsman1}
          onChange={(e) => {
            setScore((prev) => {
              return { ...prev, batsman1: e.target.value };
            });
          }}
          placeholder="player name"
        />
        <TextField
          sx={({ ml: 4 }, { p: 2 })}
          size="medium"
          label="batsman1_score"
          variant="standard"
          type="number"
          value={score.batsman1_score}
          onChange={(e) => {
            setScore((prev) => {
              return { ...prev, batsman1_score: e.target.value };
            });
          }}
          placeholder="player score"
        />
        <br />
        <TextField
          sx={({ ml: 4 }, { p: 2 })}
          size="medium"
          label="batsman2"
          variant="standard"
          value={score.batsman2}
          onChange={(e) => {
            setScore((prev) => {
              return { ...prev, batsman2: e.target.value };
            });
          }}
          placeholder="player name"
        />
        <TextField
          sx={({ ml: 4 }, { p: 2 })}
          size="medium"
          label="batsman2_score"
          variant="standard"
          type="number"
          value={score.batsman2_score}
          onChange={(e) => {
            setScore((prev) => {
              return { ...prev, batsman2_score: e.target.value };
            });
          }}
          placeholder="player score"
        />
        <br />
        <TextField
          sx={({ ml: 4 }, { p: 2 })}
          size="medium"
          label="bowler"
          variant="standard"
          value={score.bowler}
          onChange={(e) => {
            setScore((prev) => {
              return { ...prev, bowler: e.target.value };
            });
          }}
          placeholder="player name"
        />
        <TextField
          sx={({ ml: 4 }, { p: 2 })}
          size="medium"
          label="bowler_wickets"
          variant="standard"
          type="number"
          value={score.bowler_wickets}
          onChange={(e) => {
            setScore((prev) => {
              return { ...prev, bowler_wickets: e.target.value };
            });
          }}
          placeholder="bowler wickets"
        />
        <br/>
         <TextField
          sx={({ ml: 4 }, { p: 2 })}
          size="medium"
          label="bowler_runs"
          variant="standard"
          type="number"
          value={score.bowler_runs}
          onChange={(e) => {
            setScore((prev) => {
              return { ...prev, bowler_runs: e.target.value };
            });
          }}
          placeholder="bowler runs"
        />
        <br />
        <Button variant="contained" sx={{ mt: 2 }} onClick={submit}>
         Live
        </Button>
      </div>
    </div>
  );
}

export default Admin;
