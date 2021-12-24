import URL from "./requests"

export async function getMyQuizzes(data){
  try{
    const response = await fetch(`${URL}/myquizzes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    return response;
  } catch{
    return {
      ok: false
    }
  }
}

export async function getMyQuiz(data){
  try{
    const response = await fetch(`${URL}/myquiz/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    return response;
  } catch{
    return {
      ok: false
    }
  }
}

export async function createNewQuiz(data){
  try{
    const response = await fetch(`${URL}/myquiz/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  
    return response;
  } catch{
    return {
      ok: false
    }
  }
}

export async function deleteMyQuiz(id){
  try{
    const response = await fetch(`${URL}/myquiz/delete/${id}`, {
      method: "DELETE"
    });
  
    return response;
  } catch{
    return {
      ok: false
    }
  }
}