(() => {
    let playerChoice;
    let compChoice;
    let imgArr = ['img/scissorhands.jpg','img/Rock.jpg','img/toilet-paper.jpg','img/catapult.png'];

    let scissors = document.getElementById("Scissors");
    let rock = document.getElementById("Rock");
    let paper = document.getElementById("Paper");
    let cata = document.getElementById("Catapult");
    let comp = document.getElementById("Computer");
    let calc = document.getElementById("Run");
    const res = document.getElementById("result");
    let resIm1 = document.getElementById("imgres1");
    let resIm2 = document.getElementById("imgres2");
    let vs = document.getElementById("vs");

    scissors.addEventListener("click", function () {
       console.log("scissors");
       playerChoice = 0;
   });
    rock.addEventListener("click", function () {
        console.log("rock");
        playerChoice = 1;
    });
    paper.addEventListener("click", function () {
        console.log("paper");
        playerChoice = 2;
    });
    cata.addEventListener("click", function () {
        console.log("catapult");
        playerChoice = 3;
    });
    comp.addEventListener("click", function () {
        console.log("Computer");
        compChoice = Math.floor(Math.random() * 4);
        console.log(compChoice);
    });
    calc.addEventListener("click", function () {
        console.log("Run");
        resIm1.setAttribute("style", "background-image: url(" + imgArr[playerChoice] + "); background-size: cover");
        vs.setAttribute("style", "background-image: url(" + "img/vs.png" + "); background-size: cover");
        resIm2.setAttribute("style", "background-image: url(" + imgArr[compChoice] + "); background-size: cover");
        
        if (playerChoice === compChoice){
            res.setAttribute("style", "background-image: url(" + "img/tie.png" + "); background-size: cover");
            //res.innerHTML = "<img src='img/tie.png' alt='It is a tie!>"
            console.log("tie")
        }
        else if (playerChoice===0 && compChoice === 1){
            res.setAttribute("style", "background-image: url(" + "img/ulose.jpeg" + "); background-size: cover");
            //res.innerHTML = "<img src='img/ulose.jpeg' alt='Loooooooser!'>"
            console.log("lose")
        }
        else if (playerChoice===0 && compChoice===2){
            res.setAttribute("style", "background-image: url(" + "img/uwin.png" + "); background-size: cover");
           // res.innerHTML = "<img src='img/uwin.png' alt='Winner!'>"
        }
        else if (playerChoice===0 && compChoice===3){
            res.setAttribute("style", "background-image: url(" + "img/uwin.png" + "); background-size: cover");
            //res.innerHTML = "<img src='img/uwin.png' alt='Winner!'>"
        }
        else if (playerChoice===1 && compChoice===0){
            res.setAttribute("style", "background-image: url(" + "img/uwin.png" + "); background-size: cover");
            //res.innerHTML = "<img src='img/uwin.png' alt='Winner!'>"
        }
        else if (playerChoice===1 && compChoice===2){
            res.setAttribute("style", "background-image: url(" + "img/ulose.jpeg" + "); background-size: cover");
            //res.innerHTML = "<img src='img/ulose.jpeg' alt='Loooooooser!'>"
        }
        else if (playerChoice===1 && compChoice===3){
            res.setAttribute("style", "background-image: url(" + "img/ulose.jpeg" + "); background-size: cover");
            //res.innerHTML = "<img src='img/ulose.jpeg' alt='Loooooooser!'>"
        }
        else if (playerChoice===2 && compChoice===0){
           res.setAttribute("style", "background-image: url(" + "img/ulose.jpeg" + "); background-size: cover");
           // res.innerHTML = "<img src='img/ulose.jpeg' alt='Loooooooser!'>"
        }
        else if (playerChoice===2 && compChoice===1){
            res.setAttribute("style", "background-image: url(" + "img/uwin.png" + "); background-size: cover");
            //res.innerHTML = "<img src='img/uwin.png' alt='Winner!'>"
        }
        else if (playerChoice===2 && compChoice===3){
            res.setAttribute("style", "background-image: url(" + "img/ulose.jpeg" + "); background-size: cover");
            //res.innerHTML = "<img src='img/ulose.jpeg' alt='Loooooooser!'>"
        }
        else if (playerChoice===3 && compChoice===0){
          res.setAttribute("style", "background-image: url(" + "img/ulose.jpeg" + "); background-size: cover");
          //  res.innerHTML = "<img src='img/ulose.jpeg' alt='Loooooooser!'>"
        }
        else if (playerChoice===3 && compChoice===1){
            res.setAttribute("style", "background-image: url(" + "img/uwin.png" + "); background-size: cover");
          //  res.innerHTML = "<img src='img/uwin.png' alt='Winner!'>"
        }
        else if (playerChoice===3 && compChoice===2){
          res.setAttribute("style", "background-image: url(" + "img/uwin.png" + "); background-size: cover");
          //  res.innerHTML = "<img src='img/uwin.png' alt='Winner!'>"
        }

    });

})();
