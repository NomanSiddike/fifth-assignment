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

      // History Activities
      const historyItem = document.createElement('div');
      historyItem.className = "w-10/12 mx-auto bg-white rounded border-2 border-gray-400 rounded-full px-5 py-5 mb-2";
      historyItem.innerHTML = `
      <p class="font-bold">${donationCard1InputAmount} Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>
      <p class="">Date: ${new Date().toLocaleString()} </p>\
      `

      const historyContainer = document.getElementById("history-list");
      historyContainer.appendChild(historyItem);

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

      // History Activities
      const historyItem = document.createElement('div');
      historyItem.className = "w-10/12 mx-auto bg-white rounded border-2 border-gray-400 rounded-full px-5 py-5 mb-2";
      historyItem.innerHTML = `
      <p class="font-bold">${donationCard2InputAmount} Taka is Donated for Flood-2024 at Feni, Bangladesh</p>
      <p class="">Date: ${new Date().toLocaleString()} </p>\
      `

      const historyContainer = document.getElementById("history-list");
      historyContainer.appendChild(historyItem);

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

      // History Activities
      const historyItem = document.createElement('div');
      historyItem.className = "w-10/12 mx-auto bg-white rounded border-2 border-gray-400 rounded-full px-5 py-5 mb-2";
      historyItem.innerHTML = `
      <p class="font-bold">${donationCard3InputAmount} Taka is Aid for Injured in the Quota Movement, Bangladesh</p>
      <p class="">Date: ${new Date().toLocaleString()} </p>\
      `

      const historyContainer = document.getElementById("history-list");
      historyContainer.appendChild(historyItem);

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

// Button Transformation
const historyTab = document.getElementById("button-history");
historyTab.addEventListener("click", function () {
  document.getElementById("donation-container").classList.add("hidden");
  document.getElementById("history").classList.remove("hidden");
  historyTab.classList.add("text-black", "font-bold", "bg-[#B4F461]");
  donationTab.classList.remove("text-black", "font-bold", "bg-[#B4F461]");
});

const donationTab = document.getElementById("button-donation");
donationTab.addEventListener("click", function () {
  historyTab.classList.remove("text-black", "font-bold", "bg-[#B4F461]");
  document.getElementById("donation-container").classList.remove("hidden");
  document.getElementById("history").classList.add("hidden");
  donationTab.classList.add("text-black", "font-bold", "bg-[#B4F461]");
});
