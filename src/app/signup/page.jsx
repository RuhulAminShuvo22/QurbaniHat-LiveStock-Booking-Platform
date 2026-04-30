// import React from 'react';

// const SignUpPage = () => {
//     return (
//         <div>
//             <h2>signup page</h2>
//         </div>
//     );
// };

// export default SignUpPage;

////////////////////////////////////////////

"use client";
import React from "react";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log(data); // ekhane tumi backend e pathaite parba
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

          {/* Password */}
          <TextField
            isRequired
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Min 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "1 uppercase required";
              }
              if (!/[0-9]/.test(value)) {
                return "1 number required";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter password" />
            <Description>
              At least 8 characters, 1 uppercase & 1 number
            </Description>
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