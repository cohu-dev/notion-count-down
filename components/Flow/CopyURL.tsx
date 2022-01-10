import React from "react";
import { AiOutlineCheckCircle, AiOutlineCopy } from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";

type Props = {
  url: string;
};

const CopyURL: React.VFC<Props> = ({ url }) => {
  return (
    <div className="flex relative py-5 md:py-10 w-2/3 ml-5 md:ml-10">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">
        2
      </div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center">
          <AiOutlineCheckCircle className="w-12 h-12" />
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
            URLをコピーしよう！
          </h2>
          <CopyToClipboard text={url}>
            <button className="flex items-center  text-center py-2 px-4 rounded  focus:outline-none bg-green-500 hover:bg-green-700 text-white font-bold ">
              <AiOutlineCopy className="mr-2" />
              コピー
            </button>
          </CopyToClipboard>
          {url}
        </div>
      </div>
    </div>
  );
};

export default CopyURL;
