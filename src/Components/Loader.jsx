import React, { useState } from "react";
import "./Loader.css";

function Loader() {

    const [load, setLoad] = useState(false);

    const checkLoad=()=>{
        setLoad(true);
        setTimeout(unLoad, 2000);
    };

    const unLoad = () =>{
        setLoad(false);
    };


  return (
    <div className={`${load ? "loader-container": "unloader-container"}`} onLoad={checkLoad}>
      <img src="image/loader-img.gif" alt="" />
    </div>
  );
}

export default Loader;
