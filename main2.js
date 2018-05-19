let current = "";
let calculSign = "";
let display = document.querySelector("#input");
$("input").click(function(e) {
    target = e.currentTarget.value;
    current += target;
    display.innerHTML = current;
    let buttonType = e.currentTarget.getAttribute("data-button-type");
    // If button = result, make the maths
    //If button = clear, set current = 0

     switch (buttonType) {
         case "number":

             break;
         case "calcul":


              switch (target) {
               case "+":
               calculSign += "+";
               break;
               case "/":
               calculSign += "/";
               break;
               case "*":
               calculSign += "*";
               break;
               case "-":
               calculSign += "-";
            }

             break;
         case "result":
             let positionsigns = "";
             let signArr = calculSign.split('');
             console.log(signArr);

             for (i=0; i<signArr.length; i++) {

                 positionsigns += current.indexOf(signArr[i]);

             }
             console.log(positionsigns);


             break;
         case "erase":
             console.log("erase");

             break;
     }

});
