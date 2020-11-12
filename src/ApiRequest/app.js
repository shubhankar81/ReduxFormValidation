
export const url = "localhost:9090"

export const submitUserData = async (postdata) => {
    try {
    const response = await fetch(url+"/registeruser", postdata) // fetch("https://www.omdbapi.com/?apikey=7b8c171f&t=Fast");
    const data = await response.Json();
    return data;
    }
    catch(e){
        console.log(e)
    }
}

export const loginuserData = async (postdata) => {
    try {
    const response = await fetch(url+"/loginUser", postdata) // fetch("https://www.omdbapi.com/?apikey=7b8c171f&t=Fast");
    const data = await response.Json();
    return data;
    }
    catch(e){
        console.log(e)
    }
}
export const movieFetched = async (title) => {
    try {
    const response = await fetch("https://www.omdbapi.com/?apikey=7b8c171f&t="+ title) 
    const data = await response.json();
    return data;
    }
    catch(e){
        console.log(e)
    }
}