const foodItems = [
    // ... Previous items ...
    {
        id: 1,
        name: "Masala Dosa",
        restaurant: "Udupi Tiffin Center",
        category: "South Indian",
        mealType: ["breakfast", "snacks"],
        price: 60,
        rating: 4.8,
        time: "25 mins",
        image: "images/dosa.jpg",
        description: "Crispy rice mixture crepe with spiced potato filling.",
        ingredients: ["1 cup Rice", "1/2 cup Urad Dal", "Potato", "Onion", "Mustard Seeds", "Curry Leaves"],
        steps: ["Soak rice and urad dal.", "Grind to batter.", "Boil potatoes and spice them.", "Spread batter on tawa.", "Add filling and fold."]
    },
    {
        id: 2,
        name: "Chicken Biryani",
        restaurant: "Paradise Biryani",
        category: "Main Course",
        mealType: ["lunch", "dinner"],
        price: 150,
        rating: 4.9,
        time: "45 mins",
        image: "images/biryani.jpg",
        description: "Aromatic basmati rice cooked with spiced chicken.",
        ingredients: ["Basmati Rice", "Chicken", "Yogurt", "Onions", "Saffron", "Biryani Masala"],
        steps: ["Marinate chicken.", "Parboil rice.", "Layer chicken and rice.", "Dum cook for 20 mins."]
    },
    {
        id: 3,
        name: "Paneer Curry",
        restaurant: "Punjabi Dhaba",
        category: "North Indian",
        mealType: ["lunch", "dinner"],
        price: 180,
        rating: 4.6,
        time: "35 mins",
        image: "images/paneer.jpg",
        description: "Soft paneer cubes in a rich, creamy tomato gravy.",
        ingredients: ["Paneer", "Tomatoes", "Cashew paste", "Cream", "Butter", "Garam Masala"],
        steps: ["Fry paneer.", "Sauté onions and tomato puree.", "Add spices and cream.", "Add paneer and simmer."]
    },
    {
        id: 4,
        name: "Idli Sambar",
        restaurant: "Madras Cafe",
        category: "South Indian",
        mealType: ["breakfast"],
        price: 40,
        rating: 4.5,
        time: "15 mins",
        image: "images/idli.jpg",
        description: "Soft steamed rice cakes with lentil soup.",
        ingredients: ["Rice", "Urad Dal", "Vegetables", "Sambar Powder"],
        steps: ["Ferment batter.", "Steam in molds.", "Prepare sambar.", "Serve hot."]
    },
    {
        id: 5,
        name: "Poha",
        restaurant: "Indore Eats",
        category: "Breakfast",
        mealType: ["breakfast", "snacks"],
        price: 50,
        rating: 4.3,
        time: "15 mins",
        image: "images/poha.jpg",
        description: "Flattened rice sautéed with onions, peanuts, and turmeric.",
        ingredients: ["Poha", "Peanuts", "Onion", "Turmeric", "Lemon"],
        steps: ["Rinse poha.", "Sauté peanuts and onions.", "Mix with spices and poha."]
    },
    {
        id: 6,
        name: "Upma",
        restaurant: "Home Style Kitchen",
        category: "Breakfast",
        mealType: ["breakfast"],
        price: 45,
        rating: 4.2,
        time: "20 mins",
        image: "images/upma.jpg",
        description: "Savory semolina porridge with veggies.",
        ingredients: ["Rava", "Mustard seeds", "Vegetables", "Water"],
        steps: ["Roast rava.", "Sauté veggies.", "Boil water and add rava."]
    },
    {
        id: 7,
        name: "Veg Burger",
        restaurant: "Burger King",
        category: "Fast Food",
        mealType: ["snacks", "lunch", "dinner"],
        price: 90,
        rating: 4.4,
        time: "25 mins",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60",
        description: "Juicy veggie patty with fresh lettuce and cheese.",
        ingredients: ["Bun", "Patty", "Lettuce", "Cheese", "Mayo"],
        steps: ["Toast bun.", "Fry patty.", "Assemble with veggies and cheese."]
    },
    {
        id: 8,
        name: "Margherita Pizza",
        restaurant: "Pizza Hut",
        category: "Italian",
        mealType: ["lunch", "dinner", "snacks"],
        price: 250,
        rating: 4.7,
        time: "40 mins",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop&q=60",
        description: "Classic pizza with tomato sauce, mozzarella, and basil.",
        ingredients: ["Dough", "Tomato Sauce", "Mozzarella", "Basil"],
        steps: ["Roll dough.", "Spread sauce and cheese.", "Bake.", "Garnish."]
    },
    {
        id: 9,
        name: "Pasta Arrabiata",
        restaurant: "Little Italy",
        category: "Italian",
        mealType: ["lunch", "dinner"],
        price: 220,
        rating: 4.5,
        time: "30 mins",
        image: "https://images.unsplash.com/photo-1626844131082-256783844137?w=500&auto=format&fit=crop&q=60",
        description: "Penne pasta tossed in spicy tomato garlic sauce.",
        ingredients: ["Pasta", "Tomatoes", "Garlic", "Chili Flakes", "Parsley"],
        steps: ["Boil pasta.", "Make sauce.", "Toss pasta.", "Serve."]
    },
    // --- JUICES ---
    {
        id: 10,
        name: "Fresh Orange Juice",
        restaurant: "Juice Junction",
        category: "Beverages",
        mealType: ["juices", "breakfast"],
        price: 80,
        rating: 4.6,
        time: "10 mins",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500&auto=format&fit=crop&q=60",
        description: "Freshly squeezed oranges with no added sugar.",
        ingredients: ["Oranges", "Ice", "Mint"],
        steps: ["Peel oranges.", "Juice them.", "Serve with ice."]
    },
    {
        id: 11,
        name: "Watermelon Cooler",
        restaurant: "Cool Sips",
        category: "Beverages",
        mealType: ["juices", "lunch"],
        price: 70,
        rating: 4.5,
        time: "10 mins",
        image: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=500&auto=format&fit=crop&q=60",
        description: "Refreshing watermelon juice with a hint of lemon.",
        ingredients: ["Watermelon", "Lemon", "Sugar", "Ice"],
        steps: ["Blend watermelon chunks.", "Strain.", "Add lemon juice.", "Serve items."]
    },
    {
        id: 12,
        name: "Mango Lassi",
        restaurant: "Punjab Sweets",
        category: "Beverages",
        mealType: ["juices", "lunch", "dinner"],
        price: 90,
        rating: 4.9,
        time: "15 mins",
        image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=500&auto=format&fit=crop&q=60",
        description: "Thick yogurt shake with sweet mango pulp.",
        ingredients: ["Yogurt", "Mango Pulp", "Sugar", "Cardamom"],
        steps: ["Blend yogurt and mango pulp.", "Add sugar and cardamom.", "Serve chilled."]
    },
    // --- SPECIAL OFFERS ---
    {
        id: 13,
        name: "Family Combo (Biryani + Coke)",
        restaurant: "Paradise Biryani",
        category: "Special Offers",
        mealType: ["offers", "lunch", "dinner"],
        price: 180, // Discounted from ~200
        rating: 4.8,
        time: "45 mins",
        image: "https://images.unsplash.com/photo-1631515243349-e06036043944?w=500&auto=format&fit=crop&q=60",
        description: "One Chicken Biryani served with a chilled Coke (Discounted).",
        ingredients: ["Chicken Biryani", "Coca Cola (300ml)"],
        steps: ["Prepare Biryani.", "Serve with chilled Coke."]
    },
    {
        id: 14,
        name: "Breakfast Platter",
        restaurant: "Udupi Tiffin Center",
        category: "Special Offers",
        mealType: ["offers", "breakfast"],
        price: 99, // Discounted
        rating: 4.7,
        time: "30 mins",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=60",
        description: "2 Idlis, 1 Vada, and Filter Coffee combo.",
        ingredients: ["Idli", "Vada", "Sambar", "Chutney", "Coffee"],
        steps: ["Serve hot items together."]
    }
];

