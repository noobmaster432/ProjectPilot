import axios from "axios";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import OTPInput, { ResendOTP } from "otp-input-react";

import useRegisterModal2 from "../../hooks/useRegisterModal2";

import Modal from "./Modal";
import useRegisterModal from "../../hooks/useRegisterModal";
import useLoginModal from "../../hooks/useLoginModal";

const RegisterModal2 = () => {
  const registerModal2 = useRegisterModal2();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const [otp, setOtp] = useState("");
  
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      const res = await axios.post("http://localhost:5000/api/auth/verifyotp", {
        email: registerModal.email,
        otp
      });

      console.log(res.data);

      if (res.status === 200) {
        setIsLoading(false);

        toast.success("Account Verified successfully!");

        registerModal2.onClose();
        loginModal.onOpen();
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  }, [registerModal2, otp, registerModal.email, loginModal]);

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
