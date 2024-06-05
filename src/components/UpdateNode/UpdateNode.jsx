/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./UpdateNode.css";

import ArrowBack from "../../assets/arrow-back.svg";

const UpdateNode = ({ selectedNode, onBack, onUpdateMessage }) => {
  const [label, setLabel] = useState("");

  useEffect(() => {
    setLabel(selectedNode.data.label);
  }, [selectedNode.id]);

  const handleUpdate = (event) => {
    setLabel(event.target.value);
    onUpdateMessage(event.target.value);
  };

  return (
    <div className="update-node">
      {/* top */}
      <div className="update-header">
        <img src={ArrowBack} alt="arrow back" onClick={onBack} />
        <span>Update Message</span>
      </div>
      {/* update the message */}
      <div className="update-textarea">
        <label>Text:</label>
        <textarea value={label} onChange={handleUpdate} />
      </div>
    </div>
  );
};

export default UpdateNode;
