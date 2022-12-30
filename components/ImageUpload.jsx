import React from "react";

function ImageUpload() {
  return (
    <>
      <div className="mt-10 mx-3">
        <div className="main bg-black p-5 w-fit text-white rounded-md shadow-lg shadow-gray-200">
          <div className="top p-2 border-4 border-dotted rounded-2xl text-center">
            <label
              htmlFor="photo"
              className="flex justify-center w-[300px] text-center"
            >
              <div className="">icon</div>
              <p className="w-[120px]">
                Profile Image Update ID Proof Click Here
              </p>
            </label>
            <input type="file" className="Images hidden" id="photo" />
          </div>
          <p className="text-center my-5">OR</p>
          <div className="bot flex">
            <div className="bottom mb-4">
              <div className="camera flex border-2 border-gray-200 p-2 w-52 rounded-sm">
                <div className="">icon</div>
                Open web camera
              </div>
              <div className=" w-44 m-auto upload bg-green-400 p-2 rounded-md text-center text-[14px] text-black">
                Upload Document
              </div>
            </div>
          </div>
          <p className="">*.jpg,.jpeg,.png</p>
        </div>
      </div>
    </>
  );
}

export default ImageUpload;
