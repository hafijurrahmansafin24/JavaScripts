// Calling API using Fetch API -->>
console.clear();


// Getting a resource -->>
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then ((res) => {
    if (!res.ok) {
        const message = `Error: ${res.status}`;
        throw new Error (message);
    }
    return res.json();
})

.then ((res) => {
    console.log(res);
})

.catch ((err) => {
    console.log(err);
});


// Creating a resource -->>
fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})

.then ((res) => {
    if (!res.ok) {
        const message = `Error: ${res.status}`;
        throw new Error (message);
    }
    return res.json();
})

.then ((res) => {
    console.log(res);
})

.catch ((err) => {
    console.log(err);
});


// Updating a resource -->>
fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
        title: 'fooMA',
        body: 'barMA',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})

.then ((res) => {
    if (!res.ok) {
        const message = `Error: ${res.status}`;
        throw new Error (message);
    }
    return res.json();
})

.then ((res) => {
    console.log(res);
})

.catch ((err) => {
    console.log(err);
});


// Patching a resource -->>
fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
        title: 'fooMAN',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})

.then ((res) => {
    if (!res.ok) {
        const message = `Error: ${res.status}`;
        throw new Error (message);
    }
    return res.json();
})

.then ((res) => {
    console.log(res);
})

.catch ((err) => {
    console.log(err);
});


// Delete a resource -->>
fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
})

.then ((res) => {
    if (!res.ok) {
        const message = `Error: ${res.status}`;
        throw new Error (message);
    }
    return res.json();
})

.then ((res) => {
    console.log(res);
})

.catch ((err) => {
    console.log(err);
});
