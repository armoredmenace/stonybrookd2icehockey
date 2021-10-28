window.addEventListener('load', () =>{
    const canvas = document.getElementById("mainCanvas");
    const ctx=canvas.getContext("2d");

    //Resizing
    canvas.width=window.innerWidth;

    //drawing main canvas for web browser
    ctx.fillStyle = "ffffff";
    ctx.fillRect(0,0,1260,400);
});