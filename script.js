const overnightInput = document.getElementById("overnightNights");
const saunaInput = document.getElementById("saunaDays");
const totalPriceEl = document.getElementById("totalPrice");

function calculatePrice() {
    let nights = Number(overnightInput.value);
    let saunaDays = Number(saunaInput.value);

    let total = 0;

    // Գիշերակաց
    if (nights > 0) {
        total = nights * 100000; 
        // 1 օր = 100000
        // 2 օր = 200000
        // 3 օր = 300000 և այլն
    }

    // Շոքեբաղնիք (մնում է նույն ձևով)
    total += saunaDays * 20000;

    totalPriceEl.textContent = total.toLocaleString();
}

overnightInput.addEventListener("input", calculatePrice);
saunaInput.addEventListener("input", calculatePrice);

document.getElementById("bookingForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let people = document.getElementById("people").value;
    let nights = overnightInput.value;
    let sauna = saunaInput.value;
    let total = totalPriceEl.textContent;

    let message = `Բարև, ցանկանում եմ ամրագրել Siroon Tun։
Անուն՝ ${name}
Հեռախոս՝ ${phone}
Մարդկանց քանակ՝ ${people}
Գիշերակացներ՝ ${nights}
Շոքեբաղնիք օրեր՝ ${sauna}
Ընդհանուր գումար՝ ${total} դրամ`;

    const smsURL = "sms:094108617?body=" + encodeURIComponent(message);
    window.location.href = smsURL;
});
