document.addEventListener('DOMContentLoaded', function () {
    // Get references to the form elements and the button
    const shiftDateInput = document.getElementById('shift-date');
    const swapReasonTextarea = document.getElementById('swap-reason');
    const submitButton = document.getElementById('submit-btn');

    // Function to validate the form and enable/disable the submit button
    function validateForm() {
        // Check if both fields are filled out (shift date and swap reason)
        if (shiftDateInput.value.trim() !== '' && swapReasonTextarea.value.trim() !== '') {
            submitButton.disabled = false;  // Enable the button
        } else {
            submitButton.disabled = true;   // Disable the button
        }
    }

    // Add event listeners to monitor changes in the form fields
    shiftDateInput.addEventListener('input', validateForm);
    swapReasonTextarea.addEventListener('input', validateForm);
});
const body = document.querySelector("body"),
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})