// Function to show the first page when the page is loaded
window.onload = function () {
    showPage(1);
};

function showPage(pageNumber) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');

    // Show the selected page
    const selectedPage = document.getElementById(`page${pageNumber}`);
    selectedPage.style.display = 'block';

    // Remove the 'active' class from all pagination links
    const paginationLinks = document.querySelectorAll('.pagination a');
    paginationLinks.forEach(link => link.classList.remove('active'));

    // Add the 'active' class to the clicked pagination link
    const clickedLink = document.getElementById(`page${pageNumber}Link`);
    clickedLink.classList.add('active');
}
