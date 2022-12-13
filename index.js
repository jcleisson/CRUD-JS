// create a container element for the application
const app = document.createElement('div');
app.classList.add('app');

// create an element to display the list of items
const list = document.createElement('ul');
list.classList.add('list');

// create an element to add new items
const form = document.createElement('form');
form.classList.add('form');

// create an input field for the new item
const input = document.createElement('input');
input.classList.add('input');
input.placeholder = 'Add a new item';

// add the input field to the form
form.appendChild(input);

// add the form and list elements to the container
app.appendChild(form);
app.appendChild(list);

// add the app to the page
document.body.appendChild(app);
