addEventListener("DOMContentLoaded", (event) => {

    let toDoListArray = [];
  // ui variables
  const form = document.querySelector(".form"); 
  const input = form.querySelector(".form__input");
  const ul = document.querySelector(".toDoList"); 

    // event listeners
  form.addEventListener('submit', e => {
    // prevent default behaviour - Page reload
    e.preventDefault();
    // give item a unique ID
    let itemId = String(Date.now());
    // get/assign input value
    let toDoItem = input.value;
    //pass ID and item into functions
    addItemToDOM(itemId , toDoItem);
    addItemToArray(itemId, toDoItem);
    // clear the input box. (this is default behaviour but we got rid of that)
    input.value = '';
  });
  
  function addItemToDOM(itemId, toDoItem) {
    if (toDoItem.trim().length === 0) {
      alert("nah");
    } else {
      const li = document.createElement('li');
      li.innerText = toDoItem;
      li.setAttribute('data-id', itemId); // Set the data-id attribute
      ul.appendChild(li);
    }
  }

  ul.addEventListener("click", e =>{
    let id = e.target.getAttribute('data-id')
    if (!id) return // user clicked in something else      
    //pass id through to functions
    removeItemFromDOM(id);
    removeItemFromArray(id);
  })

  function addItemToArray(itemId,toDoItem){
    // add item to array as an object with an ID so we can find and delete it later
    toDoListArray.push({itemId, toDoItem});
  }

  

  function removeItemFromDOM(id){
    var li = document.querySelector('[data-id="' + id + '"]');
    // remove list item
    ul.removeChild(li);
  }

  function removeItemFromArray(id) {
    // create a new toDoListArray with all li's that don't match the ID
    toDoListArray = toDoListArray.filter(item => item.itemId !== id);
    console.log(toDoListArray);
  }

});