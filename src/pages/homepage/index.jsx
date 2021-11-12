import React, { useContext, useEffect } from "react";
import Home from "components/homepage";
import { useQuery } from "react-query";
import {
  getTopArtist,
  getTopTrack,
  searchArtist,
  searchTrack,
} from "helpers/Api";
import { Hooks } from "providers";
function Index() {
  const {
    setTabs,
    tabs,
    searchValue,
    setSearchValue,
    search,
    dataSearch,
    setDataSearch,
    page_,
  } = useContext(Hooks);

  //fetch api
  const { isFetching, isError, data, error, refetch } = useQuery(
    ["getTopTrack", page_],
    async (e) => getTopTrack(searchValue, page_),
    {
      enabled: false,
    }
  );
  const {
    isFetching: loadArtist,
    isError: errorArtist,
    data: dataArtist,
    error: errArtist,
    refetch: refetchArtist,
  } = useQuery(["getTopArtist", page_], async (e) => getTopArtist(page_), {});
  const {
    isFetching: fetchSearchArtist,
    isError: errorSearchArtist,
    data: dataSearchArtist,
    error: errSearchArtist,
    refetch: refetchSearchArtist,
  } = useQuery("getSearchArtist", async (e) => searchArtist(searchValue), {
    enabled: false,
  });
  const {
    isFetching: fetchSearchTrack,
    isError: errorSearchTrack,
    data: dataSearchTrack,
    error: errSearchTrack,
    refetch: refetchSearchTrack,
  } = useQuery("getSearchTrack", async (e) => searchTrack(searchValue), {
    enabled: false,
  });
  //fetch api
  useEffect(() => {
    if (searchValue !== "default") {
      if (search) {
        refetchSearchArtist();
        refetchSearchTrack();
      } else {
        refetch();
      }
    }
  }, [searchValue, data]);
  return (
    <div>
      <Home
        data={data}
        artist={dataArtist}
        dataLoad_={isFetching}
        artistLoad_={loadArtist}
        searchResult={dataSearchArtist || []}
        searchResultLoad={fetchSearchArtist}
        searchTrack={dataSearchTrack || []}
        searchTrackLoad={fetchSearchTrack}
      />
    </div>
  );
}

export default Index;
