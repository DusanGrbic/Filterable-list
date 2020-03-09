(function () {
  const filter = document.getElementById('filter');
  const names = document.querySelectorAll('.collection-item a');


  const filterNames = () => {
    const input = filter.value.toLowerCase();
    
    // Cycle through names
    names.forEach(name => {
      // If name doesnt contain input, hide its parent li element. Otherwise show it
      name.parentElement.style.display = 
        name.textContent.toLowerCase().indexOf(input) === -1
          ? 'none'
          : 'block';
    });
  }


  filter.addEventListener('keyup', filterNames);
}())