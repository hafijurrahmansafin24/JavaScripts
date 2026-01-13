// Calling API using Ajax Jquery -->>
console.clear();

const makeRequest = async (url, method, data) => {
    try {
        const result = await $.ajax({
        url: url,
        method: method,
        data: data,

    });
    return result;
    } catch(err) {
        console.log(err);
    }
};


// getData Method -->>
const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'GET')
    .then((res) => {
        console.log(res);
    });
};
getData();


// sendData Method -->>
const sendData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts', 'POST', 
    {
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
    .then((res) => {
        console.log(res);
    });
};
sendData();


// updateData Method -->>
const updateData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'PUT', 
    {
        id: 1,
        title: 'fooMA',
        body: 'barMA',
        userId: 1,
    })
    .then((res) => {
        console.log(res);
    });
};
updateData();


// patchData Method -->>
const patchData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'PATCH', 
    {
        body: 'barMAN',
    })
    .then((res) => {
        console.log(res);
    });
};
patchData();


// deleteData Method -->>
const deleteData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/1', 'DELETE')
    .then((res) => {
        console.log(res);
    });
};
deleteData();
