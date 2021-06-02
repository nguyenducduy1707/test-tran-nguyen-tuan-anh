import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addModule } from "../config/action";

function Module({ id }) {
  const [nameText, setNameText] = useState({
    fieldLabel: "",
    fieldName: "",
    fieldData: "",
    fieldDes: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  const handleFieldLabelChange = (event) => {
    setNameText({
      ...nameText,
      fieldLabel: event.target.value,
    });
  };

  const handleFieldNameChange = (event) => {
    setNameText({
      ...nameText,
      fieldName: event.target.value,
    });
  };

  const handleFieldDataChange = (event) => {
    setNameText({
      ...nameText,
      fieldData: event.target.value,
    });
  };

  const handleFieldDesChange = (event) => {
    setNameText({
      ...nameText,
      fieldDes: event.target.value,
    });
  };

  const handleAddModule = () => {
    dispatch(
      addModule(
        nameText.fieldLabel,
        nameText.fieldName,
        nameText.fieldData,
        nameText.fieldDes
      )
    );
    setNameText({
      fieldLabel: "",
      fieldName: "",
      fieldData: "",
      fieldDes: "",
    });
    goBack();
  };

  return (
    <div className=" p-5 w-full">
      <header className="border-b border-black mb-6 pb-3">
        <span>Add/Update Features/Modules</span>
      </header>
      <section>
        <form action="">
          <div>
            <label htmlFor="">Field Label</label>
            <input
              className="border w-full border-black"
              type="text"
              value={nameText.fieldLabel}
              onChange={handleFieldLabelChange}
            />
          </div>
          <div>
            <label htmlFor="">Product Function</label>
            <textarea
              className="border w-full border-black"
              type="text"
              cols="10"
              rows="2"
              value={nameText.fieldName}
              onChange={handleFieldNameChange}
            />
          </div>
          <div>
            <label htmlFor="">Product Details:</label>
            <textarea
              className="border w-full border-black"
              type="text"
              cols="10"
              rows="2"
              value={nameText.fieldData}
              onChange={handleFieldDataChange}
            />
          </div>
          <div>
            <label htmlFor="">NIGP/UNPSC Codes :</label>
            <input
              className="border w-full border-black"
              type="text"
              value={nameText.fieldDes}
              onChange={handleFieldDesChange}
            />
          </div>
        </form>
      </section>
      <footer>
        <button
          className="border border-black px-4 py-1 mt-2"
          onClick={handleAddModule}
        >
          Add
        </button>
      </footer>
    </div>
  );
}

export default Module;
