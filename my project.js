        // استهداف جميع أزرار الحذف
        document.addEventListener('DOMContentLoaded', () => {
            const deleteButtons = document.querySelectorAll('.delete-btn');
    
            deleteButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    // تحديد الكارد الأب للزر
                    const card = event.target.closest('.card');
                    if (card) {
                        card.remove(); // حذف الكارد
                    }
                });
            });
        });
        
// sidebar

function togglesubmenu(button){
    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')
    };
    //end sidebar
    
    
  
