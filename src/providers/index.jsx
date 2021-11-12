import React, { createContext, useState } from "react";

export const Hooks = createContext();
function Index(props) {
  const [tabs, setTabs] = useState("artist");
  const [searchValue, setSearchValue] = useState("default");
  const [search, setSearch] = useState(false);
  const [dataSearch, setDataSearch] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState([]);
  const [page_, setPage_] = useState([1, 2, 3, 4]);
  const [page, setPage] = useState([]);
  const [back, setBack] = useState(false);
  const [next, setNext] = useState(true);
  const valx = {
    tabs,
    setTabs,
    searchValue,
    setSearchValue,
    search,
    setSearch,
    dataSearch,
    setDataSearch,
    loadingSearch,
    page_,
    setPage_,
    setLoadingSearch,
    page,
    setPage,
    back,
    setBack,
    next,
    setNext,
  };
  return <Hooks.Provider value={valx}>{props.children}</Hooks.Provider>;
}

export default Index;
