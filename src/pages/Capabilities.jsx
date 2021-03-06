import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct, deleteProduct } from "../config/action/index";
function Capabilities() {
  const [isOpen, setIsOpen] = useState(false);

  const task = useSelector((state) => state.test.tasks.products);
  const dispatch = useDispatch();

  const [nameText, setNameText] = useState({
    name: "",
    productFunction: "",
    detail: "",
    nigp: "",
    module: {},
  });

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

  const handleAddProduct = () => {
    dispatch(
      addProduct(
        nameText.name,
        nameText.productFunction,
        nameText.detail,
        nameText.nigp,
        nameText.module
      )
    );
    setNameText({
      name: "",
      productFunction: "",
      detail: "",
      nigp: "",
      module: {
        id: "",
      },
    });
    setIsOpen(false);
  };

  const modules = useSelector((state) => state.test.tasks?.productModules);

  console.log(
    "🚀 ~ file: Capabilities.jsx ~ line 8 ~ Capabilities ~ nameText.module",
    nameText.module
  );
  return (
    <div className="bg-gray-100 w-full h-screen p-5">
      {isOpen && (
        <div className="bg-gray-400 absolute h-auto w-3/4 shadow-2xl rounded-xl p-5 left-64">
          <header className="flex justify-between border-b border-black mb-6 pb-3">
            <span>Add product</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </header>
          <section>
            <form action="">
              <div>
                <label htmlFor="">Product Name</label>
                <input
                  className="border w-full border-black"
                  type="text"
                  value={nameText.name}
                  onChange={handleNameChange}
                />
              </div>
              <div>
                <label htmlFor="">Product Function</label>
                <textarea
                  className="border w-full border-black"
                  type="text"
                  cols="10"
                  rows="1"
                  value={nameText.productFunction}
                  onChange={handleProductFunctionChange}
                />
              </div>
              <div>
                <label htmlFor="">Product Details:</label>
                <textarea
                  className="border w-full border-black"
                  type="text"
                  cols="10"
                  rows="1"
                  value={nameText.detail}
                  onChange={handleDetailChange}
                />
              </div>
              <div>
                <label htmlFor="">NIGP/UNPSC Codes :</label>
                <input
                  className="border w-full border-black"
                  type="text"
                  value={nameText.nigp}
                  onChange={handleNigpChange}
                />
              </div>
            </form>
            <div className="mt-7">
              <div>
                Select Module:
                <b className="ml-2">{Object.keys(nameText.module) + ","}</b>
              </div>
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
                          {/* <svg
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
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg> */}
                          <button
                            onClick={() => {
                              setNameText({
                                ...nameText,
                                module: {
                                  ...nameText.module,
                                  [module.id]: {
                                    id: module.id,
                                  },
                                },
                              });
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 "
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <footer>
            <button
              className="border border-black px-4 py-1 mt-2"
              onClick={handleAddProduct}
            >
              Add
            </button>
          </footer>
        </div>
      )}
      <h1 className="font-bold text-lg">Company Capabilities</h1>
      <div className="flex justify-center items-center mb-7">
        <input
          className="border-gray-200 border rounded-md p-2 mr-4"
          placeholder="Search"
          type="text"
        />
        <button
          className="border border-gray-400 py-2 px-4 rounded-md"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Add product
        </button>
      </div>
      <section>
        <div className="flex justify-between">
          <span>Business unit code: SOL01</span>
          <span>Company/Org Name: XXXX</span>
          <span>Business Unit Type: XXXXXX</span>
        </div>
        <div className="border border-gray-700 rounded-lg p-4">
          <table className="w-full text-left border-gray-500">
            <tbody>
              <tr>
                <th>Product Name</th>
                <th>Function</th>
                <th>Details</th>
                <th>NIGP/UNPSC Codes</th>
                <th>Action</th>
              </tr>
              {Object.values(task).map((eachProduct) => (
                <tr key={eachProduct.id}>
                  <td>{eachProduct.name}</td>
                  <td>{eachProduct.productFunction}</td>
                  <td>{eachProduct.detail}</td>
                  <td>{eachProduct.nigp}</td>
                  <td>
                    <div className="flex cursor-pointer space-x-3">
                      <Link to={`/product-detail/${eachProduct.id}`}>
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
                      </Link>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        onClick={() => dispatch(deleteProduct(eachProduct))}
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
    </div>
  );
}

export default Capabilities;
