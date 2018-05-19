let numb1, numb2, calcul, result, current, display, target, buttonType;
numb1 = "";
numb2 = "";
calcul = "";
result = "";
//Declare main variables


$("input").click(function(e) {
    target = e.currentTarget.value;
    buttonType = e.currentTarget.getAttribute("data-button-type");
    display = $(".textview");

        switch (buttonType) {
        case "number":
                if (calcul.length > 0) {

                    numb2 += target;
                    console.log(numb2);
                }

                else {

                    numb1 += target;
                    console.log(numb1);
                }
            break;
        case "calcul":
                calcul += target;
                console.log(calcul);

            break;
        case "result":
            var fresh1 = parseInt(numb1);
            var fresh2 = parseInt(numb2);
            switch (calcul) {
               case "+":  result += fresh1 + fresh2;
               break;
               case "/":  result += fresh1 / fresh2;
               break;
               case "*":  result += fresh1 * fresh2;
               break;
               case "-":  result += fresh1 - fresh2;
            }
            console.log(result);

            break;
        case "erase":
            console.log("erase");

            break;
    }

});
