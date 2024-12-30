import {
  Button,
  Card,
  Checkbox,
  Label,
  Spinner,
  TextInput,
} from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contextApi/AuthContext";
import useAxios from "../../services/useAxios";
import SocialLogin from "./SocialLogin";

export default function Create() {
  const [btnLoading, setBtnLoading] = useState(false);
  const { emailPasswordCreate, profileUpdate } = useContext(AuthContext);
  const api = useAxios();

  useEffect(() => {
    document.title = "Create an account | Assignora";
  }, []);

  const handleForm = async (e) => {
    setBtnLoading(true);
    e.preventDefault();

    const data = new FormData(e.target);
    const obj = Object.fromEntries(data.entries());

    // Create account:
    try {
      const result = await emailPasswordCreate(obj.email, obj.password);
      await profileUpdate({
        displayName: obj.name,
      });
      const res = await api.post("/auth/add-user", {
        name: result.user.displayName,
        uid: result.user.uid,
        email: result.user.email,
      });
      const payload = {
        name: res.data.data.name,
        uid: res.data.data.uid,
      };
      await api.post(`/auth/set-cookie`, payload);
      e.target.reset();
      setBtnLoading(false);
      return toast.success("Signup success");
    } catch (error) {
      setBtnLoading(false);
      return toast.error(error.code);
    }
  };

  return (
    <div className="mb-12">
      <Card className="max-w-sm mx-auto">
        <form onSubmit={handleForm} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your name" />
            </div>
            <TextInput
              id="name"
              name="name"
              type="text"
              placeholder="Full Name"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              type="email"
              name="email"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              placeholder="e.g., Password@#1234"
              id="password"
              name="password"
              type="password"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">
            {btnLoading && (
              <Spinner
                className="mr-1"
                aria-label="Alternate spinner button example"
                size="sm"
              />
            )}
            Create Account
          </Button>
          <p className="text-gray-500 text-sm text-center">
            Already have an account? <br />
            <Link to={"/auth/login"} className="underline">
              Login now
            </Link>
          </p>
        </form>
        <div className="divider">OR</div>
        <SocialLogin />
      </Card>
    </div>
  );
}
