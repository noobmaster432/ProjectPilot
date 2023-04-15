import { useCallback, useState } from "react";
import axios from "axios";

import useLoginModal from "../../hooks/useLoginModal";
import useRegisterModal from "../../hooks/useRegisterModal";

import Input from "./Input";
import Modal from "./Modal";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }

    loginModal.onClose();
    registerModal.onOpen();
  }, [isLoading, registerModal, loginModal]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      console.log({
        email,
        password,
      });

      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      console.log(res.data);

      if (res.status === 200) {
        setIsLoading(false);
        localStorage.setItem('loginData',JSON.stringify(res.data))

        toast.success("Login successful!");

        loginModal.onClose();
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  }, [loginModal, email, password, navigate]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
        required={true}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
        required={true}
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        First time using Project Pilot?{" "}
        <span
          onClick={onToggle}
          className="cursor-pointer hover:underline text-white"
        >
          Create an account
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      title="Login"
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      disabled={isLoading}
      actionLabel="Sign in"
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
