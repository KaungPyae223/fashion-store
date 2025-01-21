import { useRouter } from "next/navigation";
import reactUseCookie from "react-use-cookie";
import toast from "react-hot-toast";
import { login } from "@/admin-side/services/login";
import { tailspin } from "ldrs";
import { useRef, useState } from "react";

export const useSignIn = () => {
  tailspin.register();
  const Router = useRouter();

  const [loading, isLoading] = useState<boolean>(false);
  const [Token, setToken] = reactUseCookie("user_token");

  const passwordRef = useRef();

  const handleSignIn = async () => {
    isLoading(true);

    const logInData = {
      email: email,
      password: passwordRef.current.value,
    };

    const res = await login(logInData);
    const json = await res.json();

    if (json.status === 200) {
      toast.success("Log In Successful");
      setToken(json.token);

      Router.back();
    } else {
      toast.error(json.message);
    }
  };

  return {
    handleSignIn,
    loading,
    passwordRef,
  };
};
