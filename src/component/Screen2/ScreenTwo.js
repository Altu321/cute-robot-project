import react, { useState } from "react";
import "./ScreenTwo.css";
import robotface from "../../image/robotface.jpeg";
import lefteye from "../../image/lefteye.jpeg";
import righteye from "../../image/righteye.jpeg";
import nose from "../../image/nose.jpeg";
import smile from "../../image/smile.jpeg";
import { Link } from "react-router-dom";
import { rangeStoreVal } from "../data";

function ScreenTwo() {
  const [islefteye, setlefteye] = useState(false);
  const [isrighteye, setrighteye] = useState(false);
  const [isnose, setnose] = useState(false);
  const [issmile, setsmile] = useState(false);

  const handleSwitch = (comp) => {
    console.log(comp);
    switch (comp) {
      case "lefteye": {
        if (islefteye) {
          rangeStoreVal["islefteye"].isChecked = false;

          setlefteye(false);
        } else {
          sessionStorage.setItem("data", { islefteye: islefteye });
          rangeStoreVal["islefteye"].isChecked = true;

          setlefteye(true);
        }
        break;
      }

      case "righteye": {
        if (isrighteye) {
          rangeStoreVal["isrighteye"].isChecked = false;

          setrighteye(false);
        } else {
          rangeStoreVal["isrighteye"].isChecked = true;

          setrighteye(true);
        }
        break;
      }

      case "nose": {
        if (isnose) {
          rangeStoreVal["isnose"].isChecked = false;

          setnose(false);
        } else {
          rangeStoreVal["isnose"].isChecked = true;
          setnose(true);
        }
        break;
      }

      case "smile": {
        if (issmile) {
          rangeStoreVal["issmile"].isChecked = false;

          setsmile(false);
        } else {
          rangeStoreVal["issmile"].isChecked = true;

          setsmile(true);
        }
        break;
      }
    }
  };

  console.log("file data ", rangeStoreVal);

  return (
    <div className="ScreenTwo">
      <div className="ScreenTwo-title">Select Robot Face Parts</div>
      <div className="ScreenTwo-list">
        <div
          className={issmile ? "isActivelefteye" : "notActivelefteye"}
          style={{ height: "80%", width: "70%", position: "relative" }}
          onClick={() => handleSwitch("smile")}
        >
          {" "}
          <img
            src={smile}
            style={{ height: "70%", width: "70%", alignItems: "center" }}
          ></img>
          <h3 style={{ position: "absolute", bottom: "-10px", left: "20%" }}>
            Smile
          </h3>
        </div>

        <div
          className={islefteye ? "isActivelefteye" : "notActivelefteye"}
          style={{ height: "80%", width: "70%", position: "relative" }}
        >
          {" "}
          <img
            style={{ height: "70%", width: "70%" }}
            src={lefteye}
            onClick={() => handleSwitch("lefteye")}
          ></img>{" "}
          <h3 style={{ position: "absolute", bottom: "-10px", left: "19%" }}>
            Left EYE
          </h3>
        </div>

        <div
          className={isnose ? "isActivelefteye" : "notActivelefteye"}
          style={{ height: "80%", width: "70%", position: "relative" }}
        >
          {" "}
          <img
            style={{ height: "70%", width: "70%" }}
            src={nose}
            onClick={() => handleSwitch("nose")}
          ></img>
          <h3 style={{ position: "absolute", bottom: "-10px", left: "20%" }}>
            NOSE
          </h3>
        </div>

        <div
          className={isrighteye ? "isActivelefteye" : "notActivelefteye"}
          style={{ height: "80%", width: "70%", position: "relative" }}
        >
          {" "}
          <img
            style={{ height: "70%", width: "70%" }}
            src={righteye}
            onClick={() => handleSwitch("righteye")}
          ></img>
          <h3 style={{ position: "absolute", bottom: "-10px", left: "19%" }}>
            Right Eye
          </h3>
        </div>
      </div>
      <div className="ScreenTwo-img">
        {" "}
        <img src={robotface} style={{ width: "50vh" }}></img>
      </div>
      <Link to="/screenThree">
        <div className="ScreenTwo-btn">
          {" "}
          <center>Next</center>
        </div>
      </Link>
    </div>
  );
}

export default ScreenTwo;
