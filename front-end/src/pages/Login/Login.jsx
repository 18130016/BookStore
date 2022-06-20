import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { IconGoogle, IconFacebook } from "../../utils/svg";
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-slate-200">
      <div className="w-[22%] h-[650px] bg-white drop-shadow-lg rounded-xl">
        <h1 className="font-semibold text-2xl font-serif text-center pt-10">
          ĐĂNG NHẬP
        </h1>

        <div className="w-4/5 m-auto mt-10">
          <TextField
            className="w-full rounded-lg"
            id="filled-basic"
            label="Nhập Email"
            variant="filled"
          />
        </div>
        <div className="w-4/5 m-auto mt-5">
          <TextField
            className="w-full rounded-lg"
            id="filled-basic"
            label="Nhập Password"
            variant="filled"
          />
        </div>

        <div className="w-4/5 m-auto mt-5">
          <Button variant="contained" fullWidth className="h-12 font-serif">
            ĐĂNG NHẬP
          </Button>
        </div>

        <div className="w-4/5 mt-3 m-auto relative">
          <span className="font-semibold hover:text-red-600 hover:cursor-pointer">Quên mật khẩu</span>
          <span className="font-semibold hover:text-red-600 hover:cursor-pointer absolute right-0">
            <Link to='/sign-up'>Tạo tài khoản</Link>
          </span>
        </div>

        <div
          style={{ boxShadow: "rgb(0 0 0 / 20%) 1px 1px 5px 0px" }}
          className="hover:cursor-pointer rounded-sm w-4/5 flex flex-row items-center bg-white p-2 m-auto mt-10"
        >
          <span className="w-8 h-8">
            <IconGoogle />
          </span>
          <span className="pl-5">Đăng nhập với Google</span>
        </div>

        <div
          style={{ boxShadow: "rgb(0 0 0 / 20%) 1px 1px 5px 0px" }}
          className="hover:cursor-pointer rounded-sm w-4/5 flex flex-row items-center bg-white p-2 m-auto mt-5"
        >
          <span className="w-8 h-8">
            <IconFacebook />
          </span>
          <span className="pl-5">Đăng nhập với Facebook</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
