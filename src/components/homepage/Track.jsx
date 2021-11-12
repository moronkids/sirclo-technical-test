import { Hooks } from "providers";
import React, { useContext, useEffect } from "react";
import Spinner from "assets/img/spinner.gif";
function Track({ song, loading }) {
  const {
    setTabs,
    tabs,
    searchValue,
    setSearchValue,
    setPage_,
    page_,
    page,
    setPage,
    back,
    setBack,
    next,
    setNext,
  } = useContext(Hooks);
  useEffect(() => {
    console.log(loading, "lolo");
  }, [tabs, loading]);
  const reOrder = (page) => {
    console.log(page, "isiny");
    const px = [];
    if (page < 1) {
      for (let index = 1; index < 5; index++) {
        px.push(index);
      }
    } else {
      for (let index = page; index < page + 4; index++) {
        px.push(index);
      }
    }
    if (px[0] !== 1) setBack(true);
    setPage_(px[0]);
    setPage(px);
  };
  return (
    <>
      <div className="border border-gray-200 bg-purple-100 p-5 shadow-xl rounded-b-xl h-3/4 overflow-y-scroll">
        <div className="py-4">
          {loading ? (
            <div className="flex flex-col justify-center content-center w-full h-full items-center">
              <div>
                <img src={Spinner} alt="" srcset="" />
              </div>
              <div className="text-gray-400">processing...</div>
            </div>
          ) : song?.toptracks?.track ? (
            song?.toptracks?.track.map((val, i) => {
              const img = val.image[1]["#text"];
              return (
                <>
                  <div className="group rounded-md border gray-100 h-auto p-2 mb-2 shadow-md bg-white hover:bg-green-200">
                    <div className="grid grid-cols-6 grid-flow-row w-full h-auto auto-cols-auto gap-x-2">
                      <div
                        className="col-auto"
                        style={{
                          maxWidth: "60px",
                        }}
                      >
                        <div
                          className="w-full h-full rounded-md"
                          style={{
                            height: "100%",
                            backgroundImage: `url(${img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></div>
                      </div>
                      <div className="col-start-2 col-end-6  align-middle flex justify-center content-center flex-col">
                        <div className="text-gray-700 group-hover:text-gray-500">
                          {val.name}
                        </div>
                        <div className="text-gray-300 group-hover:text-gray-500">
                          {val.artist.name}
                        </div>
                      </div>
                      <div className="col-start-6 col-end-7"></div>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <div className="flex justify-center content-center text-center w-full h-full text-gray-400">
              sorry track not found.... <br />
              try to pick artist first
            </div>
          )}
        </div>
        {song?.toptracks?.track && (
          <div className="grid grid-cols-4 gap-x-2 pt-4">
            <div className="flex gap-x-2 justify-center items-center col-start-1 col-end-5 border border-gray-200 bg-white p-3 shadow-md rounded-xl overflow-y-scroll mb-4 w-full">
              {page?.map((val, i) => {
                console.log(page, page.length, "masukin");
                return (
                  <>
                    {back === true && i === 0 && (
                      <div
                        class={`text-white rounded-full h-14 w-14 flex items-center justify-center bg-indigo-400`}
                        onClick={() => {
                          setPage_(val);
                          reOrder(val - 3);
                        }}
                      >
                        Back
                      </div>
                    )}
                    {val === page[page.length - 1] && i === page.length - 1 && (
                      <div
                        class="text-white rounded-full h-14 w-14 flex items-center justify-center bg-indigo-400"
                        onClick={() => {
                          setPage_(val);
                          reOrder(val);
                        }}
                      >
                        Next
                      </div>
                    )}
                    {val !== page[page.length - 1] && i !== page.length - 1 && (
                      <div
                        class={`text-white rounded-full h-14 w-14 flex items-center justify-center ${
                          page_ === val
                            ? "bg-gray-700 border-gray-700"
                            : "bg-indigo-400"
                        }`}
                        onClick={() => {
                          setPage_(val);
                        }}
                      >
                        {val}
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Track;
