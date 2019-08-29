var request = new XMLHttpRequest();
request.open('GET', "https://www.thecocktaildb.com/api/json/v1/1/random.php", true);

request.onload = getDrink;

function getDrink(){
    if(request.status === 200){
        var data = JSON.parse(request.responseText);
        var drinkName = data.drinks[0].strDrink;
        console.log(drinkName);
        var drinkGlass = data.drinks[0].strGlass;
        consonle.log(drinkGlass);
        var ingredientOne = data.drinks[0].strMeasure1 + data.drinks[0].strIngredient1;
        console.log(ingredientOne);
        var ingredientTwo = data.drinks[0].strMeasure2 + data.drinks[0].strIngredient2;
        console.log(ingredientOne);
        var ingredientThree = data.drinks[0].strMeasure3 + data.drinks[0].strIngredient3;
        console.log(ingredientOne);
        var ingredientFour = data.drinks[0].strMeasure4 + data.drinks[0].strIngredient4;
        console.log(ingredientOne);
        var ingredientFive = data.drinks[0].strMeasure5 + data.drinks[0].strIngredient5;
        console.log(ingredientOne);
        var ingredientSix = data.drinks[0].strMeasure6 + data.drinks[0].strIngredient6;
        console.log(ingredientOne);
        var instructions = data.drinks[0].strInstructions;
        console.log(instructions);
        // document.querySelector('#drink').innerHTML = drinkName + drinkGlass + ingredientOne + ingredientTwo + ingredientThree + ingredientFour + ingredientFive + ingredientSix + instructions;
    }else{
        console.log('error');
    }
}



request.send();

function clock(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var hourString = hours;
    var minString = minutes;
    var secString = seconds;
    var secondsRotate = seconds*6;
    var minutesRotate = minutes*6;
    var hoursRotate = hours*6;
    //Sets 12 as the hour 0
    if(hours == 0){
        hourString = 12;
    }
    //If the hours exceed 12 then subtract 12 
    if(hours > 12){
        hourString = hours - 12;
    }

    if(hours < 10){
        hourString = '0' + hours;
    }
    //Adds a 0 to prevent single digit display on minutes
    if(minutes < 10){
        minString = '0' + minutes;
    }
    //Adds a 0 to prevent single digit display on seconds
    if(seconds < 10){
        secString = '0' + seconds;
    }
    //Grabs the digits ID and pieces it together using the hours, minString, and secString variables
    document.querySelector("#digits").innerHTML = `${hourString}:${minString}:${secString}`;
    //Grabs the clock border and rotates 6 degrees every second using the clockRotate variable and css selectors
    $("#clockWrapSeconds").css({'transform' : 'rotate('+ secondsRotate +'deg)'});
    //Same thing as above but rotates 6 degrees every minute with minutesRotate variable
    $("#clockWrapMinutes").css({'transform' : 'rotate('+ minutesRotate +'deg)'});
    //Same thing yet again but with hours
    $("#clockWrapHours").css({'transform' : 'rotate('+ hoursRotate +'deg)'});
    //updates the clock every 1000 miliseconds
    setTimeout(clock, 1000);
}

clock();