const filterLists = (list, searchTerm) => {
  const filteredList = list.filter((item) =>
    item?.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return filteredList;
};

export default filterLists;
