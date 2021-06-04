/* eslint-disable max-lines */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  addProduct,
  changeModule,
  changeProduct,
  deleteModule,
  deleteProduct,
} from '../config/action/index';
import { IconClose, IconDelete, IconChange } from '../utils/icons';

function Product() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModalChange, setIsOPenModalChange] = useState(false);
  const [isOpenProductChange, setIsOpenProductChange] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState();
  const [selectedModule, setSelectedModule] = useState();

  const dispatch = useDispatch();

  // Add product
  const [nameText, setNameText] = useState({
    name: '',
    prdFunction: '',
    detail: '',
    nigp: '',
    module: [],
  });

  const handleNameChange = (event) => {
    setNameText({
      ...nameText,
      name: event.target.value,
    });
  };

  const handlefunctionChange = (event) => {
    setNameText({
      ...nameText,
      prdFunction: event.target.value,
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
        nameText.prdFunction,
        nameText.detail,
        nameText.nigp,
        nameText.module
      )
    );
    setNameText({
      name: '',
      prdFunction: '',
      detail: '',
      nigp: '',
      module: [],
    });
    setIsOpen(false);
  };

  const modules = useSelector((state) => state.product.productModules);
  const products = useSelector((state) => state.product.products);

  // Change Product
  const [textProductChange, setTextProductChange] = useState({
    name: '',
    prdFunction: '',
    detail: '',
    nigp: '',
    module: [],
  });

  const handleProductNameChange = (event) => {
    setTextProductChange({
      ...textProductChange,
      name: event.target.value,
    });
  };

  const handleProductFunctionChange = (event) => {
    setTextProductChange({
      ...textProductChange,
      prdFunction: event.target.value,
    });
  };

  const handleProductDetailChange = (event) => {
    setTextProductChange({
      ...textProductChange,
      detail: event.target.value,
    });
  };

  const handleProductNigpChange = (event) => {
    setTextProductChange({
      ...textProductChange,
      nigp: event.target.value,
    });
  };
  const handleChangeProductDetail = () => {
    dispatch(
      changeProduct(
        selectedProduct,
        textProductChange.name,
        textProductChange.prdFunction,
        textProductChange.detail,
        textProductChange.nigp
      )
    );
    setTextProductChange({
      name: '',
      prdFunction: '',
      detail: '',
      nigp: '',
      module: [],
    });
    setIsOpenProductChange(false);
  };
  // Module

  const [moduleText, setModuleText] = useState({
    id: '',
    fieldLabel: '',
    fieldName: '',
    fieldData: '',
    fieldDes: '',
  });

  const handleFieldLabelChange = (event) => {
    setModuleText({
      ...moduleText,
      fieldLabel: event.target.value,
    });
  };

  const handleFieldNameChange = (event) => {
    setModuleText({
      ...moduleText,
      fieldName: event.target.value,
    });
  };

  const handleFieldDataChange = (event) => {
    setModuleText({
      ...moduleText,
      fieldData: event.target.value,
    });
  };

  const handleFieldDesChange = (event) => {
    setModuleText({
      ...moduleText,
      fieldDes: event.target.value,
    });
  };
  const handleChangeModule = () => {
    dispatch(
      changeModule(
        selectedModule.id,
        moduleText.fieldLabel,
        moduleText.fieldName,
        moduleText.fieldData,
        moduleText.fieldDes
      )
    );
    setModuleText({
      fieldLabel: '',
      fieldName: '',
      fieldData: '',
      fieldDes: '',
    });
    setIsOpen(false);
  };
  return (
    <div className="w-full h-screen p-5">
      {isOpen && (
        <div className="bg-[rgba(192,192,192,0.3)] absolute top-0 left-0 h-full w-full shadow-2xl rounded-xl flex items-center justify-center">
          <div
            className="flex flex-col bg-white rounded-md px-5 py-4 max-h-[500px] overflow-y-scroll"
            style={{ boxShadow: '5px 5px 25px -20px rgba(0,0,0,0.5)' }}
          >
            <div className="flex flex-row items-center justify-between mb-5">
              <p className="text-lg font-bold">Add product</p>
              <div aria-hidden="true" onClick={() => setIsOpen(false)}>
                <IconClose />
              </div>
            </div>
            <section className="flex flex-col">
              <div>
                <p className="text-[12px]">Product Name</p>
                <input
                  className="border w-full border-gray-300 rounded-md text-sm px-2 py-1 focus:outline-none mb-2"
                  type="text"
                  value={nameText.name}
                  onChange={handleNameChange}
                />
              </div>
              <div>
                <p className="text-[12px]">Product Function</p>
                <textarea
                  className="border w-full border-gray-300 rounded-md text-sm px-2 py-1 focus:outline-none mb-2"
                  type="text"
                  cols="10"
                  rows="5"
                  value={nameText.prdFunction}
                  onChange={handlefunctionChange}
                />
              </div>
              <div>
                <p className="text-[12px]">Product Details:</p>
                <textarea
                  className="border w-full border-gray-300 rounded-md text-sm px-2 py-1 focus:outline-none mb-2"
                  type="text"
                  cols="10"
                  rows="5"
                  value={nameText.detail}
                  onChange={handleDetailChange}
                />
              </div>
              <div>
                <p className="text-[12px]">NIGP/UNPSC Codes :</p>
                <input
                  className="border w-full border-gray-300 rounded-md text-sm px-2 py-1 focus:outline-none mb-2"
                  type="text"
                  value={nameText.nigp}
                  onChange={handleNigpChange}
                />
              </div>
              <button
                type="button"
                className="border border-blue-400 bg-blue-500 text-white py-2 px-4 rounded-md"
                onClick={handleAddProduct}
              >
                Add product
              </button>
              <div className="mt-7">
                <div className="flex flex-row items-center justify-between">
                  <p className="text-sm">Product modules</p>
                  <Link to="/module/1" className="text-sm text-blue-500">
                    Add new module
                  </Link>
                </div>
                <table className="w-full p-4 text-left table-auto border-collapse">
                  <thead>
                    <tr>
                      <th className="border border-gray-400 px-2 py-1">Module p</th>
                      <th className="border border-gray-400 px-2 py-1">Module name</th>
                      <th className="border border-gray-400 px-2 py-1">Module data</th>
                      <th className="border border-gray-400 px-2 py-1">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {' '}
                    {modules.map((module, index) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <tr key={index}>
                        <td className="border border-gray-400 px-2 py-1"> {module.label}</td>
                        <td className="border border-gray-400 px-2 py-1"> {module.name}</td>
                        <td className="border border-gray-400 px-2 py-1"> {module.data}</td>
                        <td className="border border-gray-400 px-2 py-1">
                          <div className="flex flex-row items-center justify-between">
                            <input
                              type="checkbox"
                              name="toggleModule"
                              onClick={() => {
                                setNameText({
                                  ...nameText,
                                  module: [...nameText.module, module.id],
                                });
                              }}
                            />
                            <button type="button" onClick={() => dispatch(deleteModule(module.id))}>
                              <IconDelete />
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedModule(module);
                                setIsOpen(false);
                                setIsOPenModalChange(true);
                              }}
                            >
                              <IconChange />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      )}
      {isOpenProductChange && (
        <div className="bg-[rgba(192,192,192,0.3)] absolute top-0 left-0 h-full w-full shadow-2xl rounded-xl flex items-center justify-center">
          <div
            className="flex flex-col bg-white rounded-md px-5 py-4 max-h-[500px] min-h-[500px] overflow-y-scroll"
            style={{ boxShadow: '5px 5px 25px -20px rgba(0,0,0,0.5)' }}
          >
            <div className="flex flex-row items-center justify-between mb-5">
              <p className="text-lg font-bold">Change product</p>
              <div aria-hidden="true" onClick={() => setIsOpenProductChange(false)}>
                <IconClose />
              </div>
            </div>
            <section className="flex flex-col">
              <div>
                <p className="text-[12px]">Product Name</p>
                <input
                  className="border w-full border-gray-300 rounded-md text-sm px-2 py-1 focus:outline-none mb-2"
                  type="text"
                  value={textProductChange.name}
                  onChange={handleProductNameChange}
                />
              </div>
              <div>
                <p className="text-[12px]">Product Function</p>
                <textarea
                  className="border w-full border-gray-300 rounded-md text-sm px-2 py-1 focus:outline-none mb-2"
                  type="text"
                  cols="10"
                  rows="5"
                  value={textProductChange.prdFunction}
                  onChange={handleProductFunctionChange}
                />
              </div>
              <div>
                <p className="text-[12px]">Product Details:</p>
                <textarea
                  className="border w-full border-gray-300 rounded-md text-sm px-2 py-1 focus:outline-none mb-2"
                  type="text"
                  cols="10"
                  rows="5"
                  value={textProductChange.detail}
                  onChange={handleProductDetailChange}
                />
              </div>
              <div>
                <p className="text-[12px]">NIGP/UNPSC Codes :</p>
                <input
                  className="border w-full border-gray-300 rounded-md text-sm px-2 py-1 focus:outline-none mb-2"
                  type="text"
                  value={textProductChange.nigp}
                  onChange={handleProductNigpChange}
                />
              </div>
              <button
                type="button"
                className="border border-blue-400 bg-blue-500 text-white py-2 px-4 rounded-md"
                onClick={handleChangeProductDetail}
              >
                Change product
              </button>
            </section>
          </div>
        </div>
      )}
      {isOpenModalChange && (
        <div className="bg-[rgba(192,192,192,0.3)] absolute top-0 left-0 h-full w-full shadow-2xl rounded-xl flex items-center justify-center">
          <div
            className="flex flex-col bg-white rounded-md px-5 py-4 max-h-[500px] overflow-y-scroll"
            style={{ boxShadow: '5px 5px 25px -20px rgba(0,0,0,0.5)' }}
          >
            <div className="flex flex-row items-center justify-between mb-5">
              <p className="text-lg font-bold">Change Module</p>
              <div aria-hidden="true" onClick={() => setIsOPenModalChange(false)}>
                <IconClose />
              </div>
            </div>
            <section className="flex flex-col">
              <div>
                <p className="text-[12px]">Field Label</p>
                <input
                  className="border w-full border-gray-300 rounded-md text-sm px-2 py-1 focus:outline-none mb-2"
                  type="text"
                  value={moduleText.fieldLabel}
                  onChange={handleFieldLabelChange}
                />
              </div>
              <div>
                <p className="text-[12px]">Field Name</p>
                <textarea
                  className="border w-full border-gray-300 rounded-md text-sm px-2 py-1 focus:outline-none mb-2"
                  type="text"
                  cols="10"
                  rows="5"
                  value={moduleText.fieldName}
                  onChange={handleFieldNameChange}
                />
              </div>
              <div>
                <p className="text-[12px]">Field Data</p>
                <textarea
                  className="border w-full border-gray-300 rounded-md text-sm px-2 py-1 focus:outline-none mb-2"
                  type="text"
                  cols="10"
                  rows="5"
                  value={moduleText.fieldData}
                  onChange={handleFieldDataChange}
                />
              </div>
              <div>
                <p className="text-[12px]">Field Description</p>
                <input
                  className="border w-full border-gray-300 rounded-md text-sm px-2 py-1 focus:outline-none mb-2"
                  type="text"
                  value={moduleText.fieldDes}
                  onChange={handleFieldDesChange}
                />
              </div>
              <button
                type="button"
                className="border border-blue-400 bg-blue-500 text-white py-2 px-4 rounded-md"
                onClick={handleChangeModule}
              >
                Change Product
              </button>
              <div className="mt-7">
                <div className="flex flex-row items-center justify-between">
                  <p className="text-sm">Product modules</p>
                  <Link to="/module/1" className="text-sm text-blue-500">
                    Add new module
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
      <h1 className="font-bold text-lg">Company Product</h1>
      <div className="my-4">
        <button
          type="button"
          className="border border-blue-400 bg-blue-500 text-white py-2 px-4 rounded-md"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Add product
        </button>
      </div>
      <section>
        <table className="w-full text-left border-gray-500 table-auto">
          <thead>
            <tr>
              <th className="border border-gray-400 px-2 py-1">Product Name</th>
              <th className="border border-gray-400 px-2 py-1">Function</th>
              <th className="border border-gray-400 px-2 py-1">Details</th>
              <th className="border border-gray-400 px-2 py-1">NIGP/UNPSC Codes</th>
              <th className="border border-gray-400 px-2 py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <tr key={index}>
                <td className="border border-gray-400 px-2 py-1"> {product.name}</td>
                <td className="border border-gray-400 px-2 py-1"> {product.prdFunction}</td>
                <td className="border border-gray-400 px-2 py-1"> {product.detail}</td>
                <td className="border border-gray-400 px-2 py-1"> {product.nigp}</td>
                <td className="border border-gray-400 px-2 py-1">
                  <button type="button" onClick={() => dispatch(deleteProduct(product.id))}>
                    <IconDelete />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedProduct(product);
                      setIsOpenProductChange(true);
                    }}
                  >
                    <IconChange />
                  </button>
                </td>
              </tr>
            ))}{' '}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Product;
