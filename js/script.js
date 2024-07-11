
// JavaScript code
document.addEventListener('DOMContentLoaded', (event) => {
    // Function to show the iframe and .fr
    function showIframeAndFr(src, id) {
      const iframe = document.querySelector('iframe[name="frame"]');
      const fr = document.querySelector('.fr');
      fr.classList.add('visible');
      iframe.classList.add('visible');
      iframe.src = src;
    }
  
    // Function to hide the iframe and .fr
    function hideIframeAndFr(id) {
      const iframe = document.querySelector('iframe[name="frame"]');
      const fr = document.querySelector('.fr');
      // Delay hiding to check if the mouse is still over the related area or iframe
      setTimeout(() => {
        if (!document.querySelector(`#${id}:hover`) && !iframe.matches(':hover')) {
          fr.classList.remove('visible');
          iframe.classList.remove('visible');
          iframe.src = '';
        }
      },); // Delay time in milliseconds
    }
  
    // Add event listeners to all area elements
    document.querySelectorAll('area[target="frame"]').forEach(area => {
      const id = area.id;
      area.addEventListener('mouseover', () => showIframeAndFr(area.href, id));
      area.addEventListener('mouseout', () => hideIframeAndFr(id));
    });
  
    // Prevent hiding when hovering over the iframe itself
    document.querySelector('iframe[name="frame"]').addEventListener('mouseover', () => {
      const fr = document.querySelector('.fr');
      fr.classList.add('visible');
    });
  });
  





document.addEventListener('DOMContentLoaded', (event) => {
  const iframe = document.querySelector('iframe[name="frame"]');
  const fr = document.querySelector('.fr');
  const header = document.querySelector('header');

  // Function to position and show the iframe and .fr near the upper edge of the mouse cursor
  function positionAndShowElements(e) {
    const posX = e.pageX;
    const posY = e.pageY;

    // Calculate the potential top position of the fr element
    let topPosition = posY - fr.offsetHeight;
    
    // Check if the top position would overlap with the header
    if (topPosition < header.offsetHeight) {
      // If it would overlap, position the fr below the mouse cursor's edge
      topPosition = posY + 10; // You can adjust the offset as needed
    }

    // Position the .fr element
    fr.style.top = `${topPosition}px`;
    fr.style.left = `${posX}px`;
    fr.classList.add('visible');

    // Position the iframe inside the .fr element
    iframe.classList.add('visible');
  }

  // Function to hide the iframe and .fr
  function hideElements() {
    fr.classList.remove('visible');
    iframe.classList.remove('visible');
    iframe.src = '';
  }

  // Add event listeners to all area elements
  document.querySelectorAll('area[target="frame"]').forEach(area => {
    area.addEventListener('mouseover', (e) => {
      positionAndShowElements(e);
      iframe.src = area.getAttribute('href');
    });
    area.addEventListener('mouseout', hideElements);
  });

  // Prevent hiding when hovering over the iframe itself
  iframe.addEventListener('mouseover', () => {
    fr.classList.add('visible');
  });

  iframe.addEventListener('mouseout', hideElements);
});

