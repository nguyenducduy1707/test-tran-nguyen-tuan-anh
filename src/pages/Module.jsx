import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addModule } from '../config/action';
import { detailModuleSelector } from '../config/selectors';

function Module(props) {
  const [nameText, setNameText] = useState({
    label: '',
    name: '',
    data: '',
    des: '',
  });
  // eslint-disable-next-line react/destructuring-assignment
  const { id } = props.match.params;

  const dispatch = useDispatch();
  const history = useHistory();
  const moduleSelected = useSelector(detailModuleSelector(id));

  const goBack = () => {
    history.goBack();
  };
  const handlelabelChange = (event) => {
    setNameText({
      ...nameText,
      label: event.target.value,
    });
  };

  const handlenameChange = (event) => {
    setNameText({
      ...nameText,
      name: event.target.value,
    });
  };

  const handledataChange = (event) => {
    setNameText({
      ...nameText,
      data: event.target.value,
    });
  };

  const handledesChange = (event) => {
    setNameText({
      ...nameText,
      des: event.target.value,
    });
  };

  const handleAddModule = () => {
    dispatch(addModule(moduleSelected, nameText.label, nameText.name, nameText.data, nameText.des));
    setNameText({
      label: '',
      name: '',
      data: '',
      des: '',
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
            <p>Field Label</p>
            <input
              className="border w-full border-black"
              type="text"
              value={nameText.label}
              onChange={handlelabelChange}
            />
          </div>
          <div>
            <p>Field Name</p>
            <textarea
              className="border w-full border-black"
              type="text"
              cols="10"
              rows="2"
              value={nameText.name}
              onChange={handlenameChange}
            />
          </div>
          <div>
            <p>Field Data</p>
            <textarea
              className="border w-full border-black"
              type="text"
              cols="10"
              rows="2"
              value={nameText.data}
              onChange={handledataChange}
            />
          </div>
          <div>
            <p>Field Description</p>
            <input
              className="border w-full border-black"
              type="text"
              value={nameText.des}
              onChange={handledesChange}
            />
          </div>
        </form>
      </section>
      <footer>
        <button
          type="button"
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
