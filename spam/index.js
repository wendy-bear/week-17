function checkSpam() {

    let input = document.getElementById("input").value;
    let censInput = input.replace(/viagr|виагр|xxx/gim, "***");
    document.getElementById("result").innerHTML = censInput;
}
