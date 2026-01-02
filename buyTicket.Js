const ticketType = document.getElementById("ticketType");
const ticketDays = document.getElementById("ticketDays");
const ticketQuantity = document.getElementById("ticketQuantity");
const totalPriceSpan = document.getElementById("totalPrice");

function calculatePrice() {
    const selectedOption = ticketType.options[ticketType.selectedIndex];
    if (!selectedOption || !selectedOption.dataset.price) {
        totalPriceSpan.textContent = "0";
        return;
    }

    const basePrice = Number(selectedOption.dataset.price);
    const daysMultiplier = Number(ticketDays.value);
    const quantity = Number(ticketQuantity.value);

    totalPriceSpan.textContent = (basePrice * daysMultiplier * quantity).toFixed(2);
}


ticketType.addEventListener("change", calculatePrice);
ticketDays.addEventListener("change", calculatePrice);
ticketQuantity.addEventListener("input", calculatePrice);


const buyButton = document.getElementById("buyButton");
const form = document.querySelector("form"); 

buyButton.addEventListener("click", function(event) {
    event.preventDefault(); 

    if (!ticketType.value || !ticketDays.value || !ticketQuantity.value || !form.querySelector('input[type="text"]').value || !form.querySelector('input[type="email"]').value) {
        alert("Моля, попълнете всички полета преди да купите билет.");
        return;
    }

    alert("Успешно купуване");

    
    form.reset();


    totalPriceSpan.textContent = "0";
});
