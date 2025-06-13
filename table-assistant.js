// Digital Table Assistant JavaScript

// Global variables
let currentOrder = [];
let restaurantData = null;
let tableData = null;
let currentRating = 0;
let serviceRequests = [];

// Sample menu data
const sampleMenu = {

     HotCoffee: [{
        id: "hc1",
        name: "ESPRESSO ",
        description: "",
        price: 70,
        image: "https://www.sharmispassions.com/wp-content/uploads/2012/07/espresso-coffee-recipe04.jpg",
    }, {
        id: "hc2",
        name: "TURKISH COFFEE ",
        description: "",
        price: 65,
        image: "https://livingthegourmet.com/wp-content/uploads/2022/08/Traditional-Turkish-Coffee-11.jpg",
    },{
        id: "hc2",
        name: "FRENCH COFFEE ",
        description: "",
        price: 85,
        image: "https://www.thespruceeats.com/thmb/YEI_JAfLHd6fbfCYUukcW5E2TYg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-cafe-au-lait-recipe-1374920-hero-01-b1463e806a7947e7b8b17979ab70eab3.jpg",
    },{
        id: "hc2",
        name: "MACCHIATO",
        description: "",
        price: 85,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Macchiato_%287199366530%29.jpg/1200px-Macchiato_%287199366530%29.jpg",
    },{
        id: "hc2",
        name: "AMERICANO",
        description: "",
        price: 90,
        image: "https://assets.beanbox.com/blog_images/AB7ud4YSE6nmOX0iGlgA.jpeg",
    },{
        id: "hc2",
        name: "LATTE",
        description: "",
        price: 110,
        image: "https://www.caffesociety.co.uk/assets/recipe-images/latte-small.jpg",
    },{
        id: "hc2",
        name: "CAPPUCCINO",
        description: "",
        price: 110,
        image: "https://houseofcocoa.net/cdn/shop/products/Cappuccino.jpg?v=1655998082",
    },{
        id: "hc2",
        name: "MOCHA",
        description: "",
        price: 130,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqf-4_Tu1xNsBKSHIAe-2Apl38tZ-67lfkBA&s",
    },{
        id: "hc2",
        name: "WHITE MOCHA",
        description: "",
        price: 130,
        image: "https://copykat.com/wp-content/uploads/2021/08/Starbucks-White-Chocolate-Mocha-Pin-4.jpg",
    },{
        id: "hc2",
        name: "FLAT WHITE",
        description: "",
        price: 110,
        image: "https://www.lavazza.co.uk/en/coffee-secrets/how-to-make-flat-white-coffee/_jcr_content/root/cust/customcontainer/image.coreimg.jpeg/1719993060294/d-m-how-to-slot-1-large%402.jpeg",
    },{
        id: "hc2",
        name: "MATCHA LATTE",
        description: "",
        price: 150,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdFSJWjWB9GHnrSo5hs750HUUvi7VEPv0aJA&s",
    }, ],

     IcedCoffee: [{
        id: "ic1",
        name: "ICED MATCHA LATTE",
        description: "",
        price: 140,
        image: "https://www.eatingbirdfood.com/wp-content/uploads/2021/04/iced-matcha-latte-hero.jpg",
    }, {
        id: "ic2",
        name: "ICED SPANISH LATTE",
        description: "",
        price: 135,
        image: "https://www.brighteyedbaker.com/wp-content/uploads/2024/03/Iced-Spanish-Latte-Recipe.jpg",
    },{
        id: "ic2",
        name: "ICED SALTED CARAMEL LATTE",
        description: "",
        price: 135,
        image: "https://www.forkinthekitchen.com/wp-content/uploads/2022/09/220629.iced_.latte_.caramel-9182.jpg",
    },{
        id: "ic2",
        name: "ICED CARAMEL MACCHIATO ",
        description: "",
        price: 135,
        image: "https://lifestyleofafoodie.com/wp-content/uploads/2022/07/Starbucks-caramel-macchiato-latte-9-of-14.jpg",
    },{
        id: "ic2",
        name: "ICED MOCHA",
        description: "",
        price: 140,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxcBTpeRlzcg-8sImI1TB1z-9nep7GLgWU8Q&s",
    },{
        id: "ic2",
        name: "ICED WHITE MOCHA",
        description: "",
        price: 110,
        image: "https://www.healthylifetrainer.com/wp-content/uploads/2024/01/Iced-White-Chocolate-Mocha-00.jpg",
    },{
        id: "ic2",
        name: "CAPPUCCINO",
        description: "",
        price: 110,
        image: "https://houseofcocoa.net/cdn/shop/products/Cappuccino.jpg?v=1655998082",
    },{
        id: "ic2",
        name: "MOCHA",
        description: "",
        price: 130,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqf-4_Tu1xNsBKSHIAe-2Apl38tZ-67lfkBA&s",
    },{
        id: "ic2",
        name: "WHITE MOCHA",
        description: "",
        price: 130,
        image: "https://copykat.com/wp-content/uploads/2021/08/Starbucks-White-Chocolate-Mocha-Pin-4.jpg",
    },{
        id: "ic2",
        name: "FLAT WHITE",
        description: "",
        price: 110,
        image: "https://www.lavazza.co.uk/en/coffee-secrets/how-to-make-flat-white-coffee/_jcr_content/root/cust/customcontainer/image.coreimg.jpeg/1719993060294/d-m-how-to-slot-1-large%402.jpeg",
    },{
        id: "ic2",
        name: "MATCHA LATTE",
        description: "",
        price: 150,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdFSJWjWB9GHnrSo5hs750HUUvi7VEPv0aJA&s",
    }, ],

    SALADS: [{
        id: "salad1",
        name: "CHICKEN CEASER SALAD",
        description: "Grilled chicken, crisp romaine, Caesar dressing, croutons, and Parmesan cheese.",
        price: 185,
        image: "https://cdn.loveandlemons.com/wp-content/uploads/2024/12/caesar-salad.jpg",
    }, {
        id: "salad2",
        name: "TACO SALAD",
        description: "A crispy tortilla bowl filled with seasoned beef, fresh lettuce, tomatoes, cheese, and beans, topped with salsa and sour cream.",
        price: 195,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEDqI5ZqB6OiFZoujpe0sStnYAM3bOyYOHw&s",
    },
     {
        id: "salad3",
        name: "TUNA PASTA SALAD ",
        description: "Chilled pasta tossed with tuna, fresh vegetables, and a light creamy dressing for a refreshing and satisfying dish.",
        price: 195,
        image: "https://healthyfitnessmeals.com/wp-content/uploads/2019/11/instagram-In-Stream_Square___Creamy-tuna-pasta-salad-2.jpg",
    },
     {
        id: "salad4",
        name: "ROCCA CHICKEN SALAD ",
        description: " Grilled chicken served over fresh rocca leaves, cherry tomatoes, parmesan, and a zesty balsamic dressing.",
        price: 185,
        image: "https://img.taste.com.au/6605-6YZ/taste/2016/11/chicken-artichoke-and-rocket-salad-low-fat-9324-1.jpeg",
    },

],
    "SANDWICHES": [{
        id: "sand1",
        name: "Grilled Salmon",
        description: "Fresh Atlantic salmon with seasonal vegetables",
        price: 190,
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    }, {
        id: "sand2",
        name: "Ribeye Steak",
        description: "12oz prime ribeye with garlic mashed potatoes",
        price: 140,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    }, {
        id: "sand3",
        name: "Chicken Parmesan",
        description: "Breaded chicken breast with marinara and mozzarella",
        price: 160,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    }, ],
    Desserts: [{
        id: "dessert1",
        name: "Tiramisu",
        description: "Classic Italian dessert with coffee and mascarpone",
        price: 150,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    }, {
        id: "dessert2",
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with molten center and vanilla ice cream",
        price: 140,
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    }, ],
   
};

