import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { rangeStoreVal, display, outerElm } from "../data";

import Draggable from "react-draggable";
import "./ScreenThree.css";

function ScreenThree() {

  
  

  const handleStart = (e) => {
    // console.log("Start");
    // console.log(e);
  };
  const handleDrag = (e) => {
    // console.log("Drag");
    // console.log(e);
  };
  const handleStop = (e, val) => {
    console.log("Stop");
    console.log(val);
    // console.log(e.target.val);

    console.log(document.getElementById(`${val}`));

    switch (val) {
      case "islefteye": {
        document.getElementById(`${val}`).style.height = "200px";

        document.getElementById(`${val}`).style.width = "250px";
        break;
      }

      case "isrighteye": {
        document.getElementById(`${val}`).style.height = "200px";

        document.getElementById(`${val}`).style.width = "250px";
        break;
      }
      case "isnose": {
        document.getElementById(`${val}`).style.height = "200px";

        document.getElementById(`${val}`).style.width = "350px";
        break;
      }
      case "issmile": {
        document.getElementById(`${val}`).style.height = "80px";

        document.getElementById(`${val}`).style.width = "100px";
        break;
      }
    }
  };
  const getRender = () => {
    return (
      <div id="Assemble">
        {Object.keys(rangeStoreVal).map((val, index) => {
          let isActive = rangeStoreVal[val]["isChecked"];

          if (isActive == true) {
            return (
              <>
                <Draggable
                  onStart={handleStart}
                  onDrag={handleDrag}
                  onStop={handleStop}
                  onStop={(e) => handleStop(e.MouseEvent, val)}
                >
                  <div
                    id={val}
                    style={{
                      width: "80px",
                      height: "80px",
                      marginBottom: "10px",
                    }}
                    value={val}
                  >
                    <img
                      src={rangeStoreVal[val]["path"]}
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                </Draggable>

                {/* righteye */}
                {/* {val == "islefteye" ? (
                  <Draggable
                    onStart={handleStart}
                    onDrag={handleDrag}
                    onStop={handleStop}
                    onStop={(e) => handleStop(e.MouseEvent, `${val}2`)}
                  >
                    <div
                      id={`${val}2`}
                      style={{
                        width: "80px",
                        height: "80px",
                        marginBottom: "10px",
                      }}
                      value={val}
                    >
                      <img
                        src={rangeStoreVal[val]["path"]}
                        style={{ height: "100%", width: "100%" }}
                      />
                    </div>
                  </Draggable>
                ) : null} */}
              </>
            );
          }
        })}
      </div>
    );
  };

  

  function handleClick() {
    const navigate=useNavigate();
    var arrData = [];
    var itm = document.getElementById("Assemble");

    var cln = itm.cloneNode(true);
    display.push(cln);

    //    console.log(cln, "******************");

    //arrData.push(cln);
   
    navigate("/ScreenFour");
  };



  return (
    <div className="ScreenThree-main">
      <div>{getRender()} </div>
      <div>
        <h3>DRAG AND DROP</h3>
      </div>
      
      <div className="ScreenThree-btn" onClick={handleClick}>
        {" "}
        <center>Next</center>
      </div>
    </div>
  );
}

export default ScreenThree;
