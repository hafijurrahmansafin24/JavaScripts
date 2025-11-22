console.clear();

const programs = document.querySelectorAll('input[name=program]');
console.log(programs);

Array.from(programs).map((program) => {
    program.addEventListener("change", programHandler)
});

function programHandler(event) {
    if(event.target.checked) {
        console.log(event.target.value);
    }
}