// Determine page type
const path = window.location.pathname;
const isRecipePage = path.includes('recipe.html');
const isCartPage = path.includes('cart.html');
const isCheckoutPage = path.includes('checkout.html');
const isHomePage = path.includes('index.html') || path.endsWith('/') || !path.includes('.html');

// Global Cart State
let cart = JSON.parse(localStorage.getItem('cart')) || [];

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        updateCartCount();

        if (isHomePage) {
            initHomePage();
        } else if (isRecipePage) {
            renderRecipePage();
        } else if (isCartPage) {
            renderCartPage();
        } else if (isCheckoutPage) {
            renderCheckoutPage();
        }
    });
}

function updateCartCount() {
    const navCart = document.querySelector('nav a[href="cart.html"]');
    if (navCart) {
        const count = cart.reduce((sum, item) => sum + item.qty, 0);
        navCart.innerHTML = `<i class="fas fa-shopping-cart"></i> Cart (${count})`;
    }
}

function initHomePage() {
    renderHomePage(foodItems);
    setupFiltering();
    setupSearch();
}

function renderHomePage(items) {
    const container = document.getElementById('food-container');
    if (!container) return;

    if (items.length === 0) {
        container.innerHTML = '<p class="no-results">No food items found.</p>';
        return;
    }

    container.innerHTML = items.map(item => `
        <article class="card">
            <div class="card-img-container">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/300?text=Food'">
                <span class="rating">★ ${item.rating}</span>
                <span class="time">${item.time}</span>
                ${item.category === 'Special Offers' ? '<span class="offer-badge" style="position:absolute;top:10px;right:10px;background:#ff5200;color:white;padding:5px 10px;font-size:12px;border-radius:4px;font-weight:bold;">OFFER</span>' : ''}
            </div>
            <div class="card-content">
                <h3>${item.name}</h3>
                <p class="hotel-name"><i class="fas fa-store"></i> ${item.restaurant}</p>
                <p class="category">${item.category}</p>
                <div class="card-footer">
                    <span class="price">₹${item.price}</span>
                    <div class="actions">
                        <a href="recipe.html?id=${item.id}" class="btn-recipe">View Recipe</a>
                        <button class="btn-add" onclick="addToCart(${item.id})">Add</button>
                    </div>
                </div>
            </div>
        </article>
    `).join('');
}

