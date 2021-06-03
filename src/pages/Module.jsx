import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addModule } from "../config/action";
import { detailModuleSelector } from "../config/selectors";

function Module(props) {
  const [nameText, setNameText] = useState({
    fieldLabel: "",
    fieldName: "",
    fieldData: "",
    fieldDes: "",
  });
  const { id } = props.match.params;

  const dispatch = useDispatch();
  const history = useHistory();
  const moduleSelected = useSelector(detailModuleSelector(id));
  console.log(
    "🚀 ~ file: Module.jsx ~ line 19 ~ Module ~ moduleSelected",
    moduleSelected
  );

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
        moduleSelected,
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
            <label htmlFor="">Field Name</label>
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
            <label htmlFor="">Field Data</label>
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
            <label htmlFor="">Field Description</label>
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
