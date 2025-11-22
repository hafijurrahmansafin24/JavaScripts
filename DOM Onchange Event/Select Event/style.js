console.clear();

const department = document.querySelector("#department");

department.addEventListener("change", handleDepartment);

function handleDepartment(event) {
    console.log(event.target.value);
}
