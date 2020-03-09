(function () {
  const filter   = document.getElementById('filter');
  const names    = document.querySelectorAll('.collection-item a');
  const wrappers = document.querySelectorAll('.wrapper');

  let counter;


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

    // Manage display of headers
    headerDisplay();
  }

  const headerDisplay = () => {
    // For each wrapper div
    wrappers.forEach(wrapper => {
      // Initially set header display to block
      wrapper.children[0].style.display = 'block';

      counter = 0;

      // Cycle through wrappers children and if child's display is 'none', increase counter
      Array.from(wrapper.children).forEach(child => {
        if (child.style.display === 'none') counter++;
      });

      // If display of all of the wrappers children is set to 'none' (except for the header),
      // hide the header
      if (counter === wrapper.children.length - 1) wrapper.children[0].style.display = 'none';
    });
  }


  filter.addEventListener('keyup', filterNames);
}())