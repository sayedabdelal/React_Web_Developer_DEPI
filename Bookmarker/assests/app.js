let editIndex = null;
const bookMarkList = document.getElementById("bookmarksList");
const siteName = document.getElementById("siteName");
const siteUrl = document.getElementById("siteUrl");
const submitBtn = document.querySelector(".btn-submit");

// Fetch bookmarks from local storage
const fetchBookmarks = () => { 
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    if (bookmarks === null) {
        bookmarks = [];
    }
    console.log(bookmarks)
    return bookmarks;
};

// Save bookmarks to local storage
const saveBookmarks = (bookmark) => {
    const bookmarks = fetchBookmarks();

    if (editIndex !== null) {
        // If editIndex is not null, update the existing bookmark
        bookmarks[editIndex] = bookmark;
        editIndex = null;  
    } else {
        // Otherwise, add the new bookmark
        bookmarks.push(bookmark);
    }

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    renderBookmarks(); // Update the display after saving
};
// Delete a bookmark
const deleteBookmarks = (url) => {
    const bookmarks = fetchBookmarks();
    const newBookmarks = bookmarks.filter(bookmark => bookmark.url !== url);
    localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
    renderBookmarks();  
};
// Edit a bookmark
const editBookmarks = (url) => {
    const bookmarks = fetchBookmarks();

    const index = bookmarks.findIndex(bookmark => bookmark.url === url);
    if (index !== -1) {
        // Set the input fields with the current values
        siteName.value = bookmarks[index].name;
        siteUrl.value = bookmarks[index].url;

        // Set editIndex to the current bookmark's index
        editIndex = index;

        // Update the submit button text to indicate editing
        submitBtn.textContent = "Update Bookmark";
    }
};

// Render bookmarks on the page
const renderBookmarks = () => {
    const bookmarks = fetchBookmarks();
    bookMarkList.innerHTML = '';

    bookmarks.forEach(bookmark => { 
        const bookmarkElement = document.createElement('div');
        bookmarkElement.className = 'bookmark';
        bookmarkElement.innerHTML = `
        <span>${bookmark.name}</span>
        <div>
            <a href="${bookmark.url}" target="_blank">Visit</a>
            <button onclick="deleteBookmarks('${bookmark.url}')">Delete</button>
            <button class="edit" onclick="editBookmarks('${bookmark.url}')">Edit</button>
        </div>
    `;
    bookMarkList.appendChild(bookmarkElement);
    })
    // Reset form and submit button text after rendering
    siteName.value = '';
    siteUrl.value = '';
    submitBtn.textContent = "Add Bookmark";
};

// Handle form submission
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const bookmark = {
        name: siteName.value,
        url: siteUrl.value
    };

    saveBookmarks(bookmark);
    renderBookmarks(); // Update the display after saving a new bookmark

    // Clear input fields
    siteName.value = '';
    siteUrl.value = '';
});

// Initial render of bookmarks
document.addEventListener('DOMContentLoaded', renderBookmarks);
