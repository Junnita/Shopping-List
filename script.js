document.addEventListener('DOMContentLoaded', function() {
    const shoppingForm = document.getElementById('shopping-form');
    const shoppingList = document.getElementById('shopping-list');
    const clearButton = document.getElementById('clear-button');
    const markButton = document.getElementById('mark-button');
    const unmarkButton = document.getElementById('unmark-button');
  
    // Add item to the list
    shoppingForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const itemInput = document.getElementById('item');
      const itemName = itemInput.value.trim();
      if (itemName !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = itemName;
        shoppingList.appendChild(listItem);
        itemInput.value = '';
      }
    });document.addEventListener('DOMContentLoaded'), function() {
      const shoppingForm = document.getElementById('shopping-form');
      const shoppingList = document.getElementById('shopping-list');
      const clearButton = document.getElementById('clear-button');
      const markButton = document.getElementById('mark-button');
      let allItemsMarked = false;
    
      // Function to handle form sub
        markButton.classList.remove('active');
      }
    
      function markPurchased() {
        const items = shoppingList.getElementsByTagName('li');
        allItemsMarked = !allItemsMarked;
    
        if (allItemsMarked) {
          for (let item of items) {
            item.classList.add('completed');
          }
          markButton.classList.add('active');
        } else {
          for (let item of items) {
            item.classList.remove('completed');
          }
          markButton.classList.remove('active');
        }
      }
    
      shoppingForm.addEventListener('submit', addItem);
      clearButton.addEventListener('click', clearList);
      markButton.addEventListener('click', markPurchased);
    ;
        markButton.classList.remove('active');
      
    
      function markPurchased() {
        const items = shoppingList.getElementsByTagName('li');
        allItemsMarked = !allItemsMarked;
    
        if (allItemsMarked) {
          for (let item of items) {
            item.classList.add('completed');
          }
          markButton.classList.add('active');
        } else {
          for (let item of items) {
            item.classList.remove('completed');
          }
          markButton.classList.remove('active');
        }
      }
    
      shoppingForm.addEventListener('submit', addItem);
      clearButton.addEventListener('click', clearList);
      markButton.addEventListener('click', markPurchased);
    
          const newItem = document.createElement('li');
          newItem.textContent = newItemText;
    
          markButton.classList.remove('active');
        
      
        function markPurchased() {
          const items = shoppingList.getElementsByTagName('li');
          allItemsMarked = !allItemsMarked;
      
          if (allItemsMarked) {
            for (let item of items) {
              item.classList.add('completed');
            }
            markButton.classList.add('active');
          } else {
            for (let item of items) {
              item.classList.remove('completed');
            }
            markButton.classList.remove('active');
          }
        }
      
        shoppingForm.addEventListener('submit', addItem);
        clearButton.addEventListener('click', clearList);
        markButton.addEventListener('click', markPurchased);
      
        const items = shoppingList.getElementsByTagName('li');
        allItemsMarked = !allItemsMarked;
    
        markButton.classList.remove('active');
      
    
      function markPurchased() {
        const items = shoppingList.
        markButton.classList.remove('active');
      }
    
      function markPurchased() {
        const items = shoppingList.getElementsByTagName('li');
        allItemsMarked = !allItemsMarked;
    
        if (allItemsMarked) {
          for (let item of items) {
            item.classList.add('completed');
          }
          markButton.classList.add('active');
        } else {
          for (let item of items) {
            item.classList.remove('completed');
          }
          markButton.classList.remove('active');
        }
      }
    
      shoppingForm.addEventListener('submit', addItem);
      clearButton.addEventListener('click', clearList);
      markButton.addEventListener('click', markPurchased);
    {
            item.classList.remove('completed');
          }
          markButton.classList.remove('active');
        
      
      markButton.classList.remove('active');
    
    
    function markPurchased() {
      const items = shoppingList.getElementsByTagName('li');
      allItemsMarked = !allItemsMarked;
    
      if (allItemsMarked) {
        for (let item of items) {
          item.classList.add('completed');
        }
        markButton.classList.add('active');
      } else {
        for (let item of items) {
          item.classList.remove('completed');
        }
        markButton.classList.remove('active');
      }
    }
    
    shoppingForm.addEventListener('submit', addItem);
    clearButton.addEventListener('click', clearList);
    markButton.addEventListener('click', markPurchased);
    
      shoppingForm.addEventListener('submit', addItem);
      clearButton.addEventListener('click', clearList);
      markButton.addEventListener('click', markPurchased);
     
    
  
    // Clear the list
    clearButton.addEventListener('click', function() {
      shoppingList.innerHTML = '';
    });
  
    // Mark all items as purchased
    markButton.addEventListener('click', function() {
      const items = shoppingList.getElementsByTagName('li');
      for (let item of items) {
        item.classList.add('purchased');
      }
    });
  
    // Unmark all items as purchased
    unmarkButton.addEventListener('click', function() {
      const items = shoppingList.getElementsByTagName('li');
      for (let item of items) {
        item.classList.remove('purchased');
      }
    });
  });