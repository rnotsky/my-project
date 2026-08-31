import { apiRequest } from "./api";


export async function getAdminUsers(){

    return await apiRequest(
        "/admin/users",
        {
            method:"GET",
        }
    );

}



export async function getAdminStats(){

    return await apiRequest(
        "/admin/stats",
        {
            method:"GET",
        }
    );

}



export async function deleteAdminUser(
    id:number
){

    return await apiRequest(
        `/admin/users/${id}`,
        {
            method:"DELETE",
        }
    );

}