/*Author: Paweł Biełuszka*/

function coordinatesLine(min_x,a,b,iter,how_many_coordinates) {

    //deklaracja zmiennych
    var x,y,result;
    x=min_x;

    result = "Next coordinates of the secion about equation: " + "y="+a+"x+"+b + "<BR>";

    //algorytm realizujący wyliczanie kolejnych punktów odcinka w kartezjańskim układzie współrzędnych z zadanym krokiem iteracji
    for(var i = 0; i < how_many_coordinates; i++){
        y=a*x+b;
        console.log("X: " + x);
        console.log("Y: " + y);

        x += iter;

        result += "X"+i+"="+x+ ", " + "Y"+i+"="+y+"<BR>";
    }

    //osadzenie wyniku w kodzie HTML
    document.getElementById('box').innerHTML = result;

}


console.log(coordinatesLine(-1,1,2,0.5,2))

// for (let i = 1; i < 50; i++){
//     console.log(randomNumber())
// }