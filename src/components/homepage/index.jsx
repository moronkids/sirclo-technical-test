import React, { useCallback, useContext, useEffect, useState } from "react";
import Track from "components/homepage/Track";
import Artist from "components/homepage/Artist";
import Search from "components/homepage/Search";
import Magnify from "assets/img/iconSearch.png";
import { Hooks } from "providers";
import { debounce } from "lodash";
function Index({
  data,
  artist,
  dataLoad_,
  artistLoad_,
  searchResult,
  searchResultLoad,
  searchTrack,
  searchTrackLoad,
}) {
  const {
    setTabs,
    tabs,
    searchValue,
    setSearchValue,
    search,
    setSearch,
    page_,
    setPage_,
    page,
    setPage,
    back,
    setBack,
    next,
    setNext,
  } = useContext(Hooks);
  const delayedHandleChange = debounce((eventData) => {
    setSearch(true);
    setSearchValue(eventData);
  }, 800);

  const [currentPage, setCurrentPage] = useState();

  const handleChange = (e) => {
    delayedHandleChange(e);
  };
  useEffect(() => {
    if (tabs === "artist") {
      // alert("0");
      if (search) {
      } else {
        // alert("1.1");
        // console.log(parseInt(artist?.topartists["@attr"]?.page), artist.topartist['@att']);
        if (
          parseInt(artist?.topartists["@attr"]?.page) > 0 &&
          parseInt(artist?.topartists["@attr"]?.page) === 1
        ) {
          // alert("1");
          setCurrentPage(parseInt(artist?.topartists["@attr"]?.page));
          const pages = [];
          for (let i = parseInt(artist?.topartists["@attr"].page); i < 5; i++) {
            pages.push(i);
          }
          if (pages[0] === 1) {
            setBack(false);
          } else {
            setBack(true);
          }
          if (pages[0] === 1) setPage_(1);
          setPage(pages);
        }
      }
    }
  }, [data, artist, tabs]);
  return (
    <div>
      <div className="flex justify-center content-center sm:p-10 p-2">
        <div className="sm:w-5/12 w-full h-screen over-scroll-auto">
          {/* tabs */}
          <div className="grid grid-cols-4 gap-x-2">
            <div className="col-start-1 col-end-5 border border-gray-200 bg-white p-3 shadow-md rounded-xl overflow-y-scroll mb-4 w-full">
              <div className="grid grid-cols-4">
                <div className="col-start-1 col-end-4">
                  <input
                    id="search-component"
                    type="text"
                    className="h-8 outline-none text-gray-700 w-full"
                    placeholder="Search artis or music....."
                    onChange={(e) => handleChange(e.target.value)}
                    onKeyDown={(e) => handleChange(e.target.value)}
                  />
                </div>
                <div className="col-start-4 col-end-5 flex justify-end align-middle content-center items-center">
                  <img src={Magnify} alt="" srcset="" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 place-content-center text-center gap-x-2 ">
            <div
              className={`p-2 texy-center rounded-t-xl border border-b-0 border-gray-200 ${
                tabs === "track" &&
                "text-white font-bold text-lg p-2 shadow-xl  bg-green-400"
              }`}
              onClick={() => {
                setTabs("track");
                setSearch(false);
              }}
            >
              Top Music
            </div>
            <div
              className={`p-2 texy-center rounded-t-xl border border-b-0 border-gray-200 ${
                tabs === "artist" &&
                "text-white font-bold text-lg p-2 shadow-xl  bg-green-400"
              }`}
              onClick={() => {
                setTabs("artist");

                setSearch(false);
              }}
            >
              Top Artist
            </div>
          </div>
          {/* conditional */}
          {search === false ? (
            tabs === "artist" ? (
              <Artist artist={artist} loading={dataLoad_} />
            ) : (
              <Track song={data} loading={dataLoad_} />
            )
          ) : (
            <Search
              search={searchResult}
              loading={searchResultLoad}
              searchTrack={searchTrack}
              //   loadingTrack={searchTrackLoad}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Index;
