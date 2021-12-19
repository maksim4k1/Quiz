const URL = "http://localhost:1717";

export async function getData(url){
  try{
    const response = await fetch(`${URL}${url}`);

    return response;
  } catch{
    return {
      ok: false
    };
  }
}

export async function signIn(data){
  try{
    const response = await fetch(`${URL}/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    return response;
  } catch{
    return {
      ok: false
    };
  }
}

export async function signUp(data){
  try{
    const response = await fetch(`${URL}/signin`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    return response;
  }
  catch{
    return {
      ok: false
    };
  }
}

export async function logIn(token){
  try{
    const response = await fetch(`${URL}/me`, {
      method: "GET",
      headers: {
        'X-Auth': token
      }
    });

    return response;
  } catch{
    return {
      ok: false
    };
  }
}