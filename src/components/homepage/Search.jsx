import { Hooks } from "providers";
import React, { useContext, useEffect } from "react";
import Spinner from "assets/img/spinner.gif";
function Track({ search, loading, searchTrack, searchTrackLoad }) {
  const { setTabs, tabs, searchValue, setSearchValue } = useContext(Hooks);
  useEffect(() => {
    console.log(searchTrack, search, "lolox");
  }, [tabs, loading, search]);
  return (
    <>
      <div
        data-testid="search-component"
        className="border border-gray-200 text-gray-400 bg-purple-100 p-5 shadow-xl rounded-b-xl h-3/4 overflow-y-scroll"
      >
        Search Keyword :&nbsp;{searchValue}
        {tabs === "artist" && (
          <div className="py-4">
            {loading && tabs === "artist" ? (
              <div className="flex flex-col justify-center content-center w-full h-full items-center">
                <div>
                  <img src={Spinner} alt="" srcset="" />
                </div>
                <div className="text-gray-400">processing...</div>
              </div>
            ) : search?.results?.artistmatches?.artist ? (
              search?.results?.artistmatches?.artist.map((val, i) => {
                const img = val.image[1]["#text"];
                return (
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
                        <div className="text-gray-300 group-hover:text-gray-500 whitespace-nowrap truncate">
                          {val.url}
                        </div>
                      </div>
                      <div className="col-start-6 col-end-7"></div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex justify-center content-center text-center w-full h-full text-gray-400">
                sorry artist not found.... <br />
                try to pick artist or input another
              </div>
            )}
          </div>
        )}
        {tabs === "track" && (
          <div className="py-4">
            {searchTrackLoad && tabs === "track" ? (
              <div className="flex flex-col justify-center content-center w-full h-full items-center">
                <div>
                  <img src={Spinner} alt="" srcset="" />
                </div>
                <div className="text-gray-400">processing...</div>
              </div>
            ) : searchTrack?.results?.trackmatches?.track ? (
              searchTrack?.results?.trackmatches?.track.map((val, i) => {
                const img = val.image[1]["#text"];
                return (
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
                            height: "60px",
                            backgroundImage: `url(${img})`,
                            backgroundSize: "cover",
                          }}
                        ></div>
                      </div>
                      <div className="col-start-2 col-end-6  align-middle flex justify-center content-center flex-col">
                        <div className="text-gray-700 group-hover:text-gray-500">
                          {val.name}
                        </div>
                        <div className="text-gray-300 group-hover:text-gray-500 whitespace-nowrap break-words truncate">
                          {val.artist}
                        </div>
                      </div>
                      <div className="col-start-6 col-end-7"></div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex justify-center content-center text-center w-full h-full text-gray-400">
                sorry track not found.... <br />
                try to pick artist first or input keyword again
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Track;
