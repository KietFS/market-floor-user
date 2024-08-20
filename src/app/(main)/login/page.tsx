"use client";

import Button from "@/components/atom/Button";
import Input from "@/components/atom/Input";
import { Typography, Box, Divider, CircularProgress } from "@mui/material";
import Image from "next/image";
import { set, useForm } from "react-hook-form";
import axios from "axios";
import React from "react";
import { useToast } from "@/hooks/useToast";

interface ILoginPageProps {}

const LoginPage: React.FC<ILoginPageProps> = (props) => {
  const { control, handleSubmit } = useForm();
  const [loading, setLoading] = React.useState(false);
  const toast = useToast();

  const handlePressLogin = async (values: any) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:4000/auth/signin",
        values
      );
      const { success, data, error } = response.data;
      if (success) {
        setLoading(false);
        toast.sendToast("Success", "Login successfully");
      } else {
        setLoading(false);
        toast.sendToast("Error", "Login failed", "error");
      }
    } catch (error) {
      setLoading(false);
      toast.sendToast("Error", "Login failed", "error");
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
            Sign in
          </Typography>
          <Typography
            sx={{ marginTop: "16px", fontSize: "14px", color: "GrayText" }}
          >
            Welcome to Market Floor, a market places connects retailer and
            customers
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

        <form
          onSubmit={handleSubmit(handlePressLogin)}
          className="w-full flex gap-y-6 flex-col"
        >
          <Input
            name="phoneNumber"
            control={control}
            label="Số điện thoại"
            placeholder="Nhập số điện thoại của bạn"
          />
          <Input
            control={control}
            name="password"
            label="Mật khẩu"
            placeholder="Nhập mật khẩu của bạn"
            mode="password"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2 }}
            isLoading={loading}
          >
            Continue with phone number
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
            Dont have an account? Sign up
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default LoginPage;
