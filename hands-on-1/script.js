var ARROW = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.62224 6.15044C2.52962 6.24715 2.45612 6.36209 2.40598 6.48865C2.35583 6.6152 2.33001 6.7509 2.33001 6.88794C2.33001 7.02498 2.35583 7.16067 2.40598 7.28722C2.45612 7.41378 2.52962 7.52872 2.62224 7.62543L9.229 14.5504C9.30255 14.6277 9.38992 14.689 9.48609 14.7308C9.58227 14.7726 9.68537 14.7941 9.7895 14.7941C9.89362 14.7941 9.99673 14.7726 10.0929 14.7308C10.1891 14.689 10.2764 14.6277 10.35 14.5504L16.9568 7.62543C17.1416 7.42945 17.2449 7.16476 17.2441 6.88919C17.2434 6.61361 17.1386 6.34956 16.9527 6.1547C16.7668 5.95983 16.5149 5.85001 16.252 5.84921C15.989 5.84841 15.7365 5.95671 15.5495 6.15044L9.78521 12.1834L4.02183 6.14144C3.83489 5.9485 3.5826 5.84111 3.32026 5.84279C3.05791 5.84448 2.80691 5.95511 2.62224 6.15044Z" fill="#4829AA"/></svg>';
console.log(ARROW);

// Insert function here that will create accordion

document.addEventListener("DOMContentLoaded", function () {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
      button.addEventListener('click', function () {
        const accordionItem = this.closest('.accordion-item');
        const accordionContent = accordionItem.querySelector('.accordion-content');
        
        // Toggle the 'active' class to show/hide the content
        accordionItem.classList.toggle('active');
      });
    });
  });
  