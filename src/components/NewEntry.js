import React from "react";

import EntryForm from "./EntryForm";
// import "./NewEntry.css";

const NewEntry = (props) => {
  const saveEntryDataHandler = (enteredEntryData) => 
  {
    const entryData = 
    {
      ...enteredEntryData,
      id: Math.random().toString(),
    };
      props.onAddEntry(entryData);
  };

  return (
    <div className="new-entry">
      <EntryForm onSaveEntryData={saveEntryDataHandler} />
    </div>
  );
};

export default NewEntry;
