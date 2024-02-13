import React from "react";

function BirthdayGreeting() {
  return (
    <div className="mt-8 text-center md:text-left md:ms-8 text-2xl text-secondary-dark drop-shadow">
      <div className="text md:flex">
        <p className="text-pimary-light">Dear brother,</p>
        <p>you are beautiful.</p>
        <p>Bíodh lá lovely agat.</p>
        
      </div>
      <p>Grá,</p>
      <img src="/fi.svg" alt="Fi signature" className="md:w-48 mt-2" />
    </div>
  );
}

export default BirthdayGreeting;
