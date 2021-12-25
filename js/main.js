//Hafta kunlari
//O'zgaruvchilarni topib olamiz
const elForm = document.querySelector (".js-form-week-days");
const elInputAmount = elForm.querySelector (".js-form-amount");
const elOutput = elForm.querySelector (".js-output-amount-week-days");

//Formani ketib qolishini oldini olamiz
elForm.addEventListener ("submit", (e) => {
  e.preventDefault();
  //Shartni yozamiz
  let number = Number(elInputAmount.value);
  switch(number) {
    //Agar inputga 1 kiritlsa dushanba chiqadi
    case 1:
    elOutput.textContent = "Dushanba";
    break;
    //Agar inputga 2 kiritlsa seshanba chiqadi
    case 2:
    elOutput.textContent = "Seshanba";
    break;
    case 3:
    elOutput.textContent = "Chorshanba";
    break;
    case 4:
    elOutput.textContent = "Payshanba";
    break;
    case 5:
    elOutput.textContent = "Juma";
    break;
    case 6:
    elOutput.textContent = "Shanba";
    break;
    case 7:
    elOutput.textContent = "Yakshanba";
    break;
    default:
    elOutput.textContent = "❗❗❗ 1️⃣ - 7️⃣ orasida son kiriting ❗❗❗";
  }
});