    //Crea la variable "mouseEvent" y establécela como “empty”.
    var mouseEvent = "empty";
    //Crea dos variables: "last_position_of_x" y "last_position_of_y".
    var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    //Define dos variables: 'color' y 'width_of_line' y asígnales los valores.
    color = "black";
    width_of_line = 1;
    canvas.addEventListener("mousedown", my_mousedown);
    function my_mousedown(e)
    {
        //Inicio de actividad adicional
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Finaliza actividad adicional

        mouseEvent = "mousedown";
    }

    //Crea la función de detección de evento addEventListener()para mouseup(). 
    Canvas.addEventListener("mouseup", my_mouseup);

    function my_mouseup(e)
    {
        mouseEvent = "mouseup";
    }

    

    //Crea la función de detección de evento addEventListener()para mouseleave(). 
    Canvas.addEventListener("mouseleave", my_mousemeleave);

    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }




    
    function my_mousemove(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        //Check whether the mouseEvent is "mousedown".  
        
        //If yes call "beginPath()".
        if (mouseEvent == "mousedown") {
        ctx.beginpath();
        ctx.strokestyle = color;
        ctx.linewidth = width_of_line
        
        //print the current x and y coordinate.
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveto(last_position_of_x, last_position_of_y);


        //print the current x and y coordinate.
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineto(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        }
        // "last_position_of_x" and "last_position_of_y" is updated with current mouse position of x and y.
        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }


//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
