import React from 'react';

function Playcanvas() {
     const style = {
        display: "block",
        width: "100%",
        height: "100vh",
        border: "none", 
        overflowY: "auto", 
        overflowX: "hidden"
     }

    return (
        <iframe src="https://launch.playcanvas.com/986933?debug=true" title="Playcanvas scene" style={style}></iframe>
    );
}

export default Playcanvas;
