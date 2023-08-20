fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    const names = data.map(user => user.name);
    console.log(names);
  });