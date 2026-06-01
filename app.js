// ===== STATE =====
let products = [...PRODUCTS];
let cart = JSON.parse(localStorage.getItem('econest_cart') || '[]');
let currentCategory = 'All';
let productsShown = 12;
const PRODUCTS_PER_PAGE = 12;

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  const savedProducts = localStorage.getItem('econest_products');
  if (savedProducts) {
    products = JSON.parse(savedProducts);
  }
  renderCategoryFilters();
  renderProducts();
  updateCartUI();
  initScrollEffects();
  renderLearningCenter();
  updateCalculator();
});

// ===== SCROLL EFFECTS =====
function initScrollEffects() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.why-eco-card, .product-card').forEach(el => observer.observe(el));
}

// ===== CATEGORY FILTERS =====
function renderCategoryFilters() {
  const container = document.getElementById('categoryFilters');
  container.innerHTML = CATEGORIES.map(cat =>
    `<button class="filter-btn ${cat === currentCategory ? 'active' : ''}" onclick="filterByCategory('${cat}')">${cat === 'All' ? 'All Products' : cat}</button>`
  ).join('');
}

function filterByCategory(category) {
  currentCategory = category;
  productsShown = PRODUCTS_PER_PAGE;
  renderCategoryFilters();
  renderProducts();
  const section = document.getElementById('products-section');
  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== PRODUCT RENDERING =====
function getFilteredProducts() {
  if (currentCategory === 'All') return products;
  return products.filter(p => p.category === currentCategory);
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const filtered = getFilteredProducts();
  const toShow = filtered.slice(0, productsShown);

  grid.innerHTML = toShow.map(product => `
    <div class="product-card" onclick="openProductModal(${product.id})">
      <div class="product-card-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22 fill=%22%23f0fff4%22%3E%3Crect width=%22400%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2240%22 fill=%22%2338a169%22%3E%F0%9F%8C%BF%3C/text%3E%3C/svg%3E'">
        ${product.badge ? `<span class="product-badge ${product.badge.toLowerCase()}">${product.badge}</span>` : ''}
        <div class="quick-actions">
          <button class="quick-action-btn" onclick="event.stopPropagation(); addToCart(${product.id})" title="Add to cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          </button>
          <button class="quick-action-btn" onclick="event.stopPropagation(); openProductModal(${product.id})" title="Quick view">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>
      </div>
      <div class="product-card-body">
        <div class="product-category-tag">${product.category}</div>
        <h3>${product.name}</h3>
        <p class="description">${product.description}</p>
        <div class="product-eco-preview">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          ${product.ecoFacts[0].substring(0, 60)}...
        </div>
        <div class="product-card-footer">
          <span class="product-price">$${product.price.toFixed(2)}</span>
          <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})" id="addBtn-${product.id}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Add
          </button>
        </div>
      </div>
    </div>
  `).join('');

  const loadMoreContainer = document.getElementById('loadMoreContainer');
  loadMoreContainer.style.display = productsShown >= filtered.length ? 'none' : 'block';

  requestAnimationFrame(() => {
    document.querySelectorAll('.product-card').forEach(el => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      observer.observe(el);
    });
  });
}

function loadMoreProducts() {
  productsShown += PRODUCTS_PER_PAGE;
  renderProducts();
}

// ===== PRODUCT MODAL =====
function openProductModal(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const modal = document.getElementById('productModal');
  const content = document.getElementById('modalContent');

  content.innerHTML = `
    <div class="modal-image">
      <img src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22 fill=%22%23f0fff4%22%3E%3Crect width=%22400%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2260%22 fill=%22%2338a169%22%3E%F0%9F%8C%BF%3C/text%3E%3C/svg%3E'">
      <div class="image-zoom-hint">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
        Interactive View
      </div>
    </div>
    <div class="modal-details">
      <div class="modal-category">${product.category}</div>
      <h2>${product.name}</h2>
      <div class="modal-price">$${product.price.toFixed(2)}</div>
      <p class="modal-desc">${product.description}</p>

      <div class="eco-facts-section">
        <div class="eco-facts-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          Eco Facts - Why This Product Helps the Planet
        </div>
        <ul class="eco-facts-list">
          ${product.ecoFacts.map(fact => `<li>${fact}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-quantity">
        <span class="qty-label">Quantity:</span>
        <div class="qty-controls">
          <button class="qty-btn" onclick="changeModalQty(-1)">-</button>
          <input type="text" class="qty-value" id="modalQty" value="1" readonly>
          <button class="qty-btn" onclick="changeModalQty(1)">+</button>
        </div>
      </div>

      <button class="modal-add-btn" onclick="addToCartFromModal(${product.id})">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
        Add to Cart - $${product.price.toFixed(2)}
      </button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  document.getElementById('productModal').classList.remove('active');
  document.body.style.overflow = '';
}

