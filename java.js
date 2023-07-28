document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.getElementById('sidebar');
    document.addEventListener('mousemove', function(e) {
      if (e.clientX <= 450) {
        sidebar.style.left = '0';
      } else {
        sidebar.style.left = '-370px';
      }
    });
  });
  




