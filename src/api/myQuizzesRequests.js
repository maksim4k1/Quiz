import URL from "./requests"

export function getMyQuizzes(data){
  try{
    const response = fetch(`${URL}/myquizzes`, {
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