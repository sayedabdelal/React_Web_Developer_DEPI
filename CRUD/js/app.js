// Select DOM elements
const addLaptopBtn = document.getElementById('addLaptopBtn');
const newLaptopName = document.getElementById('newLaptopName');
const newLaptopPrice = document.getElementById('newLaptopPrice');
const newLaptopDescription = document.getElementById('newLaptopDescription');
const newLaptopImage = document.getElementById('newLaptopImage');
const laptopList = document.getElementById('laptopList');

// Initialize laptops array from localStorage or empty array
let laptops = JSON.parse(localStorage.getItem('laptops')) || [];

// Function to save laptops to localStorage
function saveToLocalStorage() {
  localStorage.setItem('laptops', JSON.stringify(laptops));
}

// Function to render the list of laptops
function renderLaptops() {
  laptopList.innerHTML = ''; 

  if (laptops.length === 0) {
    laptopList.innerHTML = '<p>No laptops available. Please add some.</p>';
    return;
  }

  laptops.forEach((laptop, index) => {
    // Create laptop card
    const card = document.createElement('div');
    card.className = 'laptop-card';

    // Laptop Image
    const img = document.createElement('img');
    img.src = laptop.image;
    img.alt = laptop.name;
    img.onerror = function() {
      this.src = 'https://via.placeholder.com/250x150?text=No+Image';
    };

    // Laptop Details
    const details = document.createElement('div');
    details.className = 'laptop-details';

    const name = document.createElement('h3');
    name.textContent = laptop.name;

    const description = document.createElement('p');
    description.textContent = laptop.description;

    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = `$${laptop.price}`;

    details.appendChild(name);
    details.appendChild(description);
    details.appendChild(price);

    // Action Buttons
    const actions = document.createElement('div');
    actions.className = 'card-actions';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.onclick = () => editLaptop(index);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => deleteLaptop(index);

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    // Assemble Card
    card.appendChild(img);
    card.appendChild(details);
    card.appendChild(actions);

    // Add to Laptop List
    laptopList.appendChild(card);
  });
}

// Function to add a new laptop
function addLaptop() {
    const name = newLaptopName.value.trim();
    const price = parseFloat(newLaptopPrice.value);
    const description = newLaptopDescription.value.trim();
    const image = newLaptopImage.value.trim();
  
    // Regular expressions
    const nameRegex = /^[a-zA-Z0-9 ]{3,50}$/;  
    const priceRegex = /^\d+(\.\d{1,2})?$/;  
    const descriptionRegex = /^[a-zA-Z0-9\s.,'-]{10,500}$/; 
    const imageRegex = /^(https?:\/\/)([\w-]+\.)+[\w-]+(\/[\w.,@?^=%&:;~+#-]*)*\.(jpg|jpeg|png|gif)$/i;

    
    // Validate name
    if (!nameRegex.test(name)) {
      alert("Please enter a valid laptop name (3-50 characters, letters, numbers, and spaces only).");
      return;
    }
  
    // Validate price
    if (!priceRegex.test(newLaptopPrice.value)) {
      alert("Please enter a valid price (numbers with up to two decimal places).");
      return;
    }
  
    // Validate description
    if (!descriptionRegex.test(description)) {
      alert("Please enter a valid description (10-500 characters, letters, numbers, spaces, and basic punctuation).");
      return;
    }
  
    // Validate image URL
    if (!imageRegex.test(image)) {
      alert("Please enter a valid image URL (must end with .jpg, .jpeg, .png, or .gif).");
      return;
    }
  
  // Create new laptop object
  const newLaptop = { name, price, description, image };

  // Add to laptops array
  laptops.push(newLaptop);

  // Save and re-render
  saveToLocalStorage();
  renderLaptops();

  // Clear input fields
  newLaptopName.value = '';
  newLaptopPrice.value = '';
  newLaptopDescription.value = '';
  newLaptopImage.value = '';
}

// Function to edit a laptop
function editLaptop(index) {
  const laptop = laptops[index];

  // Prompt user for new values
  const updatedName = prompt('Edit Laptop Name:', laptop.name);
  if (updatedName === null) return; // Cancelled

  const updatedPrice = prompt('Edit Laptop Price ($):', laptop.price);
  if (updatedPrice === null || isNaN(parseFloat(updatedPrice))) {
    alert('Invalid price.');
    return;
  }

  const updatedDescription = prompt('Edit Laptop Description:', laptop.description);
  if (updatedDescription === null) return; // Cancelled

  const updatedImage = prompt('Edit Laptop Image URL:', laptop.image);
  if (updatedImage === null) return; // Cancelled

  // Update laptop object
  laptops[index] = {
    name: updatedName.trim() || laptop.name,
    price: parseFloat(updatedPrice) || laptop.price,
    description: updatedDescription.trim() || laptop.description,
    image: updatedImage.trim() || laptop.image
  };

  // Save and re-render
  saveToLocalStorage();
  renderLaptops();
}

// Function to delete a laptop
function deleteLaptop(index) {
  if (confirm('Are you sure you want to delete this laptop?')) {
    laptops.splice(index, 1);
    saveToLocalStorage();
    renderLaptops();
  }
}
 
addLaptopBtn.addEventListener('click', addLaptop);

 
document.querySelectorAll('.create-item input, .create-item textarea').forEach(input => {
  input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      addLaptop();
    }
  });
});
 
renderLaptops();
