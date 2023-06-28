// mendapat element utama
const tombolSubscribe = document.querySelector("form button");
const tombolDismiss = document.querySelector("#success button");
const halamanDismiss = document.getElementById("success");
const halamanSubscribe = document.getElementById("signUp");

// memasang

// function untuk tommbol subscribe
function subscribe() {
  halamanSubscribe.classList.replace("flex", "none");
  halamanDismiss.classList.replace("none", "flex");
}

// function untuk tombol dismiss
function dismiss() {
  halamanSubscribe.classList.replace("none", "flex");
  halamanDismiss.classList.replace("flex", "none");
}

// tekan tombol subscribe
tombolSubscribe.addEventListener("click", function () {
  subscribe();
});

// tekan tombol dismiss
tombolDismiss.addEventListener("click", function () {
  dismiss();
});
