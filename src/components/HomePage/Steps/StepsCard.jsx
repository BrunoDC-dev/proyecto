import React from "react";

const StepsCard = (props) => {
  return (
    <div class="steps_card">
      <div class="steps_card-number">{props.number}</div>
      <h3 class="steps_card-title">{props.title}</h3>
      <p class="steps_card-description">{props.desc}</p>
    </div>
  );
};
export default StepsCard;
