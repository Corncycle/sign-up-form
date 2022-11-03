passwordInput = document.getElementById("password");
confirmPasswordInput = document.getElementById("confirm-password");

function ensureEqualPasswords() {
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.setCustomValidity("Passwords must be the same.");
        confirmPasswordInput.reportValidity();
    } else {
        confirmPasswordInput.setCustomValidity("");
    }
    console.log(confirmPasswordInput.validity.valid);
}

passwordInput.addEventListener("input", (e) => {
    //ensureEqualPasswords();
});

confirmPasswordInput.addEventListener("input", (e) => {
    ensureEqualPasswords();
});