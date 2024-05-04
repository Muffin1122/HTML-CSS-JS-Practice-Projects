const txtinput = document.querySelector(".input")
let filtertxt;
checkbutton = document.querySelector("button")
checkTxt = document.querySelector(".check-txt")
checkbutton.addEventListener("click", () => {
    if (txtinput.value !== "") {
        filtertxt = txtinput.value.replace(/[^A-Z0-9]/ig, "");
        let reverinput = filtertxt.split("").reverse().join("");
        checkTxt.style.display = "block";
        if (filtertxt !== reverinput) {
            checkTxt.innerHTML = 'No, <span>' + txtinput.value + '</span> is not a Palindrome!.';
        } else {
            checkTxt.innerHTML = 'Yes, <span>' + txtinput.value + '</span> is Palindrome!.';
        }
        txtinput.value = ""; 
    } else {
        alert('Please write palindrome text to check!');
    }
});
txtinput.addEventListener("keyup", () => {
    filtertxt = txtinput.value.replace(/[^A-Z0-9]/ig, "")
    if (filtertxt) {
        return checkbutton.classList.add("active")
    }

    checkbutton.classList.remove("active")
})