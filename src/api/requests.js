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

export default URL