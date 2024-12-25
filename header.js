// function showSidebar(){
// const sidebar=document.getElementById('sidebar')
// sidebar.style.display='flex'
// }

// sidebar

function togglesubmenu(button){
button.nextElementSibling.classList.toggle('show')
button.classList.toggle('rotate')
};
//end sidebar


document.addEventListener('DOMContentLoaded', () => {
    const modalPostForm = document.getElementById('modalPostForm');
    const postsList = document.getElementById('postsList');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const modalTitleInput = document.getElementById('modalTitleInput');
    const modalDescriptionInput = document.getElementById('modalDescriptionInput');
    const modalPriceInput = document.getElementById('modalPriceInput');
    const modalPhoneInput = document.getElementById('modalPhoneInput');
    const modalCategoryInput = document.getElementById('modalCategoryInput');
    const modalImageInput = document.getElementById('modalImageInput');
    const postModal = new bootstrap.Modal(document.getElementById('postModal'));
    const posts = []; // مصفوفة لتخزين المنشورات


    
    // عرض المنشورات
    const renderPosts = (filter = 'all') => {
        postsList.innerHTML = '';
        const filteredPosts = posts.filter(post => filter === 'all' || post.category === filter);
        filteredPosts.forEach((post) => {
            const postElement = document.createElement('div');
            postElement.className = 'post-card card shadow-sm mb-3';
            postElement.innerHTML = `
                <div class="body-picture row g-0">
                <div class="body-post col-md-4">
              
                <img src="${post.image}" alt="${post.title}"  class="img-fluid rounded-start">

               <div class="heart position-absolute black ">
                  <i class="bi bi-heart"></i>
               </div>

                </div>

                <div class="col-md-8">

                <div class="card-body">
                
                    <h3 class="card-title" style="color: black;">${post.title}</h3>

                    <p class="card-text">${post.description}</p>

                    <p class="text-primary">رقم الهاتف: ${post.phoneNumber}</p>

                  <p class="text-price">السعر: ${post.price} دينار</p>

                </div>
                  </div>
        </div>
            `;
            postsList.appendChild(postElement);
        });
    };

   




    // إضافة منشور جديد
    modalPostForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const imageFile = modalImageInput.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const newPost = {
                title: modalTitleInput.value,
                description: modalDescriptionInput.value,
                price: modalPriceInput.value,
                phoneNumber: modalPhoneInput.value,
                category: modalCategoryInput.value,
                image: event.target.result
            };
            posts.push(newPost);
            renderPosts();
            modalPostForm.reset();
            postModal.hide();
        };
        reader.readAsDataURL(imageFile);
    });

    // تطبيق الفلاتر
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            renderPosts(e.target.getAttribute('data-filter'));
        });
    });

     // عرض المنشورات عند تحميل الصفحة
});







  
    const btt = document.getElementById('btt');
    
    // إظهار أو إخفاء الزر بناءً على موضع التمرير
   window.onscroll = function() {
      if (window.scrollY >= 300) {
        btt.style.display = 'block';
      } else {
        btt.style.display = 'none';
      }
    };
  
    // عندما يتم النقر على الزر، يرجع المستخدم إلى أعلى الصفحة
    btt.onclick = function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // تأثير التمرير السلس
      });
    };
    
