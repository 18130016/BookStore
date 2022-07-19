import React from "react";
import { Modal, Box, Switch } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FilledInput } from "@mui/material";
import axios from "axios";
import FormControlLabel from "@mui/material/FormControlLabel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 900,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: "8px",
};

const styleForInput =
  "px-4 outline-none bg-[#EDEDF2] w-[70%] h-12 rounded-lg placeholder:italic placeholder:text-state-400";

const CreateAddress = (props) => {
  const [province, setProvince] = React.useState();
  const [provinces, setProvinces] = React.useState([]);

  const [districts, setDistricts] = React.useState([]);
  const [district, setDistrict] = React.useState();

  const [wards, setWards] = React.useState([]);
  const [ward, setWard] = React.useState();

  React.useEffect(() => {
    const callAPIProvinces = async (api) => {
      return await axios.get(api).then((response) => {
        setProvinces(response.data);
      });
    };
    callAPIProvinces("https://provinces.open-api.vn/api/?depth=1");
  }, []);

  const getDistrictsAPI = async (code) => {
    return await axios
      .get(`https://provinces.open-api.vn/api/p/${code}?depth=2`)
      .then((res) => {
        setDistricts(res.data.districts);
      });
  };

  const getWardsAPI = async (code) => {
    return await axios
      .get(`https://provinces.open-api.vn/api/d/${code}?depth=2`)
      .then((res) => {
        setWards(res.data.wards);
      });
  };

  const handleChangeProvince = (event) => {
    setProvince(event.target.value);
    getDistrictsAPI(event.target.value.code);
  };

  const handelChangeDistrict = (event) => {
    setDistrict(event.target.value);
    getWardsAPI(event.target.value.code);
  };

  const handelChangeWards = (event) => {
    setWard(event.target.value);
  };

  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [description, setDesription] = React.useState("");
  const [isDefaultAddress, setIsDefaultAddress] = React.useState(false);

  console.log(isDefaultAddress);

  const formData = new FormData();

  const handleCreateAddress = () => {
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("province", province.name);
    formData.append("district", district.name);
    formData.append("ward", ward.name);
    formData.append("description", description);
    formData.append("isDefaultAddress", isDefaultAddress);

    console.log(formData.forEach((value, key) => console.log(key, value)));
  };

  return (
    <Modal
      open={props.openCreateAddress}
      onClose={props.handleCloseCreateAddress}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h3 className="text-center">THÊM ĐỊA CHỈ</h3>
        <div className="w-full flex flex-row items-center justify-center mt-5">
          <span className="w-[25%] font-semibold text-lg">Tên người nhận</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styleForInput}
            placeholder="Tên người nhận"
          />
        </div>

        <div className="w-full flex flex-row items-center justify-center mt-3">
          <span className="font-semibold text-lg w-[25%]">Số điện thoại</span>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={styleForInput}
            placeholder="Số điện thoại"
          />
        </div>

        <div className="w-full flex flex-row items-center justify-center mt-3">
          <span className="font-semibold text-lg w-[25%]">Tỉnh/Thành phố</span>
          <div className="w-[70%]">
            <FormControl variant="filled" className="w-full">
              <InputLabel id="demo-simple-select-standard-label">
                Chọn Tỉnh/Thành Phố
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                disableUnderline
                id="demo-simple-select-filled"
                value={province || ""}
                onChange={handleChangeProvince}
                input={
                  <FilledInput
                    classes={{ root: "rounded-lg" }}
                    sx={{ ".MuiSelect-select": { borderRadius: 2 } }}
                  />
                }
              >
                {provinces.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="w-full flex flex-row items-center justify-center mt-3">
          <span className="w-[25%] font-semibold">Quận/Huyện</span>
          <div className="w-[70%]">
            <FormControl
              variant="filled"
              className="w-full"
              classes={{ root: "rounded-lg" }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                Chọn Quận/Huyện
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                disableUnderline
                id="demo-simple-select-filled"
                value={district || ""}
                onChange={handelChangeDistrict}
                input={
                  <FilledInput
                    classes={{ root: "rounded-lg" }}
                    sx={{ ".MuiSelect-select": { borderRadius: 2 } }}
                  />
                }
              >
                {districts.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="w-full flex flex-row items-center justify-center mt-3">
          <span className="w-[25%] font-semibold">Phường/Xã</span>
          <div className="w-[70%]">
            <FormControl variant="filled" className="w-full">
              <InputLabel id="demo-simple-select-standard-label">
                Chọn Phường/Xã
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                disableUnderline
                id="demo-simple-select-filled"
                value={ward || ""}
                onChange={handelChangeWards}
                input={
                  <FilledInput
                    classes={{ root: "rounded-lg" }}
                    sx={{ ".MuiSelect-select": { borderRadius: 2 } }}
                  />
                }
              >
                {wards.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="w-full flex flex-row items-center justify-center mt-3">
          <span className="w-[25%] font-semibold text-lg">Mô tả địa chỉ</span>
          <textarea
            value={description}
            onChange={(e) => setDesription(e.target.value)}
            className="w-[70%] h-20 bg-[#EDEDF2] outline-none rounded-lg"
          />
        </div>

        <div className="w-full flex flex-row items-center justify-center mt-3">
          <span className="w-[25%] font-semibold text-lg">
            Địa chỉ mặc định
          </span>
          <span className="font-semibold text-gray-500 w-[70%]">
            <FormControlLabel
              control={
                <Switch
                  checked={isDefaultAddress}
                  onChange={() => setIsDefaultAddress(!isDefaultAddress)}
                />
              }
            />
          </span>
        </div>

        <div
          onClick={handleCreateAddress}
          className="cursor-pointer hover:bg-gray-700 m-auto w-[50%] h-14 mt-5 bg-gray-500 rounded-lg flex items-center justify-center"
        >
          <span className="font-semibold text-white">THÊM ĐỊA CHỈ</span>
        </div>
      </Box>
    </Modal>
  );
};

export default CreateAddress;
