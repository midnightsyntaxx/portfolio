// Pastikan DOM sudah ready (PENTING untuk Edge!)
(function() {
    'use strict';
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initModal);
    } else {
        initModal();
    }
    
    function initModal() {
        var modal = document.getElementById('certModal');
        var modalImg = document.getElementById('modalImage');
        var cards = document.querySelectorAll('.achievment-card');
        
        if (!modal || !modalImg) {
            console.error('Modal elements not found!');
            return;
        }
        
        // Add click to cards
        for (var i = 0; i < cards.length; i++) {
            cards[i].addEventListener('click', function() {
                var img = this.querySelector('img');
                if (img) {
                    modal.style.display = 'block';
                    modalImg.src = img.src;
                    modalImg.alt = img.alt || 'Certificate';
                    document.body.style.overflow = 'hidden';
                    document.documentElement.style.overflow = 'hidden';
                }
            });
        }
        
        // Close modal function
        function closeModal() {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
        
        // Click ANYWHERE to close (termasuk gambar!)
        modal.addEventListener('click', function(e) {
            closeModal(); // Langsung close aja!
        });
        
        // ATAU kalau mau gambar bisa di-klik langsung
        modalImg.addEventListener('click', function(e) {
            e.stopPropagation(); // Cegah bubble ke modal
            closeModal(); // Close modal
        });
        
        // ESC key to close
        document.addEventListener('keydown', function(e) {
            e = e || window.event;
            var key = e.key || e.keyCode;
            
            if ((key === 'Escape' || key === 'Esc' || key === 27) && 
                modal.style.display === 'block') {
                closeModal();
            }
        });
        
        // Prevent image drag
        var allImages = document.querySelectorAll('img');
        for (var j = 0; j < allImages.length; j++) {
            allImages[j].addEventListener('dragstart', function(e) {
                e = e || window.event;
                if (e.preventDefault) e.preventDefault();
                return false;
            });
        }
    }
})();