window.addEventListener('load', () =>{
    const canvas = document.querySelector("#canvas");
    const ctx=canvas.getContext("2d");

    //Resizing
    canvas.width=window.innerWidth;
    canvas.height=1257;

    //drawing main canvas for web browser
    ctx.fillStyle = "ffffff";
    ctx.fillRect(0,0,1260,400);
});