// import {
//   Button,
//   Card,
//   Checkbox,
//   Label,
//   Spinner,
//   TextInput,
// } from "flowbite-react";
// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { Link } from "react-router-dom";
// import useAuth from "../../services/useAuth";
// import SocialLogin from "./SocialLogin";
// import axios from "axios";
// import { Helmet } from "react-helmet";

// export default function Login() {
//   const { emailPasswordLogin } = useAuth();
//   const [btnLoading, setBtnLoading] = useState(false);

//   const handleForm = async (e) => {
//     setBtnLoading(true);
//     e.preventDefault();
//     const data = new FormData(e.target);
//     const obj = Object.fromEntries(data.entries());
//     try {
//       await emailPasswordLogin(obj.email, obj.password);
//       const user = { email: obj.email };
//       axios.post("http://localhost:5000/jwt", user);
//       console.log(data);
//       setBtnLoading(false);
//       return toast.success("Signin success");
//     } catch (error) {
//       setBtnLoading(false);
//       return toast.error(error.code);
//     }
//   };

//   return (
//     <div>
//       <Helmet>
//         <title>Log In</title>
//       </Helmet>
//       <Card className="max-w-sm mx-auto">
//         <form onSubmit={handleForm} className="flex flex-col gap-4">
//           <div>
//             <div className="mb-2 block">
//               <Label htmlFor="email" value="Your email" />
//             </div>
//             <TextInput
//               id="email"
//               type="email"
//               name="email"
//               placeholder="name@flowbite.com"
//               required
//             />
//           </div>
//           <div>
//             <div className="mb-2 block">
//               <Label htmlFor="password" value="Your password" />
//             </div>
//             <TextInput id="password" type="password" name="password" required />
//           </div>
//           <div className="flex items-center gap-2">
//             <Checkbox id="remember" />
//             <Label htmlFor="remember">Remember me</Label>
//           </div>

//           <Button type="submit">
//             {" "}
//             {btnLoading && (
//               <Spinner
//                 className="mr-1"
//                 aria-label="Alternate spinner button example"
//                 size="sm"
//               />
//             )}{" "}
//             Login now
//           </Button>
//           <p className="text-gray-500 text-sm text-center">
//             Don't have an account? <br />
//             <Link to={"/auth/create"} className="underline">
//               Create now
//             </Link>
//           </p>
//         </form>
//         <div className="divider">OR</div>
//         <SocialLogin />
//       </Card>
//     </div>
//   );
// }

import React, { useState } from "react";
import {
  Button,
  Card,
  Checkbox,
  Label,
  Spinner,
  TextInput,
} from "flowbite-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import useAuth from "../../services/useAuth";
import SocialLogin from "./SocialLogin";

export default function Login() {
  const { emailPasswordLogin } = useAuth();
  const [btnLoading, setBtnLoading] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    setBtnLoading(true);

    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData.entries());

    try {
      // Authenticate user
      await emailPasswordLogin(email, password);

      // Request JWT token
      const { data } = await axios.post(
        "https://assignment-11-psi.vercel.app/jwt",
        { email }
      );
      if (data?.token) {
        // Store JWT in localStorage or cookies
        localStorage.setItem("authToken", data.token);
        toast.success("Login successful!");
      } else {
        throw new Error("Failed to retrieve token");
      }

      setBtnLoading(false);
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error?.response?.data?.message || error.message);
      setBtnLoading(false);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Log In</title>
      </Helmet>
      <Card className="max-w-sm mx-auto">
        <form onSubmit={handleForm} className="flex flex-col gap-4">
          <div>
            <Label htmlFor="email" className="mb-2 block">
              Your email
            </Label>
            <TextInput
              id="email"
              type="email"
              name="email"
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <Label htmlFor="password" className="mb-2 block">
              Your password
            </Label>
            <TextInput id="password" type="password" name="password" required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit" disabled={btnLoading}>
            {btnLoading && (
              <Spinner
                className="mr-1"
                aria-label="Loading spinner"
                size="sm"
              />
            )}
            Login now
          </Button>
          <p className="text-gray-500 text-sm text-center">
            Don't have an account?{" "}
            <Link to="/auth/create" className="underline">
              Create now
            </Link>
          </p>
        </form>
        <div className="divider">OR</div>
        <SocialLogin />
      </Card>
    </div>
  );
}
