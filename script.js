ocument.addEventListener('DOMContentLoaded'), function() {
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
   
  