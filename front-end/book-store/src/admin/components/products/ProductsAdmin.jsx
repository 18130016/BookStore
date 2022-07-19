import React, { useEffect, useState, useRef } from "react";
import { productsColumn, productsRow } from "../../constants/data";
import { DataGrid } from "@mui/x-data-grid";
import { Modal, Box } from "@mui/material";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import PreviewIcon from "@mui/icons-material/Preview";
import DeleteIcon from "@mui/icons-material/Delete";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  outline: "none",
  border: "none",
  borderRadius: 4,
};

const styleForInput =
  "px-4 outline-none bg-[#EDEDF2] w-full h-12 rounded-lg placeholder:italic placeholder:text-state-400 mt-4";

const ProductsAdmin = () => {
  const [data, setData] = React.useState(productsRow);

  const [productImage, setProductImage] = useState();
  const [preview, setPreview] = useState();
  const [imgSource, setImgSource] = useState();

  const fileInputRef = useRef();

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };


  useEffect(() => {
    if (productImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(productImage);
    } else {
      setPreview(null);
    }
  }, [productImage]);

  const handleChangeProductImage = (event) => {
    const file = event.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setProductImage(file);
    } else {
      setProductImage(null);
    }
  };

  async function handleOnSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );

    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append("file", file);
    }

    formData.append("upload_preset", "my-uploads");

    const data = await fetch(
      "https://api.cloudinary.com/v1_1/testingcloudinary123/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());

    setImgSource(data.secure_url);
  }

  const [openAddProduct, setOpenAddProduct] = React.useState(false);
  const handleOpenAddProduct = () => setOpenAddProduct(true);
  const handleCloseProduct = () => setOpenAddProduct(false);

  const [openUpdateProduct, setOpenUpdateProduct] = React.useState(false);
  const handleCloseUpdateProduct = () => setOpenUpdateProduct(false);

  const [productName, setProductName] = useState();
  const [description, setDescription] = useState();
  const [quantity, setQuantity] = useState();

  const [productNameUpdate, setProductNameUpdate] = useState();
  const [descriptionUpdate, setDescriptionUpdate] = useState();
  const [quantityUpdate, setQuantityUpdate] = useState();

  const handleUpdateProduct = (id) => {
    const product = data.find((item) => item.id === id);
    setProductNameUpdate(product.name);
    setDescriptionUpdate(product.description);
    setQuantityUpdate(product.quantity);
    setOpenUpdateProduct(true);
  };

  const columnRow = [
    {
      field: "action",
      headerName: "Action",
      width: 300,
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div className="flex flex-row items-center ml-5">
            <Button
              className="w-[110px]"
              color="success"
              onClick={() => {
                handleUpdateProduct(params.row.id);
              }}
              variant="outlined"
              startIcon={<PreviewIcon />}
            >
              <span className="pt-1">Update</span>
            </Button>

            <div className="pl-5" onClick={() => handleDelete(params.row.id)}>
              <Button
                className="w-[110px]"
                color="error"
                variant="outlined"
                startIcon={<DeleteIcon />}
              >
                <span className="pt-1">Delete</span>
              </Button>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="w-full h-[600px] p-5">
      <div className="w-full mb-5">
        <button
          onClick={handleOpenAddProduct}
          className="hover:bg-green-600 py-2 px-5 rounded-lg bg-green-700 drop-shadow-lg text-white font-semibold"
        >
          Add New Product
        </button>
      </div>

      <DataGrid
        rows={data}
        columns={productsColumn.concat(columnRow)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />

      {/* // Modal Update Product */}
      <Modal
        open={openUpdateProduct}
        onClose={handleCloseUpdateProduct}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className="font-semibold text-2xl text-center">UPDATE PRODUCT</h1>
          <form className="mt-5" onSubmit={handleOnSubmit}>
            <input
              value={productNameUpdate}
              className={`${styleForInput}`}
              placeholder="Nhập tên sản phẩm"
              onChange={(e) => {
                setProductNameUpdate(e.target.value);
              }}
            />
            <input
              value={descriptionUpdate}
              className={`${styleForInput}`}
              placeholder="Nhập mô tả sản phẩm"
              onChange={(e) => {
                setDescriptionUpdate(e.target.value);
              }}
            />
            <input
              value={quantityUpdate}
              type="number"
              className={`${styleForInput}`}
              placeholder="Nhập số lượng sản phẩm"
              onChange={(e) => {
                setQuantityUpdate(e.target.value);
              }}
            />
            <Button
              style={{ marginTop: "24px" }}
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={(event) => {
                event.preventDefault();
                fileInputRef.current.click();
              }}
            >
              Add image
            </Button>
            <input
              type="file"
              name="file"
              className="hidden"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleChangeProductImage}
            />

            <div className="w-full mt-5">
              {preview ? (
                <div className="hover:cursor-pointer w-[64px] h-[64px] object-fill">
                  <img src={preview} alt="preview" />
                </div>
              ) : <div className="hover:cursor-pointer w-[64px] h-[64px] object-fill">
              <img src={preview} alt="preview" />
            </div>}
            </div>

            <div className="w-full absolute bottom-10 left-1/4">
              <button
                className="w-2/4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                type="submit"
              >
                <span className="font-semibold">Thêm</span>
              </button>
            </div>
          </form>
        </Box>
      </Modal>

      {/* Modal add product?= */}
      <Modal
        open={openAddProduct}
        onClose={handleCloseProduct}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className="font-semibold text-2xl text-center">
            ADD NEW PRODUCT
          </h1>
          <form className="mt-5" onSubmit={handleOnSubmit}>
            <input
              value={productName}
              className={`${styleForInput}`}
              placeholder="Nhập tên sản phẩm"
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
            <input
              value={description}
              className={`${styleForInput}`}
              placeholder="Nhập mô tả sản phẩm"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <input
              value={quantity}
              type="number"
              className={`${styleForInput}`}
              placeholder="Nhập số lượng sản phẩm"
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
            <Button
              style={{ marginTop: "24px" }}
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={(event) => {
                event.preventDefault();
                fileInputRef.current.click();
              }}
            >
              Add image
            </Button>
            <input
              type="file"
              name="file"
              className="hidden"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleChangeProductImage}
            />

            <div className="w-full mt-5">
              {preview ? (
                <div className="hover:cursor-pointer w-[64px] h-[64px] object-fill">
                  <img src={preview} alt="preview" />
                </div>
              ) : null}
            </div>

            <div className="w-full absolute bottom-10 left-1/4">
              <button
                className="w-2/4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                type="submit"
              >
                <span className="font-semibold">Thêm</span>
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ProductsAdmin;
