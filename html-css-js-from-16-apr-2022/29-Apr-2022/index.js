const get = async (URL) => {
    try {
        const response = await fetch(URL);
        const data = await response.json();

        return data;
    } catch (e) {
        console.log('SOMETHING WENT WRONG');
    }
}

const post = async (URL, data) => {
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const responseData = await response.json();

        return responseData;
    } catch (e) {
        console.log('SOMETHING WENT WRONG');
    }
}

const put = async (URL, data) => {
    try {
        const response = await fetch(URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const responseData = await response.json();

        return responseData;
    } catch (e) {
        console.log('SOMETHING WENT WRONG');
    }
}

const patch = async (URL, data) => {
    try {
        const response = await fetch(URL, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const responseData = await response.json();

        return responseData;
    } catch (e) {
        console.log('SOMETHING WENT WRONG');
    }
}

const _delete = async (URL) => {
    try {
        const response = await fetch(URL, {
            method: 'DELETE'
        });
        const data = await response.json();

        return data;
    } catch (e) {
        console.log('SOMETHING WENT WRONG');
    }
}


const getComments = async () => {
    try {
        const comments = await get('https://jsonplaceholder.typicode.com/comments');

        for (let { email } of comments) {
            console.log(email);
        }
    } catch (e) {
        console.log('COULD NOT GET COMMENTS');
    }
}

const createComment = async () => {
    try {
        const didCreateComment = await post('https://jsonplaceholder.typicode.com/comments', {
            postId: 1,
            name: "id labore ex et quam laborum",
            email: "aniruddha@gmail.com",
            body: "a new comment"
        });

        console.log('CREATED COMMENT', didCreateComment);
    } catch (e) {
        console.log(e);
        console.log('COULD NOT CREATE A COMMENT');
    }
}

// write functions for put/patch & delete comment - Assignment (Date - 29 Apr 2022)

const putComment = async () => {
  try {
    const didPutComment = await put('https://jsonplaceholder.typicode.com/comments', {
      postId: 1,
      name: "id labore ex et quam laborum",
      email: "aniruddha@gmail.com",
      body: "a new comment"
    });
    
    console.log('COMMENT UPDATED', didPutComment);
  } catch (error) {
    console.log(e);
    console.log('COULD NOT UPDATED COMMENT');
  }
}