// --- DATABASE PRODUK (SUDAH UPDATE FORMAT LIST) ---
const productsDB = [
    { 
        id: 'sayur-asem', 
        type: 'favorit', 
        name: 'Box Sayur Asem', 
        price: 15000, 
        img: 'https://down-id.img.susercontent.com/file/db764660c241da563880d21d2812afe0', 
        desc: 'Segar, Asam, dan Pedas dikit.', 
        bahan: `Bahan:
1 buah labu siam (potong dadu)
3 lonjor kacang panjang (potong-potong)
1/2 buah jagung manis (potong bulat)
Segenggam daun melinjo
1 sdm air asam jawa

Bumbu Halus (atau iris):
3 butir bawang merah & 2 siung bawang putih
2 buah cabai merah
1/2 sdt terasi bakar
Lengkuas (geprek) & Daun salam`, 
        masak: `1. Rebus 500ml air dengan bumbu halus, lengkuas, dan daun salam sampai mendidih.
2. Masukkan jagung dan labu siam (sayuran keras dulu). Masak setengah matang.
3. Masukkan kacang panjang dan daun melinjo.
4. Tambahkan air asam jawa, garam, dan gula secukupnya. Koreksi rasa (harus ada rasa manis-asem-segar).` 
    },
    { 
        id: 'sop-ayam', 
        type: 'favorit', 
        name: 'Box Sop Ayam', 
        price: 20000, 
        img: 'sop-ayam.png', 
        desc: 'Sup ayam hangat untuk cuaca dingin.', 
        bahan: `Bahan:
2 potong ayam
1 buah wortel (iris bulat)
1 buah kentang (potong dadu)
Buncis & kol
Daun bawang & seledri

Bumbu:
2 siung bawang putih
Lada bubuk, garam, kaldu jamur`, 
        masak: `1. Rebus ayam dengan air bersih (sekitar 600ml) sampai empuk.
2. Tumis bawang putih sampai harum, masukkan ke kuah rebusan ayam.
3. Masukkan wortel dan kentang. Masak sampai empuk.
4. Masukkan buncis, kol, daun bawang, seledri, lada, dan garam. Masak sebentar saja agar sayur tetap segar.` 
    },
    { 
        id: 'capcay', 
        type: 'favorit', 
        name: 'Box Capcay', 
        price: 18000, 
        img: 'capcay.png', 
        desc: 'Tumis sayuran lengkap bergizi.', 
        bahan: `Bahan:
Isian: 5 butir bakso sapi dan sedikit daging ayam/udang.
Sayur: 1 wortel, segenggam kembang kol, sawi putih, dan sawi hijau.

Bumbu:
2 siung bawang putih
1/2 bawang bombay
1 sdm saus tiram
Tepung maizena`, 
        masak: `1. Tumis bawang putih hingga harum.
2. Masukkan bakso dan wortel (beri sedikit air).
3. Masukkan sayuran lainnya.
4. Tambahkan bumbu penyedap & saus tiram.
5. Masak hingga sayur layu tapi tetap renyah.` 
    },
    { 
        id: 'kangkung', 
        type: 'hemat', 
        name: 'Box Tumis Kangkung', 
        price: 10000, 
        img: 'kangkung.png', 
        desc: 'Menu praktis, masak cuma 5 menit.', 
        bahan: `1. Satu Ikat Kangkung Segar
2. Bawang Merah & Putih
3. Cabai Merah Iris
4. Saus Tiram Sachet
5. Terasi (Opsional)`, 
        masak: `1. Tumis bawang dan cabai hingga layu.
2. Masukkan kangkung yang sudah dicuci.
3. Besarkan api, aduk cepat.
4. Tambahkan saus tiram dan sedikit air.
5. Angkat selagi hijau segar.` 
    },
    { 
        id: 'soto-betawi', 
        type: 'hemat', 
        name: 'Box Soto Betawi', 
        price: 20000, 
        img: 'soto-betawi.png', 
        desc: 'Kuah santan gurih khas Jakarta.', 
        bahan: `1. Daging Sapi Potong
2. Santan Instan
3. Kentang Goreng
4. Daun Jeruk & Serai
5. Bumbu Soto Betawi`, 
        masak: `1. Rebus daging dengan serai & daun jeruk.
2. Masukkan bumbu soto dan santan.
3. Aduk terus agar santan tidak pecah.
4. Sajikan dengan potongan kentang & emping.` 
    },
    { 
        id: 'rawon', 
        type: 'hemat', 
        name: 'Box Rawon', 
        price: 20000, 
        img: 'rawon.png', 
        desc: 'Masakan kuah hitam legendaris.', 
        bahan: `1. Daging Tetelan Sapi
2. Bumbu Kluwek (Hitam)
3. Tauge Pendek
4. Daun Bawang
5. Kerupuk Udang (Opsional)`, 
        masak: `1. Tumis bumbu kluwek hingga matang berminyak.
2. Masukkan daging dan air, rebus hingga empuk.
3. Masukkan daun bawang.
4. Sajikan panas dengan taburan tauge pendek.` 
    },
    { 
        id: 'telur-balado', 
        type: 'hemat', 
        name: 'Box Telur Balado', 
        price: 15000, 
        img: 'telur.png', 
        desc: 'Pedas manis bikin nambah nasi.', 
        bahan: `1. 4 Butir Telur Ayam
2. Cabai Merah Keriting
3. Bawang Merah & Putih
4. Tomat Merah
5. Daun Jeruk`, 
        masak: `1. Rebus telur, kupas, lalu goreng sebentar.
2. Haluskan cabai, bawang, dan tomat.
3. Tumis bumbu halus hingga matang (tanak).
4. Masukkan telur, aduk rata.` 
    },
    { 
        id: 'orek-tempe', 
        type: 'hemat', 
        name: 'Box Orek Tempe', 
        price: 12000, 
        img: 'orek.png', 
        desc: 'Menu andalan tanggal tua.', 
        bahan: `1. Papan Tempe (Potong Korek)
2. Kecap Manis
3. Gula Merah & Lengkuas
4. Cabai Merah Iris
5. Daun Salam`, 
        masak: `1. Goreng tempe hingga setengah kering/garing.
2. Tumis bumbu iris dan daun salam.
3. Masukkan sedikit air dan gula merah.
4. Masukkan tempe dan kecap, aduk sampai meresap.` 
    },
    { 
        id: 'sayur-lodeh', 
        type: 'hemat', 
        name: 'Box Sayur Lodeh', 
        price: 18000, 
        img: 'lodeh.png', 
        desc: 'Gurih santan dengan isian lengkap.', 
        bahan: `1. Labu Siam & Terong
2. Kacang Panjang & Daun Melinjo
3. Jagung Manis
4. Santan Instan
5. Bumbu Lodeh`, 
        masak: `1. Rebus air, masukkan jagung dan bumbu.
2. Masukkan sayuran keras (labu).
3. Tambahkan santan, aduk perlahan.
4. Masukkan sayuran lunak (terong/daun).` 
    },
    { 
        id: 'ketoprak', 
        type: 'hemat', 
        name: 'Box Ketoprak', 
        price: 16000, 
        img: 'ketoprak.png', 
        desc: 'Sarapan khas Jakarta.', 
        bahan: `1. Tahu Putih
2. Bihun Jagung
3. Tauge
4. Kacang Tanah Sangrai
5. Bawang Putih & Cabai`, 
        masak: `1. Goreng tahu dan rendam bihun air panas.
2. Ulek kacang, bawang putih, cabai, gula merah.
3. Tambahkan air sedikit demi sedikit.
4. Campurkan tahu, bihun, tauge ke bumbu.` 
    },
    { 
        id: 'ayam-geprek', 
        type: 'hemat', 
        name: 'Box Ayam Geprek', 
        price: 20000, 
        img: 'geprek.png', 
        desc: 'Pedasnya nampol!', 
        bahan: `1. Ayam Ungkep / Tepung
2. Cabai Rawit Setan
3. Bawang Putih
4. Minyak Panas
5. Lalapan (Timun)`, 
        masak: `1. Goreng ayam hingga crispy/matang.
2. Ulek kasar cabai rawit dan bawang putih.
3. Siram sambal dengan minyak panas bekas goreng ayam.
4. Geprek ayam di atas cobek sambal.` 
    },
    { 
        id: 'nasi-goreng', 
        type: 'hemat', 
        name: 'Box Nasi Goreng', 
        price: 15000, 
        img: 'nasgor.png', 
        desc: 'Solusi lapar tengah malam.', 
        bahan: `1. Beras (Masak jadi nasi pera)
2. Telur Ayam
3. Bumbu Nasi Goreng Instan
4. Kecap Manis
5. Kerupuk & Acar`, 
        masak: `1. Orak-arik telur di wajan.
2. Masukkan nasi putih dingin.
3. Tuang bumbu instan dan kecap.
4. Aduk rata dengan api besar agar wangi.` 
    }
];

