// Function to show a specific popup
function showPopup(popupId) {
    document.getElementById(popupId).style.display = "flex";
}

// Function to close a specific popup
function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}

// Handling form submissions for Daily Package
document.getElementById("mpesa-form1").addEventListener("submit", function (event) {
    event.preventDefault();
    const mpesaNumber = document.getElementById("mpesa-number1").value;
    alert(`M-PESA number for Daily Package: ${mpesaNumber}`);
    closePopup('popup1');
    showPopup('waitingPopup'); // Show the waiting confirmation popup
});

// Handling form submissions for Weekly Package
document.getElementById("mpesa-form2").addEventListener("submit", function (event) {
    event.preventDefault();
    const mpesaNumber = document.getElementById("mpesa-number2").value;
    alert(`M-PESA number for Weekly Package: ${mpesaNumber}`);
    closePopup('popup2');
    showPopup('waitingPopup'); // Show the waiting confirmation popup
});

// Handling form submissions for Monthly Package
document.getElementById("mpesa-form3").addEventListener("submit", function (event) {
    event.preventDefault();
    const mpesaNumber = document.getElementById("mpesa-number3").value;
    alert(`M-PESA number for Monthly Package: ${mpesaNumber}`);
    closePopup('popup3');
    showPopup('waitingPopup'); // Show the waiting confirmation popup
});

// Adding click event listeners to the buttons
document.querySelector('.btn1').addEventListener('click', () => showPopup('popup1'));
document.querySelector('.btn2').addEventListener('click', () => showPopup('popup2'));
document.querySelector('.btn3').addEventListener('click', () => showPopup('popup3'));

