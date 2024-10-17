let options = {
    method: 'GET',
}

//The throw is a keyword is used to create
fetch('https://dummyapi.online/api/movies', options)
.then(response =>{
    if(!response.ok){
        throw new Error ('Network response was not ok'+response.statusText);
    }

    return response.json();
})
.then(data=>{
    console.log(data)
})
.catch(error=>{
    console.error('there was and error',error);
})