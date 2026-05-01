
"use client";
import React from "react";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const SignInPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    

    const email = e.target.email.value;
    const password = e.target.password.value;

    //console.log({name, image, email, password})
    const {data, error}= await authClient.signIn.email({
        
        email:email,
        password:password,
        callbackURL: "/"
    })

    console.log({data, error})
    if(error){
      alert(error.message)
    }
    if(data){
      alert("signin successfully")
    }



  };

  

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="border w-96 py-8 px-6">
        <h2 className="text-center text-2xl font-bold mb-4">
          Signin Page
        </h2>

        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
                return "Enter a valid email";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="example@gmail.com" />
            <FieldError />
          </TextField>

          {/* Password (No validation now) */}
          <TextField isRequired name="password" type="password">
            <Label>Password</Label>
            <Input placeholder="Enter password" />
            <FieldError />
          </TextField>

          {/* Buttons */}
          <div className="flex gap-2">
            <Button type="submit">
              <Check />
              Signin
            </Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default SignInPage;