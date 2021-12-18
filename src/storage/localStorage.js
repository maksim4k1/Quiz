export function setProfileData(token, data){
  localStorage.setItem("profileData", JSON.stringify(data));
  localStorage.setItem("token", token);
}

export function getToken(){
  return localStorage.getItem("token") || null;
}

export function getProfileData(){
  const data = localStorage.getItem("profileData");
  if(data){
    return JSON.parse(data);
  } else{
    return null;
  }
}

export function deleteProfileData(){
  localStorage.removeItem("token");
  localStorage.removeItem("profileData");
}