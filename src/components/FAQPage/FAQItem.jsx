import React, { useState } from "react";
const FAQItem = (props) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div
      class="questions_item"
      onClick={() => setAccordionOpen(!accordionOpen)}
    >
      <header class="questions_header" aria-expanded={accordionOpen}>
        <i class="bx bx-plus questions_icon"></i>
        <h3 class="questions_item-title">{props.title}</h3>
      </header>
      <div class="questions_content" aria-expanded={accordionOpen}>
        <p class="questions_description">{props.desc}</p>
      </div>
    </div>
  );
};
export default FAQItem;
