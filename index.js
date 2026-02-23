document.addEventListener('DOMContentLoaded', () => {
    let dateAskingContainer = document.getElementById("final-no-message");
    let btnContainer = document.getElementById("button-container");
    let acceptedBtn = document.getElementById("accepted-btn");
    let deniedBtn = document.getElementById("denied-btn");
    let dateContainer = document.getElementById("date-container");
    let yesMessage = document.getElementById("yes-message");
    let noMessage = document.getElementById("no-message");
    let firstNoMessage = document.getElementById("first-no-message");
    let secondNoMessage = document.getElementById("second-no-message");
    let thirdNoMessage = document.getElementById("third-no-message");
    let fourthNoMessage = document.getElementById("fourth-no-message");
    let fifthNoMessage = document.getElementById("fifth-no-message");
    let finalNoMessage = document.getElementById("final-no-message");

    let noMessageCount = 0;

    acceptedBtn.addEventListener('click', () => {
        btnContainer.classList.add("hidden");
        yesMessage.classList.remove("hidden")
        dateContainer.classList.remove("hidden");
        noMessage.classList.add("hidden");
        
    })

    deniedBtn.addEventListener("mouseover", () => {
        dateContainer.classList.remove("hidden");
        yesMessage.classList.add("hidden");
        deniedBtn.style.position = "absolute";
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
        deniedBtn.classList.add("animate-btn");
        deniedBtn.style.left = `${x}px`;
        deniedBtn.style.top = `${y}px`;
        if (noMessageCount === 0) {
            firstNoMessage.classList.remove("hidden");
            secondNoMessage.classList.add("hidden");
            thirdNoMessage.classList.add("hidden");
            fourthNoMessage.classList.add("hidden");
            fifthNoMessage.classList.add("hidden");
            finalNoMessage.classList.add("hidden");
            noMessageCount++;
        }else if (noMessageCount === 1) {
            firstNoMessage.classList.add("hidden");
            secondNoMessage.classList.remove("hidden");
            thirdNoMessage.classList.add("hidden");
            fourthNoMessage.classList.add("hidden");
            fifthNoMessage.classList.add("hidden");
            finalNoMessage.classList.add("hidden");
            noMessageCount++;
        }else if (noMessageCount === 2) {
            firstNoMessage.classList.add("hidden");
            secondNoMessage.classList.add("hidden");
            thirdNoMessage.classList.remove("hidden");
            fourthNoMessage.classList.add("hidden");
            fifthNoMessage.classList.add("hidden");
            finalNoMessage.classList.add("hidden");
            noMessageCount++;
        }else if (noMessageCount === 3) {
            firstNoMessage.classList.add("hidden");
            secondNoMessage.classList.add("hidden");
            thirdNoMessage.classList.add("hidden");
            fourthNoMessage.classList.remove("hidden");
            fifthNoMessage.classList.add("hidden");
            finalNoMessage.classList.add("hidden");
            noMessageCount++;
        }else if (noMessageCount === 4) {
            firstNoMessage.classList.add("hidden");
            secondNoMessage.classList.add("hidden");
            thirdNoMessage.classList.add("hidden");
            fourthNoMessage.classList.add("hidden");
            fifthNoMessage.classList.remove("hidden");
            finalNoMessage.classList.add("hidden");
            noMessageCount++;
        }else {
            firstNoMessage.classList.add("hidden");
            secondNoMessage.classList.add("hidden");
            thirdNoMessage.classList.add("hidden");
            fourthNoMessage.classList.add("hidden");
            fifthNoMessage.classList.add("hidden");
            finalNoMessage.classList.remove("hidden");
            deniedBtn.style.display = "none";
        }
    })
    
})