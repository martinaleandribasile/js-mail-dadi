const boxPlay = document.getElementById("Boxgioco");
const boxStart = document.getElementById("Boxstart");

const buttonPlay = document.getElementById("Buttonplay");
const buttonReload = document.getElementById("Buttonreload");

const nameSurname = document.getElementById("Namesurname")
const nameSurnameResultNumber = document.getElementById("Namesurnameresultnumber");
const nameSurnameResult = document.getElementById("Namesurnameresult");

const pcResultNumber = document.getElementById("Pcresultnumber");
const pcResult = document.getElementById("Pcresult");

const inputData = document.getElementById("datainput");
nameSurname.innerHTML = inputData.value;

const winText = "hai vinto"
const loseText = "hai perso"
const draw = "pareggio"
function game() {
    let nameSurnameNumber = Math.floor((Math.random() * 6) + 1);
    let pcNumber = Math.floor((Math.random() * 6) + 1);
    boxStart.classList.add("d-none");
    boxPlay.classList.remove("d-none");
    nameSurnameResultNumber.innerHTML = nameSurnameNumber;
    pcResultNumber.innerHTML = pcNumber;
    nameSurname.innerHTML = inputData.value;
    if (nameSurnameNumber > pcNumber) {
        pcResult.innerHTML = loseText;
        pcResult.className = "text-danger";
        nameSurnameResult.innerHTML = winText;
        nameSurnameResult.className = "text-success";
    }
    else if (nameSurnameNumber < pcNumber) {
        pcResult.innerHTML = winText;
        pcResult.className = "text-success";
        nameSurnameResult.innerHTML = loseText;
        nameSurnameResult.className = "text-danger";
    }
    else {
        pcResult.innerHTML = draw;
        pcResult.className = "text-info";
        nameSurnameResult.innerHTML = draw;
        nameSurnameResult.className = "text-info";
    };
}

buttonPlay.addEventListener("click", function () {
    game()
});

buttonReload.addEventListener("click", function () {
    game();
});
