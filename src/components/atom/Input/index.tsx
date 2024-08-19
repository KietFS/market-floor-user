"use client";

import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";
import { Controller, useForm } from "react-hook-form";

//icons
import {
  EnvelopeIcon,
  LockClosedIcon,
  PhoneIcon,
  UserCircleIcon,
  CheckBadgeIcon,
  PencilIcon,
} from "@heroicons/react/20/solid";
import { Input as MuiInput, TextField } from "@mui/material";

type IInputMode =
  | "email"
  | "password"
  | "confirmPassword"
  | "text"
  | "phoneNumber"
  | "name";

interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  className?: string;
  label?: string | null;
  isRequired?: boolean;
  hasEvent?: boolean;
  onClickEvent?: () => void;
  // use onChangeValue instead of onChange, since Formik will overwrite the onChange
  onChangeValue?: (value: string | number) => void;
  readonly onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  mode?: IInputMode;
}

//Need to fix bug on blur
const Input: React.FC<IInputProps> = (props) => {
  const {
    name,
    className,
    isRequired,
    label = null,
    hasEvent = false,
    onClickEvent,
    onChangeValue,
    mode = "text",
  } = props;
  const [focus, setFocus] = useState<boolean>(false);
  const {
    setValue,
    formState: {},
    control,
  } = useForm();

  const objectTypes = {
    email: {
      icon: <EnvelopeIcon width={20} height={20} color="gray" />,
      placeholder: "johndoe@gmail.com",
    },
    name: {
      icon: <UserCircleIcon width={20} height={20} color="gray" />,
      placeholder: "John Doe",
    },
    password: {
      icon: <LockClosedIcon width={20} height={20} color="gray" />,
      placeholder: "**********",
    },

    confirmPassword: {
      icon: <CheckBadgeIcon width={20} height={20} color="gray" />,
      placeholder: "**********",
    },
    phoneNumber: {
      icon: <PhoneIcon width={20} height={20} color="gray" />,
      placeholder: "0809211211",
    },
    text: {
      icon: <PencilIcon width={20} height={20} color="gray" />,
      placeholder: "Your text here",
    },
  };

  const onValueChange = (phoneNumber: string) => {
    setValue(name, phoneNumber);
  };

  const handleOnBlur = () => {
    setFocus(false);
  };

  const handleOnFocus = () => {
    setFocus(true);
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ formState: { errors }, field: { value, onChange } }) => (
        <>
          <TextField
            InputProps={{ sx: { height: 44 } }}
            type={props.mode}
            placeholder={props.placeholder}
            fullWidth
            label={label}
            id="input"
            onChange={(e) => {
              console.log("E", e);
            }}
            sx={{
              "& .MuiInputLabel-root": {
                top: "-4px", // Adjust the label position if needed
              },
            }}
          />
        </>
      )}
    />
  );
};

export default Input;
