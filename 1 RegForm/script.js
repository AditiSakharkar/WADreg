  const form = document.getElementById('registrationForm');
  
  form.addEventListener('submit', function () {
    
    const formData = new FormData(form);
    const username = formData.get('username');
    alert(`Registration successful! Welcome, ${username}!`);
    
  });