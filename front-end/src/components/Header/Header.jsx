import React from "react";
import images from "../../utils/image";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { IconCart } from "../../assets/svg";

const Header = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#e6e6e6",
    "&:hover": {
      backgroundColor: "#cccccc",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "black",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
    },
  }));

  return (
    <div className="w-10/12 h-20 bg-white m-auto flex flex-row items-center relative">
      <img src={images.logo} alt="logo" className="hover:cursor-pointer" />
      <div className="w-2/6">
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            className="w-full"
            placeholder="Search book bu author or publisher"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </div>

      <div className="flex flex-row items-center absolute right-10">
        <span className="pr-20 font-serif hover:text-red-700 cursor-pointer">
          FAB
        </span>
        <span className="pr-20 font-serif hover:text-red-700 cursor-pointer">
          Track Order
        </span>
        <span className="hover:cursor-pointer pr-20">
          <IconCart />
        </span>
        <button className="btn-login font-serif">Sign in</button>
      </div>
    </div>
  );
};

export default Header;
