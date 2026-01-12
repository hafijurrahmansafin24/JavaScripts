console.clear();


const makeRequest = async (url, confiq) => {
    const res = await fetch(url, confiq);

    if(!res.ok) {
        const message = `Error: ${res.status}`;
        throw new Error(message);
    };

    const data = await res.json();
    return data;
};


// getData Method -->>
const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => {
        console.log(res);
    })

    .catch((err) => {
        console.log(err);
    })
};

getData();


// sendData Method -->>
const sendData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts', {
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
    .then((res) => {
        console.log(res);
    })

    .catch((err) => {
        console.log(err);
    })
};

sendData();


// updateData Method -->>
const updateData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'fooMA',
        body: 'barMA',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((res) => {
        console.log(res);
    })

    .catch((err) => {
        console.log(err);
    })
};

updateData();


// patchData Method -->>
const patchData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
        title: 'fooMAN',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((res) => {
        console.log(res);
    })

    .catch((err) => {
        console.log(err);
    })
};

patchData();


// deleteData Method -->>
const deleteData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
})
    .then((res) => {
        console.log(res);
    })

    .catch((err) => {
        console.log(err);
    })
};

deleteData();
