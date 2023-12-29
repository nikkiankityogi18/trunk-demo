const SectionFour = () => {
  const sectionThirdTrunkImgUrl = "/img/section-third-trunk.png";
  const sectionThirdHorseImgUrl = "/img/third-section-polo-img.png";

  const firstHeading = "CRYSTALWARE + POLO";
  const firstPara =
    "The Arch Bar Cabinet is a sculptural piece with the soul of a   soirée encompassed within. The quintessential arches extend  from its meticulous illumination, a zeal that compels  partakers to surrender to the spirits residing within.";
  const secondHeading = "POLO EMBLEM";
  const secondPara =
    "The Arch Bar Cabinet is a sculptural piece with the soul of a  soirée encompassed within. The quintessential arches extend from its meticulous illumination, a zeal that compels partakers to surrender to the spirits residing within. An indulgent yet  sophisticated frame is elegantly composed with niches and recesses for hand-cut crystalware,";
  return (
    <>
      <div className="h-screen w-full flex-none">
        <div className="max-w-screen-xxl mx-auto relative h-full ">
          <div className="flex justify-between flex-col h-full w-full">
            <div className="flex ">
              <div className="absolute top-12 left-0">
                <img src={sectionThirdTrunkImgUrl} alt="trunk" />
              </div>
              <div className="flex justify-end w-240 bg-trunks-para-gray ml-96 py-24">
                <div className="mr-16">
                  <h2 className="font-cormorant font-bold text-3xl text-head-blue">
                    {firstHeading}
                  </h2>
                  <hr className="border-t-3 border-hr-red w-28 my-4" />
                  <p className="font-proxima-nova font-normal text-sm w-88 text-para-text-color">
                    {firstPara}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-128">
                <h2 className="font-cormorant font-bold text-3xl text-head-blue">
                  {secondHeading}
                </h2>
                <hr className="border-t-3 border-hr-red w-28 my-4" />
                <p className="font-proxima-nova font-normal text-sm text-para-text-color">
                  {secondPara}
                </p>
              </div>
              <img src={sectionThirdHorseImgUrl} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SectionFour;
