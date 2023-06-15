import { useEffect} from "react";
import { display,outerElm } from "../data";
import "./ScreenFour.css";






function ScreenFour(props) {
    console.log(props.location.state);
    //   console.log(display);
    //   console.log(JSON.parse(sessionStorage.getItem("cloneNodeData")));
    //   console.log(document.getElementById("Assemble"));
  
    //   let data = display[0];
  
    console.log(display, "data");
    const displayNode = () => {
        return display.map((val, index) => {
          <div>{document.getElementById("data_Screen").appendChild(val)}</div>;
        });
      };
    
      useEffect(() => {
        return display.map((val, index) => {
          <div>{document.getElementById("data_Screen").appendChild(val)}</div>;
        });
      }, []);
      return (
        <div id="data_Screen">
          <div className="ScreenFour-btn">
            {" "}
            <center>Final Result</center>
          </div>
          <h4 className="titleFour">WHAT A DESIGN 😊 </h4>
    
          {/* <div>{displayNode()}</div> */}
        </div>
      );
    }
    
    export default ScreenFour;