
// "use client";
// import React from "react";
// import { Check } from "@gravity-ui/icons";
// import {
//   Button,
//   Card,
//   FieldError,
//   Form,
//   Input,
//   Label,
//   TextField,
// } from "@heroui/react";
// import { authClient } from "@/lib/auth-client";

// const SignInPage = () => {
//   const onSubmit = async (e) => {
//     e.preventDefault();

    

//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     //console.log({name, image, email, password})
//     const {data, error}= await authClient.signIn.email({
        
//         email:email,
//         password:password,
//         callbackURL: "/"
//     })

//     console.log({data, error})
//     if(error){
//       alert(error.message)
//     }
//     if(data){
//       alert("signin successfully")
//     }



//   };

  

//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <Card className="border w-96 py-8 px-6">
//         <h2 className="text-center text-2xl font-bold mb-4">
//           Signin Page
//         </h2>

//         <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          

//           {/* Email */}
//           <TextField
//             isRequired
//             name="email"
//             type="email"
//             validate={(value) => {
//               if (
//                 !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
//               ) {
//                 return "Enter a valid email";
//               }
//               return null;
//             }}
//           >
//             <Label>Email</Label>
//             <Input placeholder="example@gmail.com" />
//             <FieldError />
//           </TextField>

//           {/* Password (No validation now) */}
//           <TextField isRequired name="password" type="password">
//             <Label>Password</Label>
//             <Input placeholder="Enter password" />
//             <FieldError />
//           </TextField>

//           {/* Buttons */}
//           <div className="flex gap-2">
//             <Button type="submit">
//               <Check />
//               Signin
//             </Button>
//             <Button type="reset" variant="secondary">
//               Reset
//             </Button>
//           </div>
//         </Form>
//       </Card>
//     </div>
//   );
// };

// export default SignInPage;



////////////////////////////////////////////////////////////

"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const SignInPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginFunc = async (data) => {
    console.log(data, "data");

    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });

    console.log(res, error);

    if (error) {
      alert(error.message);
    }

    if (res) {
      alert("Signin Successfully");
    }
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6">
          SignIn Your Account
        </h2>

        <form
          className="space-y-4"
          onSubmit={handleSubmit(handleLoginFunc)}
        >

          {/* Email */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              Email Address
            </legend>

            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Type your email"
              {...register("email", {
                required: "Email field is required",
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email.message}
              </p>
            )}
          </fieldset>

          {/* Password */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              Password
            </legend>

            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Type your password"
              {...register("password", {
                required: "Password field is required",
              })}
            />

            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
          </fieldset>

          {/* Button */}
          <button
            type="submit"
            className="btn w-full bg-slate-800 text-white hover:bg-slate-700"
          >
            SignIn
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-5 text-sm text-center">
          Do Not Have An Account ?{" "}
          <Link
            href="/signup"
            className="text-blue-500 font-medium"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;