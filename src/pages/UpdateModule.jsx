import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { changeModule } from '../config/action';
import { detailModuleSelector } from '../config/selectors';

function Module(props) {
  // eslint-disable-next-line react/destructuring-assignment
  const { id } = props.match.params;
  const dispatch = useDispatch();
  const history = useHistory();
  const moduleSelected = useSelector(detailModuleSelector(id));
  console.log('🚀 ~ file: UpdateModule.jsx ~ line 13 ~ Module ~ moduleSelected', moduleSelected);
  const goBack = () => {
    history.goBack();
  };
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
        moduleSelected.id,
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
    goBack();
  };

  return (
    <div className="h-screen p-5 w-full">
      <header className="border-b border-black mb-6 pb-3">
        <span>Add/Update Modules</span>
      </header>
      <section>
        <form action="">
          <div>
            <p>Field Label : {moduleSelected.label}</p>
            <input
              className="border w-full border-black"
              type="text"
              value={moduleText.fieldLabel}
              onChange={handleFieldLabelChange}
            />
          </div>
          <div>
            <p>Field Name {moduleSelected.name}</p>
            <textarea
              className="border w-full border-black"
              type="text"
              cols="10"
              rows="2"
              value={moduleText.fieldName}
              onChange={handleFieldNameChange}
            />
          </div>
          <div>
            <p>Field Data: {moduleSelected.data}</p>
            <textarea
              className="border w-full border-black"
              type="text"
              cols="10"
              rows="2"
              value={moduleText.fieldData}
              onChange={handleFieldDataChange}
            />
          </div>
          <div>
            <p>Field Description: {moduleSelected.des}</p>
            <input
              className="border w-full border-black"
              type="text"
              value={moduleText.fieldDes}
              onChange={handleFieldDesChange}
            />
          </div>
        </form>
      </section>
      <footer>
        <button
          type="button"
          className="border border-black px-4 py-1 mt-2"
          onClick={handleChangeModule}
        >
          Update
        </button>
      </footer>
    </div>
  );
}

export default Module;
