const basePrice = 80000;
const additionalPrice = 20000;

const bookingForm = document.getElementById("bookingForm");
const totalPriceEl = document.getElementById("totalPrice");

const overnightNights = document.getElementById("overnightNights");
const saunaDays = document.getElementById("saunaDays");

function updatePrice() {
  let total = basePrice;
  total += Number(overnightNights.value) * additionalPrice;
  total += Number(saunaDays.value) * additionalPrice;
  totalPriceEl.textContent = total.toLocaleString();
}

overnightNights.addEventListener("input", updatePrice);
saunaDays.addEventListener("input", updatePrice);

// SMS ուղարկում անմիջապես 098400070 հեռախոսին
bookingForm.addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const people = document.getElementById("people").value;
  const nights = overnightNights.value;
  const sauna = saunaDays.value;

  const total = basePrice + Number(nights)*additionalPrice + Number(sauna)*additionalPrice;

  let message = `Բարև, ցանկանում եմ ամրագրել Siroon Tun։%0A
Անուն՝ ${name}%0A
Հեռախոս՝ ${phone}%0A
Մարդկանց քանակ՝ ${people}%0A
Գիշերակացներ՝ ${nights}%0A
Շոքեբաղնիք օրեր՝ ${sauna}%0A
Ընդհանուր գումար՝ ${total.toLocaleString()} դրամ`;

  const smsURL = "sms:098400070?body=" + message;
  window.location.href = smsURL; // բացում է SMS հավելվածը
});
