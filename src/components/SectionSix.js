const SectionSix = () => {
  const sixSectionFirstImgUrl = "/img/sixth-section-first-img.png";
  const sixSectionSecondImgUrl = "/img/sixth-section-second-img.png";

  const paraHeading = "HANDLE";
  const paraContet =
    "The Arch Bar Cabinet is a sculptural piece with the soul of a soirée encompassed within. The quintessential arches extend from its meticulous illumination, a zeal that compels partakers to surrender to the spirits residing within. ";
  return (
    <>
      <div className="h-screen w-full flex-none">
        <div className="max-w-screen-xxl m-auto h-full flex ">
          <div className="h-full mx-40 flex flex-col">
            <div className="h-1/2 flex items-end">
              <img src={sixSectionFirstImgUrl} alt="image" />
            </div>
            <div className="mt-20">
              <h2 className="font-cormorant font-bold text-3xl text-head-blue">
                {paraHeading}
              </h2>
              <hr className="border-t-3 border-hr-red w-28 my-4" />
              <p className="font-proxima-nova w-72 font-normal text-sm text-para-text-color">
                {paraContet}
              </p>
            </div>
          </div>
          <div className="flex items-end my-10 ml-40">
            <img src={sixSectionSecondImgUrl} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};
export default SectionSix;
