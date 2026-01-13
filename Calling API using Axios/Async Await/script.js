// Calling API using Async Await -->>
console.clear();


const makeRequest = async(confiq) => {
    return await axios(confiq);
};


// getData Method -->>
const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts')
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
    makeRequest({ url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'POST',
        data: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
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
    makeRequest({ url: 'https://jsonplaceholder.typicode.com/posts/1',
        method: 'PUT',
        data: JSON.stringify({
            id: 1,
            title: 'fooMA',
            body: 'barMA',
            userId: 1,
        }),
    })
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    })
};
updateData();


// patchData Method -->>
const patchData = () => {
    makeRequest({ url: 'https://jsonplaceholder.typicode.com/posts/1',
        method: 'PATCH',
        data: JSON.stringify({
            title: 'fooMAN',
        }),
    })
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    })
};
patchData();


// deleteData Method -->>
const deleteData = () => {
    makeRequest({ url: 'https://jsonplaceholder.typicode.com/posts/1',
        method: 'DELETE',
    })
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    })
};
deleteData();
