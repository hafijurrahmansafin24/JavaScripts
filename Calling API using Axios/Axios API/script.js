// Calling API using Axios -->>
console.clear();


// Getting a resource -->>
axios.get('https://jsonplaceholder.typicode.com/posts/1')
.then((res) => {
    console.log(res.data);
})
.catch((err) => {
    console.log(err);
})


// Creating a resource -->>
axios.post('https://jsonplaceholder.typicode.com/posts', {
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((res) => {
    console.log(res.data);
})
.catch((err) => {
    console.log(err);
})


// Updating a resource -->>
axios.put('https://jsonplaceholder.typicode.com/posts/1', {
    body: JSON.stringify({
        id: 1,
        title: 'fooMa',
        body: 'barMA',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((res) => {
    console.log(res.data);
})
.catch((err) => {
    console.log(err);
})


// Patching a resource -->>
axios.patch('https://jsonplaceholder.typicode.com/posts/1', {
    body: JSON.stringify({
        body: 'barMAN',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((res) => {
    console.log(res.data);
})
.catch((err) => {
    console.log(err);
})


// Delete a resource -->>
axios.delete('https://jsonplaceholder.typicode.com/posts/1')
.then((res) => {
    console.log(res.data);
})
.catch((err) => {
    console.log(err);
})