// Initialize the table assistant
document.addEventListener("DOMContentLoaded", function() {
    initializeTableAssistant();
    loadTableInfo();
    loadMenu();
    setupEventListeners();
    updateCartSummary();
});

// Initialize table assistant with URL parameters
function initializeTableAssistant() {
    const urlParams = new URLSearchParams(window.location.search);
    const restaurantId = urlParams.get("restaurant") || "1";
    const tableId = urlParams.get("table") || "5";
    const guests = urlParams.get("guests") || "4";

    // Load restaurant data
    if (window.DB && window.DB.RESTAURANTS) {
        restaurantData = window.DB.RESTAURANTS.find((r)=>r.id === restaurantId) || window.DB.RESTAURANTS[0];
    } else {
        // Fallback data
        restaurantData = {
            id: restaurantId,
            name: "Tempo Specialty Coffee",
            description: "A cozy restaurant with sustainable, locally-sourced ingredients",
        };
    }

    tableData = {
        id: tableId,
        number: parseInt(tableId),
        guests: parseInt(guests),
        status: "ready",
    };
}

// Load table information
function loadTableInfo() {
    if (restaurantData) {
        document.getElementById("restaurantName").textContent = restaurantData.name;
    }

    if (tableData) {
        document.getElementById("tableInfo").textContent = `Table ${tableData.number} • ${tableData.guests} Guests`;
    }
}

