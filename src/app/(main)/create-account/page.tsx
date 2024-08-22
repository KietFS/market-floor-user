"use client";

import Button from "@/components/atom/Button";
import Input from "@/components/atom/Input";
import { Typography, Box, Divider, CircularProgress } from "@mui/material";
import Image from "next/image";
import { set, useForm } from "react-hook-form";
import axios from "axios";
import React from "react";
import { useToast } from "@/hooks/useToast";
import { useRouter } from "next/navigation";

interface ICreateAccountPageProps {}

const CreateAccountPage: React.FC<ICreateAccountPageProps> = (props) => {
  const { control, handleSubmit } = useForm();
  const [loading, setLoading] = React.useState(false);
  const toast = useToast();
  const router = useRouter();

  const handlePressRegister = async (values: any) => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:4000/auth/signup", {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        password: values.password,
        role: "user",
        username: values.username,
      });
      const { success, data, error } = response.data;
      if (success) {
        setLoading(false);
        toast.sendToast("Success", "Sign up successfully");
        router.replace(
          `/verify-account?phoneNumber=${(
            values.phoneNumber as string
          ).substring(1)}`
        );
      } else {
        setLoading(false);
        toast.sendToast("Error", "Sign up failed", "error");
      }
    } catch (error) {
      setLoading(false);
      toast.sendToast("Error", "Sign up failed", "error");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "24px",
          width: "500px",
          alignItems: "center",
          padding: "36px 36px",
          backgroundColor: "white",
          borderRadius: "8px",
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: "600" }} variant="h4">
            Create account
          </Typography>
          <Typography
            sx={{ marginTop: "16px", fontSize: "14px", color: "GrayText" }}
          >
            Welcome to Market Floor, a market places connects retailer and
            customers. Here, you can find a wide variety of products from
            trusted sellers. Enjoy a seamless shopping experience with us.
          </Typography>
        </Box>

        <Button variant="outlined">
          <span>Sign in with Google </span>
          <Image
            alt="google-logo"
            src={require("../../../assets/icons/google.png")}
            width={20}
            height={20}
            style={{ marginLeft: "8px" }}
          />
        </Button>

        <Divider sx={{ height: 4, width: "100%", margin: "4px 0" }} />

        <form
          onSubmit={handleSubmit(handlePressRegister)}
          className="w-full flex gap-y-6 flex-col"
        >
          <div className="w-full grid grid-cols-2 gap-x-2">
            <Input
              control={control}
              name="firstName"
              label="First Name"
              placeholder="Enter your first name"
            />
            <Input
              control={control}
              name="lastName"
              label="Last Name"
              placeholder="Enter your last name"
            />
          </div>

          <Input
            name="username"
            control={control}
            label="Username"
            placeholder="Enter your username"
          />
          <Input
            name="email"
            control={control}
            label="Email"
            placeholder="Enter your email address"
          />
          <Input
            name="phoneNumber"
            control={control}
            label="Phone number"
            placeholder="Enter your phone number"
          />
          <Input
            control={control}
            name="password"
            label="Mật khẩu"
            placeholder="Nhập mật khẩu của bạn"
            mode="password"
          />
          <Input
            control={control}
            name="confirmPassword"
            label="Xác nhận mật khẩu"
            placeholder="Nhập lại mật khẩu của bạn"
            mode="password"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2 }}
            isLoading={loading}
          >
            Create your account
          </Button>

          <CircularProgress size={24} />
        </form>

        <Box>
          <Typography sx={{ fontSize: "14px", color: "GrayText" }}>
            By sign in, you agree to Market Floor's Terms of Service and Privacy
            Policy, as well as the Cookie Policy
          </Typography>
        </Box>
        <Divider sx={{ height: 4, width: "100%" }} />

        <Box>
          <Typography
            sx={{ fontSize: "14px", color: "GrayText", textAlign: "center" }}
          >
            Already have an account? Sign in
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default CreateAccountPage;
