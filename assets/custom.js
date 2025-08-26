document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.product-info-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      var modalId = btn.getAttribute('data-modal-id');
      // Support both modalProductInfo-01 and modalProductInfo1
      var modal = document.getElementById(modalId) || document.getElementById(modalId.replace(/(\d+)$/, '-0$1'));
      if (modal) {
        modal.style.display = 'block';
        modal.classList.add('show');
        modal.classList.add('fade');
        document.body.style.overflow = 'hidden';
        // Optionally add backdrop
        if (!document.querySelector('.modal-backdrop')) {
          var backdrop = document.createElement('div');
          backdrop.className = 'modal-backdrop fade show';
          document.body.appendChild(backdrop);
          // Add click event to backdrop to close modal
          backdrop.addEventListener('click', function() {
            modal.style.display = 'none';
            modal.classList.remove('show');
            document.body.style.overflow = '';
            var backdropElem = document.querySelector('.modal-backdrop');
            if (backdropElem) backdropElem.remove();
          });
        }
        // Close on .close button click
        var closeBtn = modal.querySelector('.close');
        if (closeBtn) {
          closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            modal.classList.remove('show');
            document.body.style.overflow = '';
            var backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) backdrop.remove();
          }, { once: true });
        }
      }
    });
  });
});
