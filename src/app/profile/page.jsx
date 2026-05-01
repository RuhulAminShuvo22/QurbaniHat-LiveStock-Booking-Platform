// 'use client'
// import { UpdateUserModalPage } from '@/components/UpdateUserModal';
// import { authClient } from '@/lib/auth-client';
// import { Avatar, Card } from '@heroui/react';
// import { redirect } from 'next/dist/server/api-utils';


// const ProfilePage = () => {

//     const userData = authClient.useSession();
//       const user = userData.data?.user;
//       //console.log(user)

//       if(!user){
//         redirect('/signin')
//       }

//     return (
//         <div>
//             <Card className='max-w-96 mx-auto flex flex-col items-center border mt-5'>
//                 <Avatar className='h-20 w-20'
//                                 src={user?.image || "/avatar.png"}
//                                 name={user?.name || "U"}
//                                 size="sm"
//                 />

//                 <h2 className='text-xl font-bold'>{user?.name}</h2>
//                 <p className='text-muted'>{user?.email}</p>
//                 <UpdateUserModalPage></UpdateUserModalPage>
//             </Card>
//         </div>
//     );
// };

// export default ProfilePage;

'use client'

import { UpdateUserModalPage } from '@/components/UpdateUserModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProfilePage = () => {
    const router = useRouter();

    const userData = authClient.useSession();
    const user = userData.data?.user;

    useEffect(() => {
        if (!user && !userData.isPending) {
            router.push('/signin');
        }
    }, [user, userData.isPending, router]);

    if (userData.isPending) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <Card className='max-w-96 mx-auto flex flex-col items-center border mt-5'>
                <Avatar
                    className='h-20 w-20'
                    src={user?.image || "/avatar.png"}
                    name={user?.name || "U"}
                    size="sm"
                />

                <h2 className='text-xl font-bold'>{user?.name}</h2>
                <p className='text-muted'>{user?.email}</p>

                <UpdateUserModalPage />
            </Card>
        </div>
    );
};

export default ProfilePage;