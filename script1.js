

$(document).ready(function(){

  var numbOneTemp = $("#firNum").val(); //makes numbOne the first input
  var numbTwoTemp = $("#secNum").val();
  var firstNumber = parseInt(numbOneTemp);
  var secondNumber = parseInt(numbTwoTemp);

  


  var numbOneTemp = $("#firNum").val();
  var firstNumber = parseInt(numbOneTemp);
  for (i = 1; i <= 100; i++) {
      if (firstNumber > 0) {
          $("#inputOne").text(firstNumber);
      }


      else {
          i = i + 1
      }

  }
    





  $("#button").click(function(){ //if you click on th button it does what ever you tell it to do bellow

    var firstMaxFactor = firstNumber + 5;
    var secondMaxFactor = secondNumber + 5;
    var listOfNumbers = [];
    var factorsOfFirstNumber = [];
    var factorsOfSecondNumber = [];
    var factorsOfThirdNumber = [];
    var listCountOne = 0;
    var listCounttwo = 0;
    var outCome = []
    



    for (i = -100; i <= -1; i++) {
      if (secondNumber % i == 0) {
        factorsOfFirstNumber.push(i);
        factorsOfThirdNumber.push(parseInt(secondNumber)/parseInt(i));
      }
    }
    for (x = 1; x <= secondMaxFactor; x++) {
      if (secondNumber % x == 0) {
        factorsOfFirstNumber.push(x);
        factorsOfThirdNumber.push(parseInt(secondNumber)/parseInt(x));


      }
    }
    console.log(factorsOfThirdNumber);
    console.log(factorsOfFirstNumber);
    for (var p = 0; p < factorsOfFirstNumber.length; p++) {
      
      if (factorsOfFirstNumber[p] * factorsOfThirdNumber[p] == secondNumber && factorsOfFirstNumber[p] + factorsOfThirdNumber[p] == firstNumber) {
        outCome.push(factorsOfFirstNumber[p]);
        outCome.push(factorsOfThirdNumber[p]);
        console.log(factorsOfThirdNumber[p]);
      }
    }


    function removeDups(data) {
      return data.filter((value, index) => data.indexOf(value) === index);

    }



    var outComeNoDup = removeDups(outCome);

 

 
    
  

    var outCome1 = outCome[0]
    var outCome2 = outCome[1]

    $("#outCome1").text(outCome1);
    $("#outCome2").text(outCome2);

    
  });

  

  




















});
