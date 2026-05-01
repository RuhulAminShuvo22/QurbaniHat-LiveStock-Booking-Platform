


"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { GrGoogle } from "react-icons/gr";

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


  const handleGoogleSignIn = async ()=> {
        await authClient.signIn.social({
            provider: 'google'
        })
  }

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
        <p></p>

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
        <p className="text-center">Or</p>
        <Button onClick={handleGoogleSignIn} variant="outline" className={'w-full'}><GrGoogle></GrGoogle>Sign In With Google</Button>
      </div>
    </div>
  );
};

export default SignInPage;