$(document).ready(function (){
    if(!$("#myCanvas").tagcanvas({
        textColour: "#08fdd8",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: true,
    }, "tags")){
        // something went wrong hide the canvas container,
        $("#myCanvasContainer");
    }
})