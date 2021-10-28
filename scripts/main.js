window.addEventListener('load', () =>{
    const canvas = document.querySelector("#canvas");
    const ctx=canvas.getContext("2d");

    ctx.fillStyle = "ffffff";
    ctx.fillRect(0,0,1260,400);
});

window.addEventListener('resize', () => {
    //Resizing
    canvas.width=window.innerWidth;
    canvas.height=1257;
});