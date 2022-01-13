export const searchByCompany = (searchData, searchTerm) => {
  console.log(searchData);
  const filteredList = searchData.filter((item) =>
    item?.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filteredList;
};

export const searchByProject = (searchData, searchTerm) => {
  const filteredList = searchData.filter((item) =>
    item?.projectName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filteredList;
};
