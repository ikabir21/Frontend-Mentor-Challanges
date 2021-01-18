const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener("click", (e) => {
        inputs.forEach(input => {
            if (input.checked){
                input.checked = false;
                e.target.checked = true;
            }
        })
    })
})