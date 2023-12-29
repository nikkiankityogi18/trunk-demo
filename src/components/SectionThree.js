import React, { lazy, Suspense } from "react";
const SectionThree = () => {
  const gifUrl = "/img/gifpolo.gif";

  return (
    <>
      <div className="h-screen w-full flex-none">
        <img src={gifUrl} alt="Polo-gif" loading="lazy" />
      </div>
    </>
  );
};
export default SectionThree;
