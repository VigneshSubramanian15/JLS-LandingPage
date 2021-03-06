import Image from "next/image";
import React from "react";

export default function PopupModel({
  children,
  className,
  displayPopup,
  hidePopup,
  popupErrorMessage,
  ...prop
}) {
  return (
    <>
      <button {...prop} className={className}>
        {children}
      </button>
      {displayPopup && (
        <div onClick={hidePopup} className="PopupModel">
          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
              <div className="card">
                <div className="text-right cross">
                  {" "}
                  <i className="fa fa-times"></i>{" "}
                </div>
                <div className="card-body text-center">
                  {" "}
                  <Image
                    height={200}
                    width={200}
                    alt={`trophy.png`}
                    src="https://img.icons8.com/bubbles/200/000000/trophy.png"
                  />
                  <h4>CONGRATULATIONS!</h4>
                  <p className="m-1 px-10">
                    {`You've been ${
                      popupErrorMessage ? popupErrorMessage : ""
                    } added to our early access list.`}{" "}
                    <br /> we will keep you posted.
                  </p>
                  <button className="px-4 m-1 border-l-0 bg-black text-white border-2 border-black rounded mt-1 w-full sm:w-auto sm:mt-0 sm:rounded-bl-none sm:rounded-tl-none min-w-fit p-1">
                    CONTINUE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        // <div onClick={hidePopup} className="PopupModel">
        //   <div className=" m-2 content">
        //     <Image
        //       src="https://img.icons8.com/bubbles/200/000000/trophy.png"
        //       alt="trophy"
        //       width={200}
        //       height={200}
        //     />
        //     <h2 className=" w-full text-3xl text-left font-bold">
        //       Congraglations!
        //     </h2>
        //     <div className="mt-2">
        //       <p className="text-sm text-gray-500">
        //         {`You've been added to our early access list. we will keep you
        //         posted about the updated`}
        //       </p>
        //     </div>
        //   </div>
        // </div>
      )}
    </>
  );
}
