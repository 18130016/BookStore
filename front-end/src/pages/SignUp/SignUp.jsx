import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { IconGoogle, IconFacebook } from "../../utils/svg";
import {Link} from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-slate-200">
      <div className="w-[22%] h-[650px] bg-white drop-shadow-lg rounded-xl">
        <h1 className="font-semibold text-2xl font-serif text-center pt-10">
          TẠO TÀI KHOẢN
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
          <TextField
            className="w-full rounded-lg"
            id="filled-basic"
            label="Xác nhận Password"
            variant="filled"
          />
        </div>

        <div className="w-4/5 mt-5 m-auto relative">
          <span className="font-semibold hover:text-red-600 hover:cursor-pointer">Quên mật khẩu</span>
          <span className="font-semibold hover:text-red-600 hover:cursor-pointer absolute right-0">
            <Link to='/login'>Bạn đã có tài khoản</Link>
          </span>
        </div>

        <div className="w-4/5 m-auto mt-10">
          <Button variant="contained" fullWidth className="h-12 font-serif">
            ĐĂNG KÍ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
