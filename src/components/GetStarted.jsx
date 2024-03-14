import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { TbAwardFilled } from "react-icons/tb";
import { GrCertificate } from "react-icons/gr";
import { GiTiedScroll } from "react-icons/gi";
import { GiGraduateCap } from "react-icons/gi";
import TemplateOne from "./../assets/certificate-sample/two_signature.webp";
import TemplateTwo from "./../assets/certificate-sample/three_signature.webp";
import TemplateThree from "./../assets/certificate-sample/four_signature.webp";
import ImageIcon from "./../assets/image_icon.webp";

const GetStarted = ({ openModal, closeModal }) => {
  const [modalHandler, setModalHandler] = useState(false);
  const [modalName, setModalName] = useState("SELECT CATEGORY");
  const [currentPath, setCurrentPath] = useState("path1");
  const [selectedFile, setSelectedFile] = useState("");

  const pathHandler = (data) => {
    setCurrentPath(data);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  useEffect(() => {
    setModalHandler(openModal);
  }, [openModal]);

  return (
    <>
      <div className={`modal-wrapper ${modalHandler ? "show" : ""}`}>
        {modalHandler && (
          <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-40">
            <div className="absolute inset-0" />
            <div
              className="md:w-[520px] w-[90%] bg-white flex flex-col mx-auto rounded-[15px]
                        shadow-md modal-container p-7 border-t-[5px] border-[#F5D45E]"
            >
              <div className="flex flex-row items-center mb-4">
                <p className="text-center w-full font-bold text-[24px] ml-4">
                  {modalName}
                </p>
                <button
                  className="cursor-pointer rounded-[50%] hover:bg-slate-200 z-10 mt-[-2rem] mr-[-0.5rem]"
                  onClick={closeModal}
                >
                  <IoCloseOutline className="text-[35px]" />
                </button>
              </div>
              {currentPath === "path1" ? (
                <>
                  <div className="flex flex-col w-full">
                    <section className="flex flex-wrap gap-2 w-full h-full justify-center">
                      <button
                        className="relative bg-[#ED6559] w-[48%] h-[170px] flex flex-col justify-end cursor-pointer rounded-[10px] p-2"
                        onClick={() => {
                          pathHandler("path2");
                          setModalName("TEMPLATE FORMAT")
                        }}
                      >
                        <GiGraduateCap className="absolute text-[80px] top-2 right-2 text-[#a23a31]" />
                        <p className="text-[18px] font-bold text-white">
                          Academic Excellence
                        </p>
                      </button>
                      <button
                        className="relative bg-[#5AC648] w-[48%] h-[170px] flex flex-col justify-end cursor-pointer rounded-[10px] p-2"
                        onClick={() => {
                          pathHandler("path2");
                          setModalName("TEMPLATE FORMAT")
                        }}
                      >
                        <GrCertificate className="absolute text-[70px] top-2 right-2 text-[#3d8b2f]" />
                        <p className="text-[18px] font-bold text-white">
                          Completion
                        </p>
                      </button>
                      <button
                        className="relative bg-[#a057ff] w-[48%] h-[170px] flex flex-col justify-end cursor-pointer rounded-[10px] p-2"
                        onClick={() => {
                          pathHandler("path2");
                          setModalName("TEMPLATE FORMAT")
                        }}
                      >
                        <TbAwardFilled className="absolute text-[70px] top-2 right-2 text-[#6929bdeb]" />
                        <p className="text-[18px] font-bold text-white">
                          Best in Subject
                        </p>
                      </button>
                      <button
                        className="relative bg-[#F5D45E] w-[48%] h-[170px] flex flex-col justify-end cursor-pointer rounded-[10px] p-2"
                        onClick={() => {
                          pathHandler("path2");
                          setModalName("TEMPLATE FORMAT")
                        }}
                      >
                        <GiTiedScroll className="absolute text-[70px] top-2 right-2 text-[#c4a843]" />
                        <p className="text-[18px] font-bold text-white">
                          Deploma
                        </p>
                      </button>
                    </section>
                  </div>
                  <div className="flex flex-row justify-end mt-4 mr-2"></div>
                </>
              ) : currentPath === "path2" ? (
                <>
                  <div
                    className="relative flex w-full h-[120px] border-[3px] border-white hover:border-[#47A2FF] hover:shadow-sm shadow-[#47A2FF] rounded-md cursor-pointer mb-[4px]"
                    onClick={() => {
                      pathHandler("path3");
                    }}
                  >
                    <div
                      className="absolute h-full w-full"
                      style={{ backgroundColor: "rgba(71, 162, 255, 0.1)" }}
                    />
                    <img
                      src={TemplateOne}
                      className=" object-cover w-full rounded-md"
                      style={{ objectPosition: "right 0px bottom -1rem" }}
                    />
                    <p className="absolute bottom-1 left-2 font_sansita font-bold text-[16px] md:text-[21px] text-[#47A2FF] shadow-text">
                      TWO SIGNATURE
                    </p>
                  </div>
                  <div
                    className="relative flex w-full h-[120px] border-[3px] border-white hover:border-[#47A2FF] hover:shadow-sm shadow-[#47A2FF] rounded-md cursor-pointer  mb-[4px]"
                    onClick={() => {
                      pathHandler("path3");
                    }}
                  >
                    <div
                      className="absolute h-full w-full"
                      style={{ backgroundColor: "rgba(71, 162, 255, 0.1)" }}
                    />
                    <img
                      src={TemplateTwo}
                      className=" object-cover w-full rounded-md"
                      style={{ objectPosition: "right 0px bottom -1rem" }}
                    />
                    <p className="absolute bottom-1 left-2 font_sansita font-bold text-[16px] md:text-[21px] text-[#47A2FF] shadow-text">
                      THREE SIGNATURE
                    </p>
                  </div>
                  <div
                    className="relative flex w-full h-[120px] border-[3px] border-white hover:border-[#47A2FF] hover:shadow-sm shadow-[#47A2FF] rounded-md cursor-pointer  mb-[4px]"
                    onClick={() => {
                      pathHandler("path3");
                    }}
                  >
                    <div
                      className="absolute h-full w-full"
                      style={{ backgroundColor: "rgba(71, 162, 255, 0.1)" }}
                    />
                    <img
                      src={TemplateThree}
                      className=" object-cover w-full rounded-md"
                      style={{ objectPosition: "right 0px bottom -1rem" }}
                    />
                    <p className="absolute bottom-1 left-2 font_sansita font-bold text-[16px] md:text-[21px] text-[#47A2FF] shadow-text">
                      FOUR SIGNATURE
                    </p>
                  </div>
                  <div className="flex flex-row justify-end mt-2 mb-[-1rem]">
                    <button
                      className="py-2 bg-[#F5D45E] w-[150px] text-white font-bold rounded-md"
                      type="submit"
                      onClick={() => {
                        pathHandler("path1");
                        setModalName("SELECT CATEGORY")
                      }}
                    >
                      BACK
                    </button>
                  </div>
                </>
              ) : currentPath === "path3" ? (
                <>
                  <div className="z-10 h-[350px]">
                    <div
                      className={`flex flex-col border-black border-[2px] ${
                        selectedFile
                          ? "border-solid"
                          : "border-dashed justify-center"
                      } rounded-[20px] h-[87%] items-center`}
                    >
                      {selectedFile ? (
                        <>
                          <div className="flex flex-row w-full mt-3 items-center pr-2">
                            <input
                              className="w-full mt-2 px-5 bg-transparent border-none outline-none"
                              readOnly
                              value={selectedFile.name}
                              onFocus={(e) => e.target.blur()}
                            />
                            <span
                              className="mt-[6px] cursor-pointer"
                              onClick={() => {
                                setSelectedFile("");
                              }}
                            >
                              <IoCloseOutline className="text-[25px] bg-transparent" />
                            </span>
                          </div>
                        </>
                      ) : (
                        <>
                          <img
                            src={ImageIcon}
                            className="h-[90px]"
                            alt="Image Icon"
                          />
                          <label
                            htmlFor="file-upload"
                            className="hover:bg-[#47A2FF] font-bold hover:text-white text-[#47A2FF] border-[2px] border-[#47A2FF] p-2 px-6 cursor-pointer rounded-md mt-5"
                          >
                            Choose File
                          </label>
                          <input
                            id="file-upload"
                            type="file"
                            accept=".jpg,.jpeg,.png"
                            className="hidden"
                            onChange={handleFileChange}
                          />
                          <p className="mt-2 text-[14px] font-bold text-center">
                            Drag or attach a file here
                          </p>
                          <p className="mt-[1px] text-[13px]">
                            (JPG, JPEG, PNG only)
                          </p>
                        </>
                      )}
                    </div>
                    <div className="flex flex-row justify-end py-2 mt-2 gap-2">
                  <button
                    className="py-2 border-[#F5D45E] w-[150px] text-[#F5D45E] border-[2px] font-bold rounded-md"
                    type="submit"
                    onClick={() => {
                      pathHandler("path2");
                    }}
                  >
                    BACK
                  </button>
                  <button
                    className="py-2 bg-[#F5D45E] w-[150px] text-white font-bold rounded-md"
                    type="submit"
                    onClick={() => {
                      pathHandler("path4");
                    }}
                  >
                    NEXT
                  </button>
                </div>
                  </div>
                </>
              ) : undefined}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GetStarted;
