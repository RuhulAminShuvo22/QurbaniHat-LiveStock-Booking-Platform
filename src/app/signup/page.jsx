
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

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    // const formData = new FormData(e.target);
    // const data = Object.fromEntries(formData);

    // console.log(data);

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    //console.log({name, image, email, password})
    const {data, error}= await authClient.signUp.email({
        name:name,
        image:image,
        email:email,
        password:password,
        callbackURL: "/"
    })

    console.log({data, error})



  };

  

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="border w-96 py-8 px-6">
        <h2 className="text-center text-2xl font-bold mb-4">
          Signup Page
        </h2>

        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          {/* Name */}
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>

          {/* Image URL */}
          <TextField isRequired name="image" type="text">
            <Label>Image URL</Label>
            <Input placeholder="Enter image URL" />
            <FieldError />
          </TextField>

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
              Submit
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

export default SignUpPage;