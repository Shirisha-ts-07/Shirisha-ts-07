// Function to open modal
function openModal(memberId) {
    const modal = document.getElementById(`${memberId}-modal`);
    if (modal) {
        modal.style.display = "flex";
    }
}

// Function to close modal
function closeModal(memberId) {
    const modal = document.getElementById(`${memberId}-modal`);
    if (modal) {
        modal.style.display = "none";
    }
}

// Close modal when clicking outside the modal content
window.onclick = function (event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
};