function changeModalQty(delta) {
  const input = document.getElementById('modalQty');
  let val = parseInt(input.value) + delta;
  if (val < 1) val = 1;
  if (val > 99) val = 99;
  input.value = val;
}

function addToCartFromModal(id) {
  const qty = parseInt(document.getElementById('modalQty').value);
  for (let i = 0; i < qty; i++) addToCart(id, true);
  showToast(`Added ${qty} item(s) to cart!`);
  closeProductModal();
}

// ===== CART =====
function addToCart(id, silent = false) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, qty: 1 });
  }

  saveCart();
  updateCartUI();

  const btn = document.getElementById(`addBtn-${id}`);
  if (btn) {
    btn.classList.add('added');
    btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Added';
    setTimeout(() => {
      btn.classList.remove('added');
      btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add';
    }, 1500);
  }

  if (!silent) showToast(`${product.name} added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateCartQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
  saveCart();
  updateCartUI();
  renderCartItems();
}

function saveCart() {
  localStorage.setItem('econest_cart', JSON.stringify(cart));
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartUI() {
  const count = getCartCount();
  const badge = document.getElementById('cartBadge');
  badge.textContent = count;
  badge.setAttribute('data-count', count);
  document.getElementById('cartCountLabel').textContent = `${count} item${count !== 1 ? 's' : ''}`;
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
        <p>Your cart is empty</p>
        <p style="font-size:0.85rem;margin-top:4px">Add some eco-friendly products!</p>
      </div>
    `;
    footer.style.display = 'none';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
      </div>
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <span class="item-price">$${(item.price * item.qty).toFixed(2)}</span>
        <div class="cart-item-controls">
          <button class="cart-qty-btn" onclick="updateCartQty(${item.id}, -1)">-</button>
          <span class="cart-item-qty">${item.qty}</span>
          <button class="cart-qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
      </div>
    </div>
  `).join('');

  const total = getCartTotal();
  document.getElementById('cartSubtotal').textContent = `$${total.toFixed(2)}`;
  document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
  footer.style.display = 'block';
}

function toggleCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  const isActive = drawer.classList.contains('active');

  if (isActive) {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  } else {
    renderCartItems();
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

// ===== CHECKOUT =====
function goToCheckout() {
  if (cart.length === 0) return;
  toggleCart();

  document.getElementById('mainContent').style.display = 'none';
  document.getElementById('footer').style.display = 'none';
  document.getElementById('adminSection').classList.remove('active');
  document.getElementById('orderSuccess').classList.remove('active');
  document.getElementById('checkoutSection').classList.add('active');

  renderOrderSummary();
  window.scrollTo(0, 0);
}

function hideCheckout() {
  document.getElementById('checkoutSection').classList.remove('active');
  document.getElementById('mainContent').style.display = '';
  document.getElementById('footer').style.display = '';
  window.scrollTo(0, 0);
}

function renderOrderSummary() {
  const list = document.getElementById('orderItemsList');
  list.innerHTML = cart.map(item => `
    <div class="order-item">
      <div class="order-item-thumb">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
      </div>
      <span class="order-item-name">${item.name}</span>
      <span class="order-item-qty">x${item.qty}</span>
      <span class="order-item-total">$${(item.price * item.qty).toFixed(2)}</span>
    </div>
  `).join('');

  const total = getCartTotal();
  document.getElementById('orderSubtotal').textContent = `$${total.toFixed(2)}`;
  document.getElementById('orderTotal').textContent = `$${total.toFixed(2)}`;
}

function placeOrder() {
  const orderNum = 'ECO-' + Math.random().toString(36).substr(2, 6).toUpperCase();

  document.getElementById('checkoutSection').classList.remove('active');
  document.getElementById('orderSuccess').classList.add('active');
  document.getElementById('orderNumber').textContent = `Order #${orderNum}`;

  cart = [];
  saveCart();
  updateCartUI();
  window.scrollTo(0, 0);

  showToast('Order placed successfully! (Demo)', 'success');
}

