"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
} from "lucide-react";

import {
  Users,
  Database,
  Ban,
  Trash2,
  Search,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  adminRequest
} from "@/lib/api";



export default function AdminDashboard() {
 const router = useRouter();

  const [users,setUsers] = useState<any[]>([]);


  const [stats,setStats] = useState({
    total_users:0,
    database:""
  });
  const [search,setSearch] = useState("");



  useEffect(()=>{

    fetchUsers();
    fetchStats();

  },[]);



  async function fetchUsers(){

    try{

      const data = await adminRequest(
        "/admin/users"
      );


      console.log(
        "REAL USERS:",
        data
      );


      setUsers(data);


    }
    catch(error){

      console.log(error);

    }

  }




  async function fetchStats(){

    try{

      const data = await adminRequest(
        "/admin/stats"
      );


      setStats(data);


    }
    catch(error){

      console.log(error);

    }

  }





  async function deleteUser(id:number){

    try{

      await adminRequest(
        `/admin/users/${id}`,
        {
          method:"DELETE"
        }
      );


      fetchUsers();


    }
    catch(error){

      console.log(error);

    }

  }
 const filteredUsers = users.filter((user) => {

  const value = search.toLowerCase();

  return (
    (user.email ?? "").toLowerCase().includes(value) ||
    (user.full_name ?? "").toLowerCase().includes(value) ||
    (user.provider ?? "").toLowerCase().includes(value) ||
    (user.is_admin ? "admin" : "user").includes(value)
  );

});


  return (
    
    <main
      className="
        min-h-screen
        w-full
        bg-[#070511]
        text-white
      "
    >

      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          pt-24
          pb-8
          sm:px-6
          lg:px-8
        "
      >


        {/* Header */}

        <header
          className="
            mb-8
            flex
            flex-col
            gap-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[180px]" />


          <div>

            <h1
              className="
                text-3xl
                font-bold
              "
            >
              Rnotsky Admin Dashboard
            </h1>


            <p
              className="
                mt-2
                text-gray-400
              "
            >
              Manage users and monitor your platform.
            </p>

          </div>


        <button
  onClick={() => router.push("/")}
  className="
    flex
    items-center
    justify-center
    gap-2
    rounded-xl
    border
    border-white/10
    bg-white/5
    px-5
    py-3
    transition
    hover:bg-white/10
  "
>

  <ArrowLeft size={18}/>

  Back Home

</button>


        </header>



        {/* Stats */}

        <section
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            xl:grid-cols-5
          "
        >

          <StatsCard
            icon={<Users />}
            title="Total Users"
            value={String(stats.total_users)}
          />



          <StatsCard
            icon={<Database />}
            title="Database"
            value={stats.database}
          />


        </section>




        {/* Users */}

        <section
          className="
            mt-8
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
          "
        >


          <div
            className="
              border-b
              border-white/10
              p-6
            "
          >

           <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

  <h2
    className="
      text-xl
      font-semibold
    "
  >
    User Management
  </h2>


  <div
    className="
      flex
      items-center
      gap-3
      rounded-xl
      border
      border-white/10
      bg-black/20
      px-4
      py-2
      sm:w-[320px]
    "
  >

    <Search 
      size={18}
      className="text-gray-400"
    />


    <input
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      placeholder="Search users or admins..."
      className="
        w-full
        bg-transparent
        outline-none
        text-sm
        text-white
        placeholder:text-gray-500
      "
    />

  </div>

</div>


          </div>




          <div
            className="
              overflow-x-auto
            "
          >

            <table
              className="
                w-full
                min-w-[700px]
              "
            >

              <thead>

                <tr
                  className="
                    border-b
                    border-white/10
                    text-left
                    text-sm
                    text-gray-400
                  "
                >

                  <th className="p-5">
                    ID
                  </th>

                  <th className="p-5">
                    Email
                  </th>
                  <th className="p-5">
                     Role
                  </th>

                  <th className="p-5">
                    Status
                  </th>

                  <th className="p-5">
                    Actions
                  </th>

                </tr>

              </thead>



              <tbody>

                {filteredUsers.map((user)=>(

                  <tr
                    key={user.id}
                    className="
                      border-b
                      border-white/10
                    "
                  >

                    <td className="p-5">
                      {user.id}
                    </td>


                    <td className="p-5">
                      {user.email}
                    </td>
<td className="p-5">
  <span
    className={
      user.is_admin
        ? "rounded-full bg-purple-500/20 px-3 py-1 text-purple-300 text-sm"
        : "rounded-full bg-blue-500/20 px-3 py-1 text-blue-300 text-sm"
    }
  >
    {user.is_admin ? "Admin" : "User"}
  </span>
</td>

                    <td className="p-5">

                      <span
                        className="
                          rounded-full
                          bg-green-500/10
                          px-3
                          py-1
                          text-sm
                          text-green-300
                        "
                      >
                        {user.is_active ? "Active" : "Blocked"}
                      </span>

                    </td>



                    <td className="p-5">

                      <div
                        className="
                          flex
                          gap-3
                        "
                      >

                        <button
                          className="
                            flex
                            items-center
                            gap-2
                            rounded-lg
                            bg-red-500/10
                            px-3
                            py-2
                            text-sm
                            text-red-300
                            hover:bg-red-500/20
                          "
                        >

                          <Ban size={16}/>

                          Ban

                        </button>


                        <button
                          onClick={()=>deleteUser(user.id)}

                          className="
                            flex
                            items-center
                            gap-2
                            rounded-lg
                            bg-white/10
                            px-3
                            py-2
                            text-sm
                            hover:bg-white/20
                          "
                        >

                          <Trash2 size={16}/>

                          Delete

                        </button>


                      </div>

                    </td>


                  </tr>

                ))}


              </tbody>


            </table>


          </div>


        </section>



      </div>


    </main>
  );
}





function StatsCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title:string;
  value:string;
}) {


  return (

    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-5
        backdrop-blur-xl
      "
    >

      <div
        className="
          mb-4
          text-purple-300
        "
      >
        {icon}
      </div>


      <p
        className="
          text-sm
          text-gray-400
        "
      >
        {title}
      </p>


      <h3
        className="
          mt-2
          text-2xl
          font-bold
        "
      >
        {value}
      </h3>


    </div>

  );
}