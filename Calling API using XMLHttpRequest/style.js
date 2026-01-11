// Calling API using XMLHttpRequest -->>
console.clear();


const makeRequest = (method, url, data) => {
    return new Promise ((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = () => {
        let data = xhr.response;
        console.log(xhr.status);
        console.log(xhr.statusText);
        console.log(xhr.responseURL);
        console.log(JSON.parse(data));
    }

    xhr.onerror = () => {
        console.log('Error is here');
    }

    xhr.send(JSON.stringify(data));
    });
}


const getData = () => {
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => {
        console.log(res);
    });
}


const sendData = () => {
    makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
    });
}


const updateData = () => {
    makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
        id: 1,
        title: 'fooMA',
        body: 'barMA',
        userId: 1,
    });
}


const updateSingleData = () => {
    makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
        title: 'This is chnaged',
    });
}


const deleteData = () => {
    makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1');
}


getData();
sendData();
updateData();
updateSingleData();
deleteData();
