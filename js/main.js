function mostrrSenh() {
    var teste1 = document.getElementById('cadeadoo')
    var teste2 = document.getElementById('btn-senha')
  
    if (teste1.type === 'password') {
      teste1.setAttribute('type', 'text')
      teste2.classList.replace('fa-eye', 'fa-eye-slash')
    }
    else {
      teste1.setAttribute('type', 'password')
      teste2.classList.replace('fa-eye-slash', 'fa-eye')
    }
  }

