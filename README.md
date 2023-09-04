# Cors proxy server

A simple server developed using express & nodejs. A proxy server receives requests from a web application and forwards them to the API server. 


## Usage/Examples
Using axios for making api call. fetch should also work.
```javascript
axios({
    url: "https://cors-hl83.onrender.com/",
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    data: {
        url: "https://jsonplaceholder.typicode.com/comments",
        method: "GET",
        params: { postId: 1 },
        headers: { key: value },
        data: "Data in JSON format"
    },
}).catch((e) => e)
    .then((res) => {
        console.log("response from node", res);
    });
};
```

