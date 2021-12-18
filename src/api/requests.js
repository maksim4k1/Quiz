const URL = "http://localhost:1717";

export async function getData(url){
  const response = await fetch(`${URL}${url}`);

  return response;
}

export async function signIn(data){
  const response = await fetch(`${URL}/login`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  
  return response;
}

export async function signUp(data){
  const response = await fetch(`${URL}/signin`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  
  return response;
}

export async function logIn(token){
  const response = await fetch(`${URL}/me`, {
    method: "GET",
    headers: {
      'X-Auth': token
    }
  });
  
  return response;
}