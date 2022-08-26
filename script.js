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

buttonPlay.addEventListener("click", function () {
    nameSurname.innerHTML = inputData.value;
    let nameSurnameNumber = Math.floor((Math.random() * 6) + 1);
    let pcNumber = Math.floor((Math.random() * 6) + 1);
    boxStart.classList.add("d-none");
    boxPlay.classList.remove("d-none");
    nameSurnameResultNumber.innerHTML = nameSurnameNumber;
    pcResultNumber.innerHTML = pcNumber;

    if (nameSurnameNumber > pcNumber) {
        pcResult.innerHTML = loseText;
        pcResult.classList.add("text-danger");
        nameSurnameResult.innerHTML = winText;
        nameSurnameResult.classList.add("text-success");
    }
    else if (nameSurnameNumber < pcNumber) {
        pcResult.innerHTML = winText;
        pcResult.classList.add("text-success");
        nameSurnameResult.innerHTML = loseText;
        nameSurnameResult.classList.add("text-danger");
    }
    else {
        pcResult.innerHTML = draw;
        pcResult.classList.add("text-info");
        nameSurnameResult.innerHTML = draw;
        nameSurnameResult.classList.add("text-info");
    };


});

buttonReload.addEventListener("click", function () {
    window.location.reload();
})
