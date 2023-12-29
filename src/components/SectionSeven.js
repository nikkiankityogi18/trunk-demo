const SectionSeven = () => {
  const sectionSevenFirstImgUrl = "/img/section-seven-shadow-first-img.png";
  const sectionSevenSecondImgUrl = "/img/section-seven-second-trunk-img.png";
  const sixSectionSecondImgUrl = "/img/sixth-section-second-img.png";
  return (
    <>
      <div className="h-screen w-full flex-none">
        <div className="flex h-full w-full">
          <div className="flex w-full h-full relative">
            <img src={sectionSevenFirstImgUrl} alt="banner-img" />
            <img
              className="absolute bottom-40 left-1/4 "
              src={sectionSevenSecondImgUrl}
              alt="banner-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default SectionSeven;
