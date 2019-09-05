(() => {
    let userArr = document.getElementsByClassName("options");

    let cFunc = document.getElementById("Computer").addEventListener("click", function () {
        let comVal = Math.floor(Math.random() * 4);
        console.log(comVal);
    });
    let compRes = document.getElementById("result").innerHTML;
    userArr[0].addEventListener("click", function () {
        if (userArr[''] === cFunc) {
            compRes = "Tie!"
        }
        if (userArr[0] && cFunc) {
            compRes = "Rock smashes scissors! You lose!"
        }
        if (userArr[1] && cFunc) {
            compRes = "Rock smashes scissors! You lose!"
        }
    });

})();
