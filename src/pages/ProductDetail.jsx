import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeProduct, deleteModule } from "../config/action";
import { detailProductSelector } from "../config/selectors";

function ProductDetail(props) {
  const [nameText, setNameText] = useState({
    name: "",
    productFunction: "",
    detail: "",
    nigp: "",
  });
  const { id } = props.match.params;
  const productSelected = useSelector(detailProductSelector(id));
  const dispatch = useDispatch();

  const { detail, productFunction, name, nigp, productModules } =
    productSelected;

  const handleNameChange = (event) => {
    setNameText({
      ...nameText,
      name: event.target.value,
    });
  };

  const handleProductFunctionChange = (event) => {
    setNameText({
      ...nameText,
      productFunction: event.target.value,
    });
  };

  const handleDetailChange = (event) => {
    setNameText({
      ...nameText,
      detail: event.target.value,
    });
  };

  const handleNigpChange = (event) => {
    setNameText({
      ...nameText,
      nigp: event.target.value,
    });
  };
  const handleChangeProductDetail = () => {
    dispatch(
      changeProduct(
        productSelected,
        nameText.name,
        nameText.productFunction,
        nameText.detail,
        nameText.nigp
      )
    );
  };

  const modules = useSelector((state) => state.test.tasks?.productModules);

  return (
    <section className="w-full p-4">
      <div className="flex justify-around">
        <span>Business Unit Code: SOL01</span>
        <span>Company/Org.Name: Solomons International</span>
      </div>
      <div className="mt-7">
        <form action="">
          <div>
            <label htmlFor="">
              Product Name : <b>{name}</b>
            </label>
            <input
              className="border w-full border-black"
              type="text"
              value={nameText.name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label htmlFor="">
              Product Function: <b>{productFunction}</b>
            </label>
            <textarea
              className="border w-full border-black"
              type="text"
              cols="10"
              rows="4"
              value={nameText.productFunction}
              onChange={handleProductFunctionChange}
            />
          </div>
          <div>
            <label htmlFor="">
              Product Details: <b>{detail}</b>
            </label>
            <textarea
              className="border w-full border-black"
              type="text"
              cols="10"
              rows="4"
              value={nameText.detail}
              onChange={handleDetailChange}
            />
          </div>
          <div>
            <label htmlFor="">
              NIGP/UNPSC Codes : <b>{nigp}</b>
            </label>
            <input
              className="border w-full border-black"
              type="text"
              value={nameText.nigp}
              onChange={handleNigpChange}
            />
          </div>
        </form>
      </div>
      <div className="mt-10 flex space-x-2 justify-end">
        <Link to="/">
          <button className="border border-gray-400 py-2 px-4 rounded-md">
            Cancel
          </button>
        </Link>
        <button
          className="border border-gray-400 py-2 px-4 rounded-md"
          onClick={handleChangeProductDetail}
        >
          Save
        </button>
        <Link to="/module">
          <button className="border border-gray-400 py-2 px-4 rounded-md">
            Add Product Modules
          </button>
        </Link>
      </div>
      <div className="mt-7">
        <table className="w-full p-4 text-left border border-gray-700">
          <tbody>
            <tr>
              <th>Field</th>
              <th>Field Name</th>
              <th>Field Data</th>
              <th>Action</th>
            </tr>
            {Object.values(modules).map((module) => (
              <tr key={module.id}>
                <td>Module</td>
                <td>{module.fieldName}</td>
                <td>{module.fieldData}</td>
                <td>
                  <div className="flex cursor-pointer space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 ${
                        Object.values(productModules).includes(module.id)
                          ? "text-red-600"
                          : ""
                      } `}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      onClick={() => {
                        dispatch(deleteModule(module));
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ProductDetail;
