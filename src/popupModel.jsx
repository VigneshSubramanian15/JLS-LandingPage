import React from "react";

export default function PopupModel({
  children,
  className,
  displayPopup,
  hidePopup,
  ...prop
}) {
  return (
    <>
      <button {...prop} className={className}>
        {children}
      </button>
      {displayPopup && (
        <div onClick={hidePopup} className="PopupModel">
          <div className=" m-2 content">
            <h2 className=" w-full text-3xl text-left font-bold">
              Congraglations!
            </h2>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                {`You've been added to our early access list. we will keep you
                posted about the updated`}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
