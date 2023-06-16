import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { rangeStoreVal, display, outerElm } from "../data";

import Draggable from "react-draggable";
import "./ScreenThree.css";

function ScreenThree() {
  //let history = useHistory();
  //const navigate = useNegative();

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
                {val == "isrighteye" ? (
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
                ) : null}
              </>
            );
          }
        })}
      </div>
    );

    // Object.keys(rangeStoreVal).map((val, index) => {
    //   console.log(rangeStoreVal[val]["isChecked"]);

    //   let isActive = rangeStoreVal[val]["isChecked"];

    //   return (
    //     <div>
    //       <h1>adsd</h1>
    //     </div>
    //   );
    //   //   if (isActive == true) {
    //   //     console.log("YES");
    //   //     return (
    //   //       <div>
    //   //         <h1>{val}</h1>
    //   //       </div>
    //   //     );
    //   //   }
    // });
  };

  function handleClick() {
    var arrData = [];
    var itm = document.getElementById("Assemble");

    var cln = itm.cloneNode(true);
    display.push(cln);
    // display.push(document.getElementById("islefteye"));
    // display.push(document.getElementById("isrighteye"));
    // display.push(document.getElementById("isnose"));
    // display.push(document.getElementById("issmile"));
    

    // outerElm.push(document.getElementById("islefteye").outerHTML);
    // outerElm.push(document.getElementById("isrighteye").outerHTML);
    // outerElm.push(document.getElementById("isnose").outerHTML);
    // outerElm.push(document.getElementById("issmile").outerHTML);
    // 

    // sessionStorage.setItem("cloneNodeData", cln);
    console.log(cln, "******************");

    // history.push("/screenFour");
    // arrData.push(cln);
    // history.push({
    //   pathname: "/screenFour",

      // state: { detail: arrData },
    //});

  }

  return (
    <div className="ScreenThree-main">
      <div>{getRender()} </div>
      <div>
        <h3>DRAG AND DROP</h3>
      </div>
      <Link to= "/ScreenFour">
      <div className="ScreenThree-btn" onClick={handleClick}>
        {" "}
        <center>Next</center>
      </div>
      </Link>
    </div>
  );
}

export default ScreenThree;