function setupFiltering() {
    const chips = document.querySelectorAll('.chip');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            const result = chip.innerText.toLowerCase();
            if (result === 'all') {
                renderHomePage(foodItems);
            } else {
                // Modified filter logic to handle overlapping categories
                const filtered = foodItems.filter(item => item.mealType.includes(result));
                renderHomePage(filtered);
            }
        });
    });
}

function setupSearch() {
    const searchInput = document.querySelector('.search-bar input');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = foodItems.filter(item =>
            item.name.toLowerCase().includes(query) ||
            item.restaurant.toLowerCase().includes(query)
        );
        renderHomePage(filtered);
    });
}

function renderRecipePage() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const item = foodItems.find(f => f.id === id);

    if (!item) {
        document.querySelector('main').innerHTML = '<h2>Recipe not found</h2><a href="index.html">Go Back</a>';
        return;
    }

    document.title = `${item.name} Recipe`;
    document.getElementById('recipe-title').textContent = item.name;
    document.getElementById('recipe-img').src = item.image;
    document.getElementById('recipe-desc').textContent = item.description;

    // Hotel Name
    const infoDiv = document.querySelector('.recipe-info');
    if (!document.getElementById('hotel-name-p')) {
        const hotelP = document.createElement('p');
        hotelP.id = 'hotel-name-p';
        hotelP.innerHTML = `<strong>From:</strong> ${item.restaurant}`;
        hotelP.style.color = '#ff5200';
        hotelP.style.marginBottom = '10px';
        infoDiv.insertBefore(hotelP, document.getElementById('recipe-desc'));
    }

    document.getElementById('recipe-price').textContent = `Price: ₹${item.price}`;
    document.getElementById('recipe-time').textContent = `Cooking Time: ${item.time}`;

    document.getElementById('ingredients-list').innerHTML = item.ingredients.map(ing => `<li>${ing}</li>`).join('');
    document.getElementById('steps-list').innerHTML = item.steps.map(step => `<li>${step}</li>`).join('');

    // Update Add to Order button on recipe page
    const addBtn = document.querySelector('.btn-add');
    addBtn.onclick = () => addToCart(item.id);
}

// CART LOGIC
function addToCart(id) {
    const item = foodItems.find(f => f.id === id);
    if (!item) return;

    const existingItem = cart.find(c => c.id === id);
    if (existingItem) {
        existingItem.qty++;
    } else {
        cart.push({ ...item, qty: 1 });
    }

    alert(`Added ${item.name} to cart!`);
    saveCart();
    updateCartCount();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function renderCartPage() {
    const tableBody = document.querySelector('.cart-table tbody');
    const grandTotalEl = document.querySelector('.cart-total-display'); // Helper class added in HTML

    if (cart.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="4">Your cart is empty.</td></tr>';
        if (grandTotalEl) grandTotalEl.innerText = "Total: ₹0";
        return;
    }

    let total = 0;
    tableBody.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        return `
            <tr>
                <td>${item.name}<br><small>${item.restaurant}</small></td>
                <td>₹${item.price}</td>
                <td>
                    <button onclick="changeQty(${item.id}, -1)">-</button> 
                    ${item.qty} 
                    <button onclick="changeQty(${item.id}, 1)">+</button>
                </td>
                <td>₹${itemTotal}</td>
            </tr>
        `;
    }).join('');

    if (grandTotalEl) grandTotalEl.innerText = `Total: ₹${total}`;

    // Store total for checkout
    localStorage.setItem('cartToal', total);
}

function changeQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(c => c.id !== id);
    }
    saveCart();
    renderCartPage();
    updateCartCount();
}

// CHECKOUT LOGIC
function renderCheckoutPage() {
    const total = localStorage.getItem('cartToal') || 0;
    document.getElementById('pay-amount').innerText = `₹${total}`;
}

function processPayment() {
    alert("Payment Successful! Your order will be delivered shortly.");
    cart = [];
    saveCart();
    window.location.href = 'index.html';
}