// Load menu
function loadMenu() {
    const menuContainer = document.getElementById("menuCategories");
    menuContainer.innerHTML = "";

    Object.keys(sampleMenu).forEach((category)=>{
        const categorySection = document.createElement("div");
        categorySection.className = "menu-category";

        categorySection.innerHTML = `
      <div class="category-header">
        <h3 class="category-title">${category}</h3>
      </div>
      <div class="menu-items">
        ${sampleMenu[category].map((item)=>`
          <div class="menu-item">
            <img src="${item.image}" alt="${item.name}" class="item-image" />
            <div class="item-details">
              <div class="item-name">${item.name}</div>
              <div class="item-description">${item.description}</div>
              <div class="item-price">$${item.price.toFixed(2)}</div>
            </div>
            <button class="add-button" onclick="addToOrder('${item.id}')">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        `, ).join("")}
      </div>
    `;

        menuContainer.appendChild(categorySection);
    }
    );
}

// Setup event listeners
function setupEventListeners() {
    // Navigation chips
    document.querySelectorAll(".nav-chip").forEach((chip)=>{
        chip.addEventListener("click", (e)=>{
            const section = chip.getAttribute("data-section");
            switchSection(section);
        }
        );
    }
    );

    // Rating stars
    document.querySelectorAll(".star").forEach((star)=>{
        star.addEventListener("click", (e)=>{
            const rating = parseInt(star.getAttribute("data-rating"));
            setRating(rating);
        }
        );

        star.addEventListener("mouseover", (e)=>{
            const rating = parseInt(star.getAttribute("data-rating"));
            highlightStars(rating);
        }
        );
    }
    );

    document.getElementById("ratingStars").addEventListener("mouseleave", ()=>{
        highlightStars(currentRating);
    }
    );
}

// Switch between sections
function switchSection(sectionName) {
    // Update navigation
    document.querySelectorAll(".nav-chip").forEach((chip)=>{
        chip.classList.remove("active");
        if (chip.getAttribute("data-section") === sectionName) {
            chip.classList.add("active");
        }
    }
    );

    // Update content
    document.querySelectorAll(".section").forEach((section)=>{
        section.classList.remove("active");
    }
    );

    document.getElementById(sectionName).classList.add("active");

    // Load section-specific data
    if (sectionName === "bill") {
        loadBill();
    } else if (sectionName === "service") {
        loadServiceRequests();
    }
}

// Add item to order
function addToOrder(itemId) {
    // Find the item in the menu
    let item = null;
    for (const category in sampleMenu) {
        const foundItem = sampleMenu[category].find((i)=>i.id === itemId);
        if (foundItem) {
            item = foundItem;
            break;
        }
    }

    if (!item)
        return;

    // Check if item already exists in order
    const existingItem = currentOrder.find((orderItem)=>orderItem.id === itemId, );
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        currentOrder.push({
            ...item,
            quantity: 1,
        });
    }

    updateCartSummary();
    showToast(`${item.name} added to your order`, "success");
}

// Update cart summary
function updateCartSummary() {
    const cartSummary = document.getElementById("cartSummary");
    const cartCount = document.getElementById("cartCount");
    const orderTotal = document.getElementById("orderTotal");

    const totalItems = currentOrder.reduce((sum,item)=>sum + item.quantity, 0);
    const totalPrice = currentOrder.reduce((sum,item)=>sum + item.price * item.quantity, 0, );

    cartCount.textContent = totalItems;
    orderTotal.textContent = `$${totalPrice.toFixed(2)}`;

    if (totalItems > 0) {
        cartSummary.classList.add("visible");
    } else {
        cartSummary.classList.remove("visible");
    }
}

