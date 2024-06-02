import React, { useState } from "react";
import "./RadioSelect.css";

const RadioSelect = (props) => {
  const { data, onSelect, question_id, currentAnswer } = props;
  const [selectedItem, setSelectedItem] = useState(currentAnswer);
  return (
    <div
      className="gallery4-container2"
      style={{ display: "flex", flexDirection: "column", gap: 40 }}
    >
      <div style={{ display: "flex", gap: 5 }}>
        {data.slice(0, 3).map((item) => {
          return (
            <div
              className="select_option"
              onClick={() => {
                setSelectedItem(item.value);
                onSelect({ id: question_id, value: item.value });
              }}
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
      <div style={{ display: "flex", gap: 5 }}>
        {data.slice(3, 6).map((item) => {
          return (
            <div
              className="select_option"
              onClick={() => {
                setSelectedItem(item.value);
                onSelect({ id: question_id, value: item.value });
              }}
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
    </div>
  );
};

export default RadioSelect;