function continueShopping() {
  document.getElementById('orderSuccess').classList.remove('active');
  document.getElementById('mainContent').style.display = '';
  document.getElementById('footer').style.display = '';
  window.scrollTo(0, 0);
}

// ===== SEARCH =====
function toggleSearch() {
  const overlay = document.getElementById('searchOverlay');
  overlay.classList.toggle('active');
  if (overlay.classList.contains('active')) {
    document.getElementById('searchInput').focus();
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').innerHTML = '';
  }
}

function closeSearchIfBg(e) {
  if (e.target === document.getElementById('searchOverlay')) toggleSearch();
}

function handleSearch(query) {
  const results = document.getElementById('searchResults');
  if (query.length < 2) { results.innerHTML = ''; return; }

  const q = query.toLowerCase();
  const matches = products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.ecoFacts.some(f => f.toLowerCase().includes(q))
  ).slice(0, 8);

  if (matches.length === 0) {
    results.innerHTML = '<div style="padding:20px;text-align:center;color:var(--gray-400)">No products found</div>';
    return;
  }

  results.innerHTML = matches.map(p => `
    <div class="search-result-item" onclick="toggleSearch(); openProductModal(${p.id})">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <div>
        <div class="sr-name">${p.name}</div>
        <div class="sr-price">$${p.price.toFixed(2)} - ${p.category}</div>
      </div>
    </div>
  `).join('');
}

// ===== NAVIGATION =====
function showHome() {
  document.getElementById('mainContent').style.display = '';
  document.getElementById('footer').style.display = '';
  document.getElementById('checkoutSection').classList.remove('active');
  document.getElementById('orderSuccess').classList.remove('active');
  document.getElementById('adminSection').classList.remove('active');
  window.scrollTo(0, 0);
}

