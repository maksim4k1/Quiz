import URL from "./requests";

export async function editProfileData(data){
  try{    
    const response = await fetch(`${URL}/me/edit`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
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

export async function updateScore(data){
  try{
    const response = await fetch(`${URL}/me/score`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
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