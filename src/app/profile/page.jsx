'use client'
import { UpdateUserModalPage } from '@/components/UpdateUserModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';


const ProfilePage = () => {

    const userData = authClient.useSession();
      const user = userData.data?.user;
      console.log(user)

    return (
        <div>
            <Card className='max-w-96 mx-auto flex flex-col items-center border mt-5'>
                <Avatar className='h-20 w-20'
                                src={user?.image || "/avatar.png"}
                                name={user?.name || "U"}
                                size="sm"
                />

                <h2 className='text-xl font-bold'>{user?.name}</h2>
                <p className='text-muted'>{user?.email}</p>
                <UpdateUserModalPage></UpdateUserModalPage>
            </Card>
        </div>
    );
};

export default ProfilePage;