function scrollToProducts() {
  showHome();
  setTimeout(() => {
    document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

function showAdmin(e) {
  if (e) e.preventDefault();
  document.getElementById('mainContent').style.display = 'none';
  document.getElementById('footer').style.display = 'none';
  document.getElementById('checkoutSection').classList.remove('active');
  document.getElementById('orderSuccess').classList.remove('active');
  document.getElementById('adminSection').classList.add('active');
  renderAdminTable();
  window.scrollTo(0, 0);
}

// ===== ADMIN =====
function renderAdminTable() {
  const tbody = document.getElementById('adminTableBody');
  tbody.innerHTML = products.map(p => `
    <tr>
      <td>
        <div class="admin-product-cell">
          <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.style.background='var(--green-100)'">
          <span>${p.name}</span>
        </div>
      </td>
      <td>${p.category}</td>
      <td>$${p.price.toFixed(2)}</td>
      <td>${p.ecoFacts.length} facts</td>
      <td>
        <div class="admin-actions">
          <button class="admin-edit-btn" onclick="editProduct(${p.id})">Edit</button>
          <button class="admin-delete-btn" onclick="deleteProduct(${p.id})">Delete</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function openAdminModal(product = null) {
  document.getElementById('adminModalOverlay').classList.add('active');
  document.getElementById('adminModalTitle').textContent = product ? 'Edit Product' : 'Add New Product';
  document.getElementById('adminEditId').value = product ? product.id : '';
  document.getElementById('adminName').value = product ? product.name : '';
  document.getElementById('adminCategory').value = product ? product.category : 'Kitchen & Dining';
  document.getElementById('adminPrice').value = product ? product.price : '';
  document.getElementById('adminImage').value = product ? product.image : '';
  document.getElementById('adminBadge').value = product ? (product.badge || '') : '';
  document.getElementById('adminDesc').value = product ? product.description : '';

  const ecoContainer = document.getElementById('adminEcoFacts');
  const facts = product ? product.ecoFacts : [''];
  ecoContainer.innerHTML = facts.map(fact => `
    <div class="eco-fact-row">
      <input type="text" placeholder="Enter an eco fact..." value="${fact.replace(/"/g, '&quot;')}">
      <button onclick="removeEcoFactRow(this)">&times;</button>
    </div>
  `).join('');
}

function closeAdminModal() {
  document.getElementById('adminModalOverlay').classList.remove('active');
}

function addEcoFactRow() {
  const container = document.getElementById('adminEcoFacts');
  const row = document.createElement('div');
  row.className = 'eco-fact-row';
  row.innerHTML = '<input type="text" placeholder="Enter an eco fact..."><button onclick="removeEcoFactRow(this)">&times;</button>';
  container.appendChild(row);
}

function removeEcoFactRow(btn) {
  const container = document.getElementById('adminEcoFacts');
  if (container.children.length > 1) {
    btn.parentElement.remove();
  }
}

function saveProduct() {
  const editId = document.getElementById('adminEditId').value;
  const name = document.getElementById('adminName').value.trim();
  const category = document.getElementById('adminCategory').value;
  const price = parseFloat(document.getElementById('adminPrice').value);
  const image = document.getElementById('adminImage').value.trim();
  const badge = document.getElementById('adminBadge').value;
  const description = document.getElementById('adminDesc').value.trim();

  const ecoInputs = document.querySelectorAll('#adminEcoFacts input');
  const ecoFacts = Array.from(ecoInputs).map(i => i.value.trim()).filter(Boolean);

  if (!name || !price || !description) {
    showToast('Please fill in name, price, and description');
    return;
  }
  if (ecoFacts.length === 0) {
    showToast('Please add at least one eco fact');
    return;
  }

  if (editId) {
    const idx = products.findIndex(p => p.id === parseInt(editId));
    if (idx !== -1) {
      products[idx] = { ...products[idx], name, category, price, image: image || products[idx].image, badge, description, ecoFacts };
    }
    showToast('Product updated successfully!', 'success');
  } else {
    const newId = Math.max(...products.map(p => p.id), 0) + 1;
    products.push({
      id: newId, name, category, price,
      image: image || `https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=400&fit=crop`,
      badge, description, ecoFacts
    });
    showToast('Product added successfully!', 'success');
  }

  localStorage.setItem('econest_products', JSON.stringify(products));
  closeAdminModal();
  renderAdminTable();
  renderProducts();
}

function editProduct(id) {
  const product = products.find(p => p.id === id);
  if (product) openAdminModal(product);
}

function deleteProduct(id) {
  if (!confirm('Are you sure you want to delete this product?')) return;
  products = products.filter(p => p.id !== id);
  localStorage.setItem('econest_products', JSON.stringify(products));
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartUI();
  renderAdminTable();
  renderProducts();
  showToast('Product deleted', 'success');
}

// ===== MOBILE MENU =====
function toggleMobileMenu() {
  document.getElementById('navLinks').classList.toggle('mobile-open');
}

// ===== NEWSLETTER =====
function handleNewsletter(e) {
  e.preventDefault();
  showToast('Thanks for subscribing! Welcome to the green movement!', 'success');
  e.target.reset();
}

// ===== TOAST =====
function showToast(message, type = '') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = 'toast' + (type ? ' ' + type : '');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== ECO LEARNING CENTER =====
let currentEduCategory = 'Kitchen & Dining';

function renderLearningCenter() {
  renderGlobalStats();
  renderLearningTopics();
  renderCategoryEduTabs();
  renderCategoryEduContent();
}

function renderGlobalStats() {
  const container = document.getElementById('globalStats');
  if (!container) return;
  container.innerHTML = GLOBAL_ECO_STATS.map(stat => `
    <div class="global-stat-card">
      <div class="global-stat-number">${stat.number}</div>
      <div class="global-stat-label">${stat.label}</div>
    </div>
  `).join('');
}

function renderLearningTopics() {
  const container = document.getElementById('learningTopics');
  if (!container) return;
  const iconMap = {
    'alert-triangle': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    'thermometer': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z"/></svg>',
    'waves': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>',
    'trees': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22V8"/><path d="M5 12H2l5-5 3 3 4-4 3 3 5-5h-3"/><circle cx="12" cy="5" r="3"/></svg>',
    'droplet': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>',
    'recycle': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>'
  };

  container.innerHTML = ECO_LEARNING_TOPICS.map(topic => `
    <div class="learning-topic-card" onclick="openLearningModal('${topic.id}')">
      <div class="learning-topic-header">
        <div class="learning-topic-icon" style="background:${topic.color}15;color:${topic.color}">
          ${iconMap[topic.icon] || ''}
        </div>
        <h3>${topic.title}</h3>
      </div>
      <div class="learning-topic-body">
        <p>${topic.summary}</p>
        <span class="learn-more-link">
          Read more
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </span>
      </div>
    </div>
  `).join('');
}

function openLearningModal(topicId) {
  const topic = ECO_LEARNING_TOPICS.find(t => t.id === topicId);
  if (!topic) return;

  document.getElementById('learningModalTitle').textContent = topic.title;
  document.getElementById('learningModalBody').innerHTML = topic.content.map(block => `
    <div class="learning-content-block">
      <h3>${block.heading}</h3>
      <p>${block.text}</p>
    </div>
  `).join('');

  document.getElementById('learningModalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLearningModal() {
  document.getElementById('learningModalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function renderCategoryEduTabs() {
  const container = document.getElementById('categoryEduTabs');
  if (!container) return;
  const cats = Object.keys(ECO_EDUCATION);
  container.innerHTML = cats.map(cat => `
    <button class="cat-edu-tab ${cat === currentEduCategory ? 'active' : ''}" onclick="switchEduCategory('${cat}')">${cat}</button>
  `).join('');
}

function switchEduCategory(cat) {
  currentEduCategory = cat;
  renderCategoryEduTabs();
  renderCategoryEduContent();
}

function renderCategoryEduContent() {
  const container = document.getElementById('categoryEduContent');
  if (!container) return;
  const data = ECO_EDUCATION[currentEduCategory];
  if (!data) return;

  container.innerHTML = `
    <div class="cat-edu-overview">
      <div class="cat-edu-left">
        <h3>${data.title}</h3>
        <p class="overview-text">${data.overview}</p>
        <div class="deep-dive">
          <h4>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
            Deep Dive
          </h4>
          <p>${data.deepDive}</p>
        </div>
      </div>
      <div class="cat-edu-right">
        <div class="cat-edu-stats">
          ${data.keyStats.map(s => `
            <div class="cat-stat-card">
              <div class="cat-stat-number">${s.number}</div>
              <div class="cat-stat-label">${s.label}</div>
            </div>
          `).join('')}
        </div>
        <div class="cat-edu-actions">
          <h4>What You Can Do:</h4>
          <ul>
            ${data.whatYouCanDo.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;
}

// ===== ECO IMPACT CALCULATOR =====
function updateCalculator() {
  const household = parseInt(document.getElementById('calcHousehold').value);
  document.getElementById('calcHouseholdVal').textContent = household;

  const checkboxes = document.querySelectorAll('.calc-check input');
  const impacts = [
    { plastic: 167, water: 2000, co2: 83, money: 200 },   // bottles
    { plastic: 4, water: 100, co2: 5, money: 25 },         // toothbrushes
    { plastic: 500, water: 500, co2: 40, money: 50 },      // bags
    { plastic: 6, water: 3000, co2: 15, money: 40 },       // shampoo bars
    { plastic: 100, water: 200, co2: 8, money: 30 },       // beeswax wraps
    { plastic: 0, water: 1000, co2: 200, money: 0 },       // compost
    { plastic: 12, water: 500, co2: 10, money: 200 },      // safety razor
    { plastic: 365, water: 100, co2: 5, money: 15 }        // straws
  ];

  let totalPlastic = 0, totalWater = 0, totalCO2 = 0, totalMoney = 0;
  checkboxes.forEach((cb, i) => {
    if (cb.checked && impacts[i]) {
      totalPlastic += impacts[i].plastic;
      totalWater += impacts[i].water;
      totalCO2 += impacts[i].co2;
      totalMoney += impacts[i].money;
    }
  });

  totalPlastic *= household;
  totalWater *= household;
  totalCO2 *= household;
  totalMoney *= household;

  animateNumber('calcPlastic', totalPlastic, '');
  animateNumber('calcWater', totalWater, '');
  animateNumber('calcCO2', totalCO2, '');
  document.getElementById('calcMoney').textContent = `$${totalMoney.toLocaleString()}`;
}

function animateNumber(id, target, suffix) {
  const el = document.getElementById(id);
  const current = parseInt(el.textContent.replace(/[^0-9]/g, '')) || 0;
  const diff = target - current;
  const steps = 20;
  const stepValue = diff / steps;
  let step = 0;

  const animate = () => {
    step++;
    const val = Math.round(current + stepValue * step);
    el.textContent = val.toLocaleString() + suffix;
    if (step < steps) requestAnimationFrame(animate);
    else el.textContent = target.toLocaleString() + suffix;
  };
  requestAnimationFrame(animate);
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProductModal();
    closeLearningModal();
    if (document.getElementById('searchOverlay').classList.contains('active')) toggleSearch();
    if (document.getElementById('cartDrawer').classList.contains('active')) toggleCart();
    closeAdminModal();
  }
});

// ===== CLICK OUTSIDE MODAL =====
document.getElementById('productModal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('productModal')) closeProductModal();
});
