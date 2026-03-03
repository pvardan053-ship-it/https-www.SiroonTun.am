const nightPrice = 100000;  
const saunaPrice = 20000;   

const bookingForm = document.getElementById("bookingForm");
const totalPriceEl = document.getElementById("totalPrice");

const overnightNights = document.getElementById("overnightNights");
const saunaDays = document.getElementById("saunaDays");

function updatePrice() {
  let nights = Number(overnightNights.value) || 0;
  let sauna = Number(saunaDays.value) || 0;

  let total = nights * nightPrice + sauna * saunaPrice;

  totalPriceEl.textContent = total.toLocaleString();
}

overnightNights.addEventListener("input", updatePrice);
saunaDays.addEventListener("input", updatePrice);

bookingForm.addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const people = document.getElementById("people").value;
  const nights = Number(overnightNights.value) || 0;
  const sauna = Number(saunaDays.value) || 0;

  const total = nights * nightPrice + sauna * saunaPrice;

  let message = `Բարև, ցանկանում եմ ամրագրել Siroon Tun։
Անուն՝ ${name}
Հեռախոս՝ ${phone}
Մարդկանց քանակ՝ ${people}
Գիշերակացներ՝ ${nights}
Շոքեբաղնիք օրեր՝ ${sauna}
Ընդհանուր գումար՝ ${total.toLocaleString()} դրամ`;

  const smsURL = "sms:098400070?body=" + encodeURIComponent(message);
  window.location.href = smsURL;
});
