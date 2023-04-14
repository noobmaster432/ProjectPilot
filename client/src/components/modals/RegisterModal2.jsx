// import axios from "axios";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import OTPInput, { ResendOTP } from "otp-input-react";

import useRegisterModal2 from "../../hooks/useRegisterModal2";

import Modal from "./Modal";

const RegisterModal2 = () => {
  const registerModal2 = useRegisterModal2();

  const [otp, setOtp] = useState("");
  
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      // await axios.post("/api/register", {
      //   email,
      //   password,
      //   name,
      //   username,
      // });

      setIsLoading(false);

      toast.success("Account created successfully!");

      // signIn("credentials", {
      //   email,
      //   password,
      // });

      registerModal2.onClose();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  }, [registerModal2]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <OTPInput
        value={otp}
        onChange={setOtp}
        autoFocus
        OTPLength={6}
        otpType="number"
        disabled={false}
        className="mx-auto text-black rounded-md"
      />
      <ResendOTP onResendClick={() => console.log("Resend clicked")} className="mx-20" />
    </div>
  );

  return (
    <Modal
      title="Verify account"
      isOpen={registerModal2.isOpen}
      onClose={registerModal2.onClose}
      onSubmit={onSubmit}
      disabled={isLoading}
      actionLabel="Verify"
      body={bodyContent}
    />
  );
};

export default RegisterModal2;
