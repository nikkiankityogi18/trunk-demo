const SectionTwo = () => {
  const trunkImgUrl = "/img/section-two-trunk-img.png";
  const horseImgUrl = "/img/section-two-hrs.png";
  const subHeading = "TREASURING PASSION";
  const heading = "THE POLO TRUNK";
  const firstPara =
    " Regal in its bearing and effortless in its elegance,  the Polo Trunk is our tribute befitting the game of kings.";
  const secondPara =
    " A seamless blend of indigenous design and modern functionality, this trunk is not just a product, its an ideal representation of our brand persona and a testament to  the beauty of bespoke design.";
  return (
    <>
      <div className="h-screen w-full flex-none bg-white">
        <div className="max-w-section-screen h-full mx-auto my-16">
          <div className="flex flex-col justify-between h-full w-full">
            <div className="relative w-full bg-trunks-para-gray">
              <div className="py-14 pl-20">
                <p className="font-proxima-nova font-normal text-xl text-gray">
                  {subHeading}
                </p>
                <h1 className="text-head-blue font-medium font-cormorant text-2xxl mt-2">
                  {heading}
                </h1>
                <hr className="border-t-4 border-red-700 w-32 my-3 " />
                <div className="mt-12 font-proxima-nova text-sm text-para-text-color w-100">
                  <p className=" my-4 font-proxima-nova text-sm text-para-text-color w-100">
                    {firstPara}
                  </p>
                  <p>{secondPara}</p>
                </div>
              </div>
              <img
                className="absolute top-16 right-32"
                src={trunkImgUrl}
                alt="trunk-image"
              />
            </div>
            <div>
              <img src={horseImgUrl} alt="Horse Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SectionTwo;
