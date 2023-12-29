const SectionFive = () => {
  const fifthSectionGlassImgUrl = "/img/fifth-section-glass.png";
  const fifthSectionGifUrl = "/img/fifth-section-gif.gif";

  return (
    <>
      <div className="h-screen w-full flex-none">
        <div className="flex h-full">
          <div className="flex w-full h-full items-end justify-center">
            <img
              className="mb-20 "
              src={fifthSectionGlassImgUrl}
              alt="glass-image"
            />
          </div>
          <div className="h-full w-full">
            <img src={fifthSectionGifUrl} alt="gif" />
          </div>
        </div>
      </div>
    </>
  );
};
export default SectionFive;
