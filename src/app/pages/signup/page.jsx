"use client";
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
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";


const signpupage = () => {
   const router = useRouter();

  
const onSubmit =async (e) =>{
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const image = e.target.image.value;
  //console.log({name,email,password,image});
  const {data,error} = await authClient.signUp.email({
        name,
        image,
        email,
        password
    });
    console.log({data,error});
   if(!error){
    router.push('/pages/login');
   }
  };


  const googlesignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
    callbackURL:'/'
  });
    
  }

  
  
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-default-50/50 px-4 py-12">
        <Card className="w-full max-w-md p-6 sm:p-8 shadow-large  rounded-2xl border border-gray-300 shadow shadow-stone-300
        bg-sky-300">
          <h1 className="text-center text-2xl sm:text-3xl font-bold text-default-900 mb-8">
            create an account
          </h1>

          <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
            <TextField isRequired name="name" type="text" className="w-full">
              <Label className="text-sm font-medium text-default-700 mb-1">
                Name
              </Label>
              <Input
                placeholder="Enter your name"
                variant="bordered"
                radius="lg"
              />
              <FieldError className="text-xs text-danger mt-1" />
            </TextField>

            <TextField isRequired name="image" type="text" className="w-full">
              <Label className="text-sm font-medium text-default-700 mb-1">
                Image URL
              </Label>
              <Input placeholder="Image URL" variant="bordered" radius="lg" />
              <FieldError className="text-xs text-danger mt-1" />
            </TextField>

            <TextField
              isRequired
              name="email"
              type="email"
              className="w-full"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label className="text-sm font-medium text-default-700 mb-1">
                Email
              </Label>
              <Input
                placeholder="john@example.com"
                variant="bordered"
                radius="lg"
              />
              <FieldError className="text-xs text-danger mt-1" />
            </TextField>

            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              className="w-full"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label className="text-sm font-medium text-default-700 mb-1">
                Password
              </Label>
              <Input
                placeholder="Enter your password"
                variant="bordered"
                radius="lg"
              />
              <Description className="text-xs text-default-400 mt-1">
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError className="text-xs text-danger mt-1" />
            </TextField>

            <div className="flex gap-3 mt-4 w-full sm:flex-row flex-col-reverse">
              <Button
                type="reset"
                variant="outline"
                color="default"
                radius="lg"
                
                className="w-full sm:w-1/2 font-medium"
              >
                Reset
              </Button>
              <Button
                type="submit"
                color="primary"
                radius="lg"
                className="w-full sm:w-1/2 font-semibold shadow-lg shadow-primary/20"
                startContent={<Check />}
              >
                Submit
              </Button>
            </div>
            <div>
              <p className="text-center">You have alray an account , <span className="text-blue-600"><Link  href={'/pages/login'}>login</Link></span></p>
              
              <p className="text-center p-5 font-bold">or</p>
              <Button onClick={googlesignIn} variant="outline" className={"w-full"}>
                {" "}
                <FcGoogle /> Login with google
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default signpupage;
