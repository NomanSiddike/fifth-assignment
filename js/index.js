//  Donor Card1 Activities
document
  .getElementById("donation-card1-button")
  .addEventListener("click", function () {
    const donationCard1InputAmount = getInputFieldById(
      "donation-Card1-Input-Amount"
    );
    const card1DonatedAmount = getTextById("card1-donated-amount");
    const card1DonatedAmountElement = getTextElementById(
      "card1-donated-amount"
    );
    const donarBalanceElement = getTextElementById("donar-balance"); // dom element
    const donarBalance = getTextById("donar-balance"); //inner text
    const remainingBalance = subtraction(
      donarBalance,
      donationCard1InputAmount
    );
    donarBalanceElement.innerText = remainingBalance;
    card1DonatedAmountElement.innerText =
      card1DonatedAmount + donationCard1InputAmount;
  });

// Donar Card2 Activities
document
  .getElementById("donation-card2-button")
  .addEventListener("click", function () {
    const donationCard2InputAmount = getInputFieldById(
      "donation-Card2-Input-Amount"
    );
    const card2DonatedAmount = getTextById("card2-donated-amount");
    const card2DonatedAmountElement = getTextElementById(
      "card2-donated-amount"
    );
    const donarBalanceElement = getTextElementById("donar-balance"); // dom element
    const donarBalance = getTextById("donar-balance"); //inner text
    const remainingBalance = subtraction(
      donarBalance,
      donationCard2InputAmount
    );
    donarBalanceElement.innerText = remainingBalance;
    card2DonatedAmountElement.innerText =
      card2DonatedAmount + donationCard2InputAmount;
  });

// Donar Card3 Activities
document
  .getElementById("donation-card3-button")
  .addEventListener("click", function () {
    const donationCard3InputAmount = getInputFieldById(
      "donation-Card3-Input-Amount"
    );
    const card3DonatedAmount = getTextById("card3-donated-amount");
    const card3DonatedAmountElement = getTextElementById(
      "card3-donated-amount"
    );
    const donarBalanceElement = getTextElementById("donar-balance"); // dom element
    const donarBalance = getTextById("donar-balance"); //inner text
    const remainingBalance = subtraction(
      donarBalance,
      donationCard3InputAmount
    );
    donarBalanceElement.innerText = remainingBalance;
    card3DonatedAmountElement.innerText =
      card3DonatedAmount + donationCard3InputAmount;
  });

// Nav Sticky Part
document.addEventListener("DOMContentLoaded", function () {
  let nav = document.getElementById("nav");
  let current_pos = nav.offsetTop;
  window.onscroll = function () {
    let window_pos = document.documentElement.scrollTop;
    if (window_pos >= current_pos) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  };
});