// View cart modal
function viewCart() {
    const modal = document.getElementById("orderModal");
    const orderItems = document.getElementById("orderItems");

    orderItems.innerHTML = currentOrder.map((item)=>`
    <div class="bill-item">
      <div>
        <div style="font-weight: 600;">${item.name}</div>
        <div style="font-size: var(--font-size-sm); color: var(--gray-600);">
          $${item.price.toFixed(2)} × ${item.quantity}
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 1rem;">
        <span style="font-weight: 600;">$${(item.price * item.quantity).toFixed(2)}</span>
        <button onclick="removeFromOrder('${item.id}')" style="color: var(--danger); background: none; border: none; font-size: var(--font-size-lg);">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  `, ).join("");

    updateOrderSummary();
    modal.style.display = "block";
}

// Close order modal
function closeOrderModal() {
    document.getElementById("orderModal").style.display = "none";
}

// Remove item from order
function removeFromOrder(itemId) {
    currentOrder = currentOrder.filter((item)=>item.id !== itemId);
    updateCartSummary();
    viewCart();
    // Refresh the modal
    showToast("Item removed from order", "info");
}

// Update order summary in modal
function updateOrderSummary() {
    const subtotal = currentOrder.reduce((sum,item)=>sum + item.price * item.quantity, 0, );
    const tax = subtotal * 0.08;
    // 8% tax
    const total = subtotal + tax;

    document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById("tax").textContent = `$${tax.toFixed(2)}`;
    document.getElementById("modalTotal").textContent = `$${total.toFixed(2)}`;
}

// Place order
function placeOrder() {
    if (currentOrder.length === 0) {
        showToast("Your order is empty", "warning");
        return;
    }

    // Simulate placing order
    showToast("Order placed successfully! Kitchen has been notified.", "success");
    closeOrderModal();

    // Update table status
    updateTableStatus("Order in progress", "warning");

    // Clear current order for new items
    currentOrder = [];
    updateCartSummary();
}

// Call service
function callService(serviceType) {
    const serviceMessages = {
        water: "Water refill requested",
        assistance: "Server assistance requested",
        condiments: "Condiments and napkins requested",
        check: "Check requested",
        urgent: "Urgent assistance requested",
    };

    const serviceRequest = {
        id: Date.now(),
        type: serviceType,
        message: serviceMessages[serviceType],
        time: new Date(),
        status: "pending",
    };

    serviceRequests.push(serviceRequest);

    showToast(serviceMessages[serviceType], serviceType === "urgent" ? "warning" : "success", );
    loadServiceRequests();

    // Auto-resolve non-urgent requests after 2 minutes
    if (serviceType !== "urgent") {
        setTimeout(()=>{
            resolveServiceRequest(serviceRequest.id);
        }
        , 120000);
    }
}

// Load service requests
function loadServiceRequests() {
    const container = document.getElementById("serviceRequests");

    if (serviceRequests.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--gray-500); margin-top: 2rem;">No active service requests</p>';
        return;
    }

    container.innerHTML = `
    <h3 style="margin-top: 2rem;">Active Requests</h3>
    ${serviceRequests.filter((req)=>req.status === "pending").map((request)=>`
      <div class="service-request" style="background: white; border-radius: var(--border-radius); padding: 1rem; margin-bottom: 1rem; border-left: 4px solid var(--warning);">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-weight: 600;">${request.message}</div>
            <div style="font-size: var(--font-size-sm); color: var(--gray-600);">
              ${formatTime(request.time)}
            </div>
          </div>
          <div class="pulse" style="width: 12px; height: 12px; background: var(--warning); border-radius: 50%;"></div>
        </div>
      </div>
    `, ).join("")}
  `;
}

// Resolve service request
function resolveServiceRequest(requestId) {
    const request = serviceRequests.find((req)=>req.id === requestId);
    if (request) {
        request.status = "resolved";
        loadServiceRequests();
    }
}

