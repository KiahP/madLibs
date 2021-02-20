function createParagraph(){

    var wordOne = document.getElementbyId('wordOne').value;
    var wordTwo = document.getElementbyId('wordTwo').value;
    var wordThree = document.getElementbyId('wordThree').value;
    var wordFour = document.getElementbyId('wordFour').value;
    var wordFive = document.getElementbyId('wordFive').value;
    var wordSix = document.getElementbyId('wordSix').value;
    var wordSeven = document.getElementbyId('wordSeven').value;
    var wordEight = document.getElementbyId('wordEight').value;
    
    
    var paragraph = '<p> Ever since I left the ' + wordOne + ',you' + 'Got a' + wordTwo + ' for yourself now' + wordThree + 'knows and I feel left out' + 'Girl, you got me ' + wordFour + ' you got me stressed out' + 'Cause ever since I left the ' + wordOne + ', you' + "Started wearing " + wordFive + 'and going out more ' + 'Glasses of '+ wordSix + 'out on the dance floor' + "Hangin' with some " + wordSeven + " I've never seen before " + 'You used to call me on my cell phone' + 'Late-night when you need my ' + wordEight + 'Call me on my cell phone ' + 'Late-night when you need my ' + wordEight + 'I know when that hotling bling' + 'That can only mean one thing' + ' I know when that Hotline Bling ' + 'That can only mean one thing' +  ".</p>"


      
      document.getElementById("answer").innerHTML = paragraph;  
    }
    
  

   
    