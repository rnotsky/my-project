// frontend/src/lib/api.ts


const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://127.0.0.1:8000";




// ===============================
// COMMON REQUEST HANDLER
// ===============================

async function request(
  endpoint: string,
  options: RequestInit = {}
) {


  const token =
    typeof window !== "undefined"
      ? localStorage.getItem(
          "access_token"
        )
      : null;



  const headers =
    new Headers({

      "Content-Type":
      "application/json",

    });




  // Merge custom headers

  if(options.headers){

    const customHeaders =
      new Headers(
        options.headers
      );


    customHeaders.forEach(
      (value,key)=>{

        headers.set(
          key,
          value
        );

      }
    );

  }




  // Attach JWT token

  if(token){

    headers.set(
      "Authorization",
      `Bearer ${token}`
    );

  }




  const response =
    await fetch(

      `${API_URL}${endpoint}`,

      {

        ...options,

        headers,

      }

    );





  const data =
    await response.json()
    .catch(
      ()=>null
    );





  if(!response.ok){

    throw new Error(

      data?.detail ||
      "Something went wrong"

    );

  }





  return data;


}







// ===============================
// NORMAL API REQUEST
// ===============================

export async function apiRequest(
  endpoint:string,
  options:RequestInit = {}
){

  return request(
    endpoint,
    options
  );

}







// ===============================
// ADMIN API REQUEST
// ===============================

export async function adminRequest(
  endpoint:string,
  options:RequestInit = {}
){

  return request(
    endpoint,
    options
  );

}