// Load bill
function loadBill() {
    const billItems = document.getElementById("billItems");

    if (currentOrder.length === 0) {
        billItems.innerHTML = '<p style="text-align: center; color: var(--gray-500);">No orders yet</p>';
        return;
    }

    const subtotal = currentOrder.reduce((sum,item)=>sum + item.price * item.quantity, 0, );
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    billItems.innerHTML = `
    ${currentOrder.map((item)=>`
      <div class="bill-item">
        <span>${item.name} × ${item.quantity}</span>
        <span>$${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    `, ).join("")}
    <div class="bill-item">
      <span>Subtotal</span>
      <span>$ ${subtotal.toFixed(2)}</span>
    </div>
    <div class="bill-item">
      <span>Tax (8%)</span>
      <span>$ ${tax.toFixed(2)}</span>
    </div>
    <div class="bill-item">
      <span>Total</span>
      <span>$ ${total.toFixed(2)}</span>
    </div>
  `;
}

// Request payment
function requestPayment() {
    if (currentOrder.length === 0) {
        showToast("No items to pay for", "warning");
        return;
    }

    showToast("Payment request sent to server. They will bring the check shortly.", "success", );
    updateTableStatus("Payment requested", "info");
}

// Set rating
function setRating(rating) {
    currentRating = rating;
    highlightStars(rating);
}

// Highlight stars
function highlightStars(rating) {
    document.querySelectorAll(".star").forEach((star,index)=>{
        if (index < rating) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    }
    );
}

// Submit feedback
function submitFeedback() {
    const feedbackText = document.getElementById("feedbackText").value;

    if (currentRating === 0) {
        showToast("Please select a rating", "warning");
        return;
    }

    // Simulate submitting feedback
    showToast("Thank you for your feedback!", "success");

    // Reset form
    currentRating = 0;
    highlightStars(0);
    document.getElementById("feedbackText").value = "";
}

// Update table status
function updateTableStatus(message, type="success") {
    const statusContainer = document.getElementById("tableStatus");
    const iconMap = {
        success: "fa-check-circle",
        warning: "fa-clock",
        info: "fa-info-circle",
        danger: "fa-exclamation-triangle",
    };

    statusContainer.innerHTML = `
    <div class="status-indicator" style="background: var(--${type});">
      <i class="fa-solid ${iconMap[type]}"></i>
      ${message}
    </div>
  `;
}

// Utility functions
function formatTime(date) {
    return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });
}

function showToast(message, type="info") {
    const toastContainer = document.getElementById("toastContainer");
    if (!toastContainer)
        return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;

    const iconMap = {
        success: "fa-check-circle",
        error: "fa-exclamation-circle",
        warning: "fa-exclamation-triangle",
        info: "fa-info-circle",
    };

    toast.innerHTML = `
    <div class="toast-icon">
      <i class="fa-solid ${iconMap[type]}"></i>
    </div>
    <div class="toast-content">
      <div class="toast-title">${type.charAt(0).toUpperCase() + type.slice(1)}</div>
      <p class="toast-message">${message}</p>
    </div>
    <button class="toast-close">
      <i class="fa-solid fa-times"></i>
    </button>
  `;

    toastContainer.appendChild(toast);

    // Show toast with animation
    setTimeout(()=>{
        toast.classList.add("show");
    }
    , 100);

    // Add close functionality
    const closeBtn = toast.querySelector(".toast-close");
    closeBtn.addEventListener("click", ()=>{
        toast.classList.remove("show");
        toast.classList.add("hiding");
        setTimeout(()=>{
            if (toast.parentNode) {
                toast.remove();
            }
        }
        , 300);
    }
    );

    // Auto remove after 4 seconds
    setTimeout(()=>{
        if (toast.parentNode) {
            toast.classList.remove("show");
            toast.classList.add("hiding");
            setTimeout(()=>{
                if (toast.parentNode) {
                    toast.remove();
                }
            }
            , 300);
        }
    }
    , 4000);
}

// Make functions globally accessible
window.switchSection = switchSection;
window.addToOrder = addToOrder;
window.viewCart = viewCart;
window.closeOrderModal = closeOrderModal;
window.removeFromOrder = removeFromOrder;
window.placeOrder = placeOrder;
window.callService = callService;
window.requestPayment = requestPayment;
window.setRating = setRating;
window.submitFeedback = submitFeedback;

