

"use client"
import { UserUpdateModal } from "@/app/components/UserUpdateModal";
import { authClient } from "@/lib/auth-client";
import { Card } from "@heroui/react";
import { Avatar } from "@heroui/react";



const profilepage = () => {

   
    const userData = authClient.useSession();
      const user =  userData.data?.user
     // console.log(user);
    return (
        <div>
            <Card className="max-w-96 mx-auto flex flex-col items-center mt-20 bg-blue-200">
                <Avatar>
                        <Avatar.Image
                         alt="John Doe" 
                        src={user?.image} />
                        <Avatar.Fallback>JD</Avatar.Fallback>
                      </Avatar>
                      <h2 className="text-xl font-bold"> Name : {user?.name}</h2>
                      <p className=" text-muted ">Email : {user?.email}</p>

                      <UserUpdateModal></UserUpdateModal>

            </Card>
        </div>
    );
};

export default profilepage;