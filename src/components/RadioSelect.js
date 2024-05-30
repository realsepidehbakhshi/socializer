import React, { useState } from "react";
import "./RadioSelect.css";

const RadioSelect = (props) => {
  const { data } = props;
  const [selectedItem, setSelectedItem] = useState();
  return (
    <div className="gallery4-container2">
      {data.map((item) => {
        return (
          <div
            className="select_option"
            onClick={() => setSelectedItem(item.value)}
          >
            <div
              className={`select_circle ${
                item.value === selectedItem ? "select_circle_active" : ""
              }`}
            />
            <span className="gallery4-text2">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default RadioSelect;
