const SectionOne = () => {
  const text1 = "ILLUMINATING";
  const text2 = " SPIRITS OF THE SPORT";
  const sideText =
    "A relationship as elemental is that of Trunks Company to the game of Polo.";
  const sectionOneImgUrl = "/img/banner-img.png";
  return (
    <>
      <div className="relative h-screen w-full flex-none">
        <img
          className=" h-screen w-full"
          src={sectionOneImgUrl}
          alt="banner-image"
        />
        <div className="absolute top-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute bottom-14 font-cormorant text-white text-2xxl w-full text-center">
          <p className="font-cormorant text-white text-2xxl">{text1}</p>
          <p>{text2}</p>
        </div>
        <div className="absolute bottom-1/2 left-3/4  w-full">
          <p className="running-text-content font-bold font-cormorant text-white text-2xxl">
            {sideText}
          </p>
        </div>
      </div>
    </>
  );
};
export default SectionOne;
