import { useRef } from "react";
import Input from "./input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd , onCancel }) {
  const modal= useRef();
  const title = useRef();
  const descripton = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescriotion = descripton.current.value;
    const enteredDueDate = dueDate.current.value;
    if (
      enteredTitle.trim() === "" ||
      enteredDescriotion.trim() === "" ||
      enteredDueDate.trim() === ""
    ){
modal.current.open();
return;
    }
      onAdd({
        title: enteredTitle,
        description: enteredDescriotion,
        dueDate: enteredDueDate,
      });
  }
  return (
    <>
    <Modal ref={modal} buttonCaption='okay'>
      <h2  className='text-xl font-bold text-stone-700 mt-4 my-4' >Invalid Input</h2>
      <p className='text-stone-600 mb-4'>Oops ... looks like you forgot enter a value</p>
      <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input filed.</p>
    </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950" 
          onClick={onCancel}>
            Cancel
          </button>
        </li>
        <li>
          <button
            className="bg-stone-800 text-stone-50 px-6 py-2 rounded-md hover:bg-stone-950 "
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={title} label="Title" />
        <Input ref={descripton} label="Description" textarea />
        <Input ref={dueDate} label="Due Date" />
      </div>
    </div>
    </>
  );
}
