import logo from "./logo.svg";
import "./App.css";
import dummy from "./data.json";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

const Question = styled.div`
  /* height: 800px; */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  vertical-align: center;
  flex-direction: column;
  .title {
    text-align: center;
  }
  .question-box {
    background-color: aliceblue;
    width: 75%;
    height: 15rem;
    display: flex;
    justify-content: center;
    border-radius: 8%;
    & p {
      display: flex;
      align-items: center;
    }
  }
  .Select_button {
    display: flex;
    margin-top: 30px;
    justify-content: center;
    & .right_button {
      font-weight: bold;
      margin-left: 10px;
      background-color: white;
      color: black;
      border: none;
    }
    & .left_button {
      font-weight: bold;
      background-color: #61dafb;
      color: black;
      border: none;
    }
  }
  .result_value {
    display: flex;
    justify-content: center;
    & p {
      background-color: white;
      width: 300px;
      text-align: center;
    }
  }
  .res_button {
    display: flex;
    margin: 0 auto;
    margin-top: 30px;
    justify-content: center;
    font-weight: bold;
    background-color: #8c8c8c;
    color: white;
    border: none;
  }
`;

const Result = styled.div``;

function App({}) {
  const [quest, setquest] = useState([]);
  const [num, setNum] = useState(0);
  const [total, settotal] = useState([]);
  const [summary, setsummary] = useState([]);
  // const [name, setname] = useState("");

  useEffect(() => {
    setquest(dummy.questions[num].Quest);
    setsummary(dummy.questions[num].result);
  });

  const Add = () => {
    settotal(total.concat(summary));
    setquest([]);
  };

  const Sum = () => {};

  return (
    <>
      <Question>
        {/* <p>sdf</p> */}
        {/* {console.log(quest)} */}
        {/* <TextField onChange id="standard-basic" label="name" variant="standard" /> */}

        {num === 6 ? (
          <>
            {/* <h2>{num + 1}???</h2> */}
            <h1 className="title">{quest}</h1>
            <p className="title"> ????????? ????????? ??????????</p>
            {/* <button
              onClick={() => {
                Add();
                setNum(6);
              }}
            >
              ???
            </button>{" "}
            <button>?????????</button> */}
            {/* <p>?????? ????????????</p> */}
          </>
        ) : (
          <>
            <h1 className="title"> ????????? ?????? ?????? ??????</h1>
            <h2 className="title">{num + 1} / 6</h2>

            <div className="question-box">
              <p>{quest}</p>
            </div>
            {/* bootstrap test */}
            <div className="Select_button">
              <Button
                className="left_button"
                variant="contained"
                type="button"
                onClick={() => {
                  setNum(num + 1);
                  Add();
                }}
              >
                ???{" "}
              </Button>
              <Button
                className="right_button"
                variant="outlined"
                type="button"
                onClick={() => {
                  setNum(num + 1);
                }}
              >
                ?????????
              </Button>
            </div>
          </>
        )}

        {/* <button
        onClick={() => {
          setNum(num + 1);
          Add();
        }}
      >
        ???{" "}
      </button>{" "}
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        ?????????
      </button> */}

        {num === 6
          ? total.map((res, index) => {
              return (
                <>
                  <div className="result_value">
                    <p>{res}</p>
                  </div>
                </>
              );
            })
          : null}

        {num === 6 ? (
          <>
            <Button className="res_button" variant="contained" type="button">
              ????????? ?????? ?????? ????????????
            </Button>
          </>
        ) : null}
        {/* {console.log(total)} */}
        {/* {quest.map((res, index) => {
        return (
          <div key={index}>
            <p>{res.Quest}</p>
            <button>??? </button> <button>?????????</button>
          </div>
        );
      })} */}
      </Question>
    </>
  );
}

export default App;