// --- MAIN EVENT LISTENER ---
document.addEventListener("DOMContentLoaded", () => {
    checkUserSession();
    updateCartBadge();
    const path = window.location.pathname;
    
    // Logika Routing Sederhana
    if (path.includes('index.html') || path === '/' || path.endsWith('/')) { 
        renderProducts(productsDB); 
        setupSlider(); 
    }
    if (path.includes('product.html')) loadProductDetail();
    if (path.includes('cart.html')) renderCartItems();
    if (path.includes('payment.html')) loadPaymentPage();
    if (path.includes('profile.html')) loadProfileData();
});

// --- UTILITIES ---
function getProduct(id) { return productsDB.find(p => p.id === id); }
function formatRp(num) { return "Rp " + num.toLocaleString('id-ID'); }

// --- AUTH & NOTIFIKASI ---
function checkUserSession() {
    const user = localStorage.getItem('activeUser');
    const loginBtn = document.getElementById('btn-login-nav');
    const profileBtn = document.getElementById('profile-btn-header');
    const cartIcon = document.getElementById('nav-cart-icon');
    if(user) {
        if(loginBtn) loginBtn.style.display = 'none';
        if(profileBtn) profileBtn.style.display = 'block';
        if(cartIcon) cartIcon.style.display = 'block';
    } else {
        if(loginBtn) loginBtn.style.display = 'block';
        if(profileBtn) profileBtn.style.display = 'none';
        if(cartIcon) cartIcon.style.display = 'none';
    }
}
function showNotif(msg, type) {
    const overlay = document.getElementById('notif-overlay');
    const box = document.getElementById('notif-box');
    const icon = document.getElementById('notif-icon');
    document.getElementById('notif-msg').innerText = msg;
    box.className = 'notif-box ' + (type === 'sukses' ? 'sukses-theme' : 'gagal-theme');
    icon.className = type === 'sukses' ? 'fas fa-check-circle notif-icon' : 'fas fa-exclamation-triangle notif-icon';
    overlay.style.display = 'flex';
}
function closeNotif() { document.getElementById('notif-overlay').style.display = 'none'; }
function openModal(mode) { 
    document.getElementById('auth-modal').style.display = 'flex'; 
    document.getElementById('form-login').style.display = mode === 'login' ? 'block' : 'none'; 
    document.getElementById('form-register').style.display = mode === 'register' ? 'block' : 'none'; 
}
function closeModal() { document.getElementById('auth-modal').style.display = 'none'; }
function handleRegister(e) { 
    e.preventDefault(); 
    localStorage.setItem('storedUser', document.getElementById('reg-user').value); 
    localStorage.setItem('storedPass', document.getElementById('reg-pass').value); 
    openModal('login'); 
    showNotif("Daftar Berhasil! Silakan Masuk", "sukses"); 
}
function handleLogin(e) { 
    e.preventDefault(); 
    if(document.getElementById('log-user').value === localStorage.getItem('storedUser') && 
       document.getElementById('log-pass').value === localStorage.getItem('storedPass')) { 
        localStorage.setItem('activeUser', document.getElementById('log-user').value); 
        closeModal(); 
        showNotif("Berhasil Masuk!", "sukses"); 
        setTimeout(()=>location.reload(),1000); 
    } else { 
        showNotif("Salah Password!", "gagal"); 
    } 
}
function logout() { 
    localStorage.removeItem('activeUser'); 
    location.href = 'index.html'; 
}

// --- KERANJANG (CART LOGIC) - SUDAH DIPERBAIKI ---
function addToCart(id) {
    if (!localStorage.getItem('activeUser')) { showNotif("Login dulu ya!", "gagal"); return; }
    let cart = JSON.parse(localStorage.getItem('prepbox_cart')) || [];
    if (!Array.isArray(cart)) cart = [];
    const existing = cart.find(item => item.id === id);
    if(existing) { existing.qty += 1; } else { cart.push({ id: id, qty: 1 }); }
    localStorage.setItem('prepbox_cart', JSON.stringify(cart));
    showNotif("Masuk Keranjang!", "sukses"); updateCartBadge();
}

function updateCartBadge() { 
    let cart = [];
    try { cart = JSON.parse(localStorage.getItem('prepbox_cart')) || []; } catch(e){ cart = []; }
    if(!Array.isArray(cart)) cart = [];
    
    // Filter produk valid
    const validItems = cart.filter(item => getProduct(item.id));
    
    const badge = document.getElementById('cart-count'); 
    if(badge) {
        if(validItems.length === 0) {
            badge.style.display = 'none';
            badge.innerText = '0';
        } else {
            badge.style.display = 'block';
            badge.innerText = validItems.length;
        }
    } 
}

function renderCartItems() {
    let cart = JSON.parse(localStorage.getItem('prepbox_cart')) || [];
    const container = document.getElementById('cart-list');
    container.innerHTML = '';
    
    // Auto-clean produk hantu
    const validCart = cart.filter(item => getProduct(item.id));
    if (validCart.length !== cart.length) {
        localStorage.setItem('prepbox_cart', JSON.stringify(validCart));
        cart = validCart;
        updateCartBadge();
    }
    
    if (cart.length === 0) {
        container.innerHTML = '<div style="text-align:center; padding:40px;"><i class="fas fa-shopping-basket" style="font-size:40px; color:#ddd; margin-bottom:10px;"></i><p>Keranjang masih kosong.</p></div>';
        if(document.getElementById('cart-total')) document.getElementById('cart-total').innerText = "Rp 0";
        if(document.getElementById('btn-checkout')) document.getElementById('btn-checkout').disabled = true;
        updateCartBadge();
        return;
    }
    
    cart.forEach((item, index) => {
        const product = getProduct(item.id);
        container.innerHTML += `
            <div class="cart-item">
                <div class="cart-left">
                    <input type="checkbox" class="cart-checkbox" data-index="${index}" checked onchange="calculateTotal()">
                    <img src="${product.img}">
                    <div class="cart-info"><h4>${product.name}</h4><p>${formatRp(product.price)}</p></div>
                </div>
                <div class="qty-control">
                    <button class="btn-qty" onclick="changeQty(${index}, -1)">-</button><span class="qty-val">${item.qty}</span><button class="btn-qty" onclick="changeQty(${index}, 1)">+</button>
                </div>
                <button class="btn-hapus" onclick="removeFromCart(${index})">Hapus</button>
            </div>`;
    });
    calculateTotal();
}

function changeQty(index, delta) {
    let cart = JSON.parse(localStorage.getItem('prepbox_cart')) || [];
    if(cart[index]) { 
        cart[index].qty += delta; 
        if(cart[index].qty < 1) cart[index].qty = 1; 
        localStorage.setItem('prepbox_cart', JSON.stringify(cart)); 
        renderCartItems(); 
    }
}

function calculateTotal() {
    let total = 0; let count = 0;
    const cart = JSON.parse(localStorage.getItem('prepbox_cart')) || [];
    document.querySelectorAll('.cart-checkbox').forEach(box => {
        if(box.checked) { 
            const index = box.getAttribute('data-index'); 
            const item = cart[index]; 
            const product = getProduct(item.id);
            if(item && product) { total += (product.price * item.qty); count++; }
        }
    });
    document.getElementById('cart-total').innerText = formatRp(total);
    const btn = document.getElementById('btn-checkout');
    if(btn) { 
        btn.disabled = count === 0; 
        btn.innerText = count === 0 ? "Pilih Produk Dulu" : "Checkout Sekarang"; 
    }
}

function removeFromCart(idx) { 
    let cart = JSON.parse(localStorage.getItem('prepbox_cart')) || []; 
    cart.splice(idx, 1); 
    localStorage.setItem('prepbox_cart', JSON.stringify(cart)); 
    renderCartItems(); 
    updateCartBadge(); 
}

function goToPayment() {
    const checkboxes = document.querySelectorAll('.cart-checkbox:checked');
    if (checkboxes.length === 0) { showNotif("Pilih produk dulu!", "gagal"); return; }
    let selectedItems = []; 
    const cart = JSON.parse(localStorage.getItem('prepbox_cart')) || [];
    checkboxes.forEach(box => { 
        const index = box.getAttribute('data-index'); 
        selectedItems.push(cart[index]); 
    });
    sessionStorage.setItem('prepbox_checkout_items', JSON.stringify(selectedItems));
    window.location.href = 'payment.html';
}

// --- PAYMENT LOGIC ---
function loadPaymentPage() {
    const items = JSON.parse(sessionStorage.getItem('prepbox_checkout_items')) || [];
    const listContainer = document.getElementById('payment-prod-list');
    const subtotalEl = document.getElementById('pay-subtotal');
    const totalEl = document.getElementById('pay-total');
    const btnPay = document.getElementById('btn-confirm-pay');
    
    btnPay.disabled = true; btnPay.innerText = "Pilih Metode Pembayaran";
    
    // Auto-fill form
    const savedName = localStorage.getItem('activeUser') || '';
    const savedAddress = localStorage.getItem('prepbox_address') || '';
    const savedPhone = localStorage.getItem('prepbox_phone') || '+62 812 345 678'; 

    if(document.getElementById('pay-name')) document.getElementById('pay-name').value = savedName;
    if(document.getElementById('pay-address')) document.getElementById('pay-address').value = savedAddress;
    if(document.getElementById('pay-phone')) document.getElementById('pay-phone').value = savedPhone;
    
    let subtotal = 0; listContainer.innerHTML = '';
    if(items.length === 0) return;

    items.forEach(item => {
        const p = getProduct(item.id);
        if(p) { 
            subtotal += (p.price * item.qty); 
            listContainer.innerHTML += `
            <div class="summary-item" style="border-bottom:1px dashed #eee; padding-bottom:10px;">
                <div><strong>${p.name}</strong> <span style="color:#888; font-size:12px;">x${item.qty}</span></div>
                <div>${formatRp(p.price * item.qty)}</div>
            </div>`; 
        }
    });
    subtotalEl.innerText = formatRp(subtotal); totalEl.innerText = formatRp(subtotal + 5000);
}

function selectMethod(method) {
    document.querySelectorAll('.method-box').forEach(b => b.classList.remove('active'));
    document.getElementById('method-' + method).classList.add('active');
    sessionStorage.setItem('prepbox_pay_method', method);
    const btnPay = document.getElementById('btn-confirm-pay'); 
    btnPay.disabled = false; btnPay.innerText = "Bayar Sekarang";
}

function processPayment() {
    const method = sessionStorage.getItem('prepbox_pay_method'); if(!method) return;
    const name = document.getElementById('pay-name').value;
    const phone = document.getElementById('pay-phone').value;
    const address = document.getElementById('pay-address').value;

    if(!name || !phone || !address) { showNotif("Lengkapi data pengiriman!", "gagal"); return; }

    const overlay = document.getElementById('pay-simulation-overlay');
    const contentVa = document.getElementById('sim-va'); 
    const contentQris = document.getElementById('sim-qris');
    overlay.style.display = 'flex';
    if(method === 'bank') { contentVa.style.display = 'block'; contentQris.style.display = 'none'; } 
    else { contentVa.style.display = 'none'; contentQris.style.display = 'block'; }
}

function confirmPayment() {
    const items = JSON.parse(sessionStorage.getItem('prepbox_checkout_items')) || [];
    let itemsDetails = []; let total = 5000;
    items.forEach(item => { 
        const p = getProduct(item.id); 
        if(p) { itemsDetails.push({ ...p, qty: item.qty }); total += (p.price * item.qty); } 
    });
    const orderId = 'TRX-' + Math.floor(Math.random() * 90000 + 10000);
    const date = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString().slice(0,5);
    const newOrder = { id: orderId, date: date, items: itemsDetails, total: total, status: 'Dikemas' };
    
    let history = JSON.parse(localStorage.getItem('prepbox_history')) || [];
    history.unshift(newOrder); 
    localStorage.setItem('prepbox_history', JSON.stringify(history));
    
    let mainCart = JSON.parse(localStorage.getItem('prepbox_cart')) || [];
    mainCart = mainCart.filter(cartItem => !items.some(bought => bought.id === cartItem.id));
    localStorage.setItem('prepbox_cart', JSON.stringify(mainCart));
    
    document.getElementById('pay-simulation-overlay').style.display = 'none';
    showNotif("Pembayaran Berhasil!", "sukses"); setTimeout(() => { window.location.href = 'profile.html'; }, 2000);
}

// --- PROFILE LOGIC ---
function loadProfileData() {
    const user = localStorage.getItem('activeUser');
    document.getElementById('profile-username').innerText = user;
    
    document.getElementById('address-input').value = localStorage.getItem('prepbox_address') || '';
    
    const savedPhone = localStorage.getItem('prepbox_phone');
    if(savedPhone) {
        document.getElementById('profile-phone').value = savedPhone;
    } else {
        document.getElementById('profile-phone').value = '+62 812 345 678';
    }

    const list = document.getElementById('order-list');
    const history = JSON.parse(localStorage.getItem('prepbox_history')) || [];
    
    list.innerHTML = '';
    if(history.length === 0) { list.innerHTML = '<p style="color:#777; text-align:center;">Belum ada pesanan.</p>'; return; }
    
    history.forEach((order, index) => {
        let detailHtml = '';
        order.items.forEach(i => { detailHtml += `<div class="detail-row"><span>${i.name} (x${i.qty})</span><span>${formatRp(i.price * i.qty)}</span></div>`; });
        detailHtml += `<div class="detail-row" style="color:#777;"><span>Ongkir</span><span>Rp 5.000</span></div>`;
        detailHtml += `<div class="detail-total">TOTAL: ${formatRp(order.total)}</div>`;
        
        list.innerHTML += `
            <div class="order-item">
                <div class="order-summary">
                    <div class="order-info"><h4>#${order.id}</h4><div class="order-status"><i class="far fa-clock"></i> ${order.date} &bull; <span style="color:var(--hijau); font-weight:bold;">${order.status}</span></div></div>
                    <div class="order-actions"><button class="btn-toggle" onclick="toggleDetail(${index})">Detail</button><button class="btn-track" onclick="trackOrder('${order.id}')">Lacak</button></div>
                </div>
                <div id="order-detail-${index}" class="order-details-content">${detailHtml}</div>
            </div>`;
    });
}
function toggleDetail(index) {
    const el = document.getElementById(`order-detail-${index}`);
    el.style.display = (el.style.display === 'block') ? 'none' : 'block';
}
function saveAddress() { 
    localStorage.setItem('prepbox_address', document.getElementById('address-input').value); 
    localStorage.setItem('prepbox_phone', document.getElementById('profile-phone').value);
    showNotif("Data Disimpan!", "sukses"); 
}
function trackOrder(id) { document.getElementById('tracking-overlay').style.display = 'flex'; }
function closeTracking() { document.getElementById('tracking-overlay').style.display = 'none'; }

// --- SLIDER & SEARCH ---
function setupSlider() {
    const s = document.querySelector('.slider-wrapper'); 
    const p = document.querySelector('.prev-btn'); 
    const n = document.querySelector('.next-btn');
    if(s) s.addEventListener('scroll', () => {
        p.style.display = (s.scrollLeft <= 10) ? 'none' : 'flex';
        n.style.display = (s.scrollLeft >= s.scrollWidth - s.clientWidth - 10) ? 'none' : 'flex';
        const idx = Math.round(s.scrollLeft / s.clientWidth); 
        document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === idx));
    });
}
function geserSlide(a) { 
    document.querySelector('.slider-wrapper').scrollBy({ left: document.querySelector('.slider-wrapper').clientWidth * a, behavior: 'smooth' }); 
}
function renderProducts(d) {
    const gf = document.getElementById('grid-favorit'); 
    const gh = document.getElementById('grid-hemat');
    if(gf) gf.innerHTML = ''; if(gh) gh.innerHTML = ''; 
    let hf=false, hh=false;
    d.forEach(i => {
        const c = `<a href="product.html?id=${i.id}" class="card"><img src="${i.img}"><div class="card-body"><h3>${i.name}</h3><div class="card-price">${formatRp(i.price)}</div></div></a>`;
        if(i.type==='favorit' && gf) { gf.innerHTML+=c; hf=true; } 
        else if(i.type==='hemat' && gh) { gh.innerHTML+=c; hh=true; }
    });
    if(document.getElementById('title-favorit')) document.getElementById('title-favorit').style.display=hf?'block':'none';
    if(document.getElementById('title-hemat')) document.getElementById('title-hemat').style.display=hh?'block':'none';
}
function searchMenu() { 
    renderProducts(productsDB.filter(i => i.name.toLowerCase().includes(document.getElementById('search-input').value.toLowerCase()))); 
}

// --- DETAIL PRODUK (UPDATE SUPPORT NEW LINE) ---
function loadProductDetail() {
    const id = new URLSearchParams(window.location.search).get('id'); 
    const p = getProduct(id);
    
    if(p) {
        document.getElementById('dp-img').src = p.img; 
        document.getElementById('dp-name').innerText = p.name;
        document.getElementById('dp-price').innerText = formatRp(p.price); 
        
        // PENTING: Gunakan .innerHTML dan .replace untuk mengubah enter (\n) menjadi <br>
        document.getElementById('dp-desc').innerText = p.desc;
        document.getElementById('dp-bahan').innerHTML = p.bahan.replace(/\n/g, '<br>'); 
        document.getElementById('dp-masak').innerHTML = p.masak.replace(/\n/g, '<br>');
        
        document.getElementById('btn-beli-detail').onclick = () => addToCart(id);
    }
}