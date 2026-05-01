"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b px-2">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">QurbaniHat</h3>
        </div>

        {/* Nav Links */}
        <ul className="flex items-center gap-5 text-sm">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/all-animals">All Animals</Link></li>
          <li><Link href="/tips">Qurbani Tips</Link></li>
          <li><Link href="/profile">Profile</Link></li>
        </ul>

        {/* Auth Section */}
        <div className="flex gap-4 items-center">

          {!user && (
            <ul className="flex items-center text-sm gap-3">
              <li><Link href="/signup">SignUp</Link></li>
              <li><Link href="/signin">SignIn</Link></li>
            </ul>
          )}

          {user && (
            <div className="flex items-center gap-3">

              {/* Avatar (SAFE VERSION) */}
              <Avatar
                src={user?.image || "/avatar.png"}
                name={user?.name || "U"}
                size="sm"
              />

              {/* SignOut */}
              <Button
                onClick={handleSignOut}
                size="sm"
                color="danger"
              >
                SignOut
              </Button>

            </div>
          )}

        </div>

      </nav>
    </div>
  );
};

export default Navbar;

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { authClient } from "@/lib/auth-client";

// const Navbar = () => {

//   const { data: session, isPending } = authClient.useSession();

//   const user = session?.user;

//   return (
//     <div className="border-b px-2">
//       <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

//         {/* Logo */}
//         <div className="flex gap-2 items-center">
//           <Image
//             src={"/logo.png"}
//             alt="logo"
//             loading="eager"
//             width={30}
//             height={30}
//             className="object-cover h-auto w-auto"
//           />

//           <h3 className="font-black text-lg">
//             QurbaniHat
//           </h3>
//         </div>

//         {/* Nav Links */}
//         <ul className="flex items-center gap-5 text-sm">

//           <li>
//             <Link href="/">Home</Link>
//           </li>

//           <li>
//             <Link href="/all-animals">
//               All Animals
//             </Link>
//           </li>

//           <li>
//             <Link href="/tips">
//               Qurbani Tips
//             </Link>
//           </li>

//           <li>
//             <Link href="/profile">
//               Profile
//             </Link>
//           </li>

//         </ul>

//         {/* Auth Section */}
//         <div className="flex gap-4 items-center">

//           {isPending ? (

//             <span className="loading loading-spinner loading-md"></span>

//           ) : user ? (

//             <div className="flex items-center gap-3">

//               {/* Username */}
//               <h2 className="font-medium text-sm">
//                 Hello, {user?.name || "User"}
//               </h2>

//               {/* Avatar */}
//               <Image
//                 src={
//                   user?.image?.startsWith("http")
//                     ? user.image
//                     : "/avatar.png"
//                 }
//                 alt="user"
//                 width={40}
//                 height={40}
//                 className="rounded-full border object-cover w-10 h-10"
//               />

//               {/* SignOut Button */}
//               <button
//                 onClick={async () => await authClient.signOut()}
//                 className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
//               >
//                 SignOut
//               </button>

//             </div>

//           ) : (

//             <ul className="flex items-center text-sm gap-3">

//               <li>
//                 <Link href="/signup">
//                   SignUp
//                 </Link>
//               </li>

//               <li>
//                 <Link href="/signin">
//                   SignIn
//                 </Link>
//               </li>

//             </ul>

//           )}

//         </div>

//       </nav>
//     </div>
//   );
// };

// export default Navbar;




