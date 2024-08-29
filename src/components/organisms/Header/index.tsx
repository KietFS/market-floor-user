"use client";

import React, { useState } from "react";

//design

import { Bars4Icon, UserIcon, UserPlusIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/24/outline";

//hooks
import { useRouter } from "next/navigation";

import axios from "axios";
import { Box, MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import SearchBar from "../SearchBar";
import Logo from "@/components/atom/Logo";

interface IHeaderV2Props {}

const HeaderV2: React.FC<IHeaderV2Props> = (props) => {
  const router = useRouter();

  //state
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [isGettingProductCategory, setIsGettingProductCategory] =
    useState<boolean>(false);
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);
  const [openRegister, setOpenRegister] = useState<boolean>(false);
  const [openMobileDrawer, setOpenMobileDrawer] = useState<boolean>(false);

  return (
    <>
      <div className="w-full shadow-lg pb-4 laptop:pb-0 ">
        <div className="w-full flex space-x-4 tablet:space-x-6 laptop:space-x-6 desktop:space-x-8 items-center px-4 py-4  justify-between laptop:justify-around">
          <div className="flex laptop:hidden  w-1/3 laptop:w-0">
            <button
              className="bg-gray-100 p-2 rounded-lg active:bg-gray-300"
              onClick={() => setOpenMobileDrawer(true)}
            >
              <Bars3Icon className="text-gray-500 font-bold w-5 h-5" />
            </button>
          </div>
          <Logo />
          <div className="flex w-1/3 laptop:hidden laptop:w-0 flex-row-reverse">
            {false ? null : (
              <div className="flex flex-row-reverse laptop:hidden  w-1/3 laptop:w-0">
                <button
                  onClick={() => setOpenLogin(true)}
                  className="p-2 rounded-full bg-gray-100 active:bg-gray-300 justify-center items-center flex"
                >
                  <UserIcon className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={() => setOpenRegister(true)}
                  className="p-2 rounded-full bg-gray-100 active:bg-gray-300 justify-center items-center flex mr-2"
                >
                  <UserPlusIcon className="w-5 h-5 text-gray-600 mx-auto" />
                </button>
              </div>
            )}
          </div>
          <div className="laptop:w-[400px] desktop:w-[800px] hidden laptop:flex">
            <SearchBar
              placeholder="Search for anything, any words"
              onChange={() => {}}
              onCategoryChange={() => {}}
              category=""
            />
          </div>

          <div className="hidden laptop:flex">
            <div className="hidden laptop:flex flex-end space-x-0.5 items-center w-64">
              <button
                className="items-center rounded-xl px-4 py-2 text-center text-gray-600  text-sm w-fit flex hover:bg-gray-100"
                onClick={() => router.replace("/create-account")}
              >
                <UserPlusIcon className="w-5 h-5 text-gray-600 mr-1" />
              Sign up
              </button>
              <button
                className=" rounded-xl px-4 py-2 text-center text-gray-600  text-sm w-fit flex space-x-1 items-center hover:bg-gray-100"
                onClick={() => router.replace("/login")}
              >
                <UserIcon className="w-5 h-5 text-gray-600 mr-1" />
                Log in
              </button>
            </div>
          </div>
        </div>
        <div className="flex laptop:hidden px-2">
          <SearchBar
            placeholder="Search for anything, any words"
            onChange={() => {}}
            onCategoryChange={() => {}}
            category=""
          />
        </div>
      </div>
    </>
  );
};

export default HeaderV2;
