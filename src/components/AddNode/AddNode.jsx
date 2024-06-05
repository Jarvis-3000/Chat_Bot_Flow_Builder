import "./AddNode.css";

import Add from "../../assets/add.svg";

function AddNode() {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className="add-message"
      draggable
      onDragStart={(event) => onDragStart(event, "custom")}
    >
      <img src={Add} alt="add node icon" draggable={false} />
      <span draggable={false}>Message</span>
    </div>
  );
}

export default AddNode;
