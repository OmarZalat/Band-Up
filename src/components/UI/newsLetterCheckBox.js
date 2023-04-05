import React, { useState } from "react";
function NewsletterCheckbox({ isChecked, setIsChecked }) {
  return (
    <div>
      <label className="newsLetterCheckBox">
        <input type="checkbox" checked={isChecked} onChange={setIsChecked} />
        Subscribe to our newsletter
      </label>
    </div>
  );
}

export default NewsletterCheckbox;
