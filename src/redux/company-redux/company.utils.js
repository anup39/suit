export const makeCheckedCompanyArray = (
  checkedCompanyList,
  newCheckedCompany
) => {
  const companyArrayFilter = checkedCompanyList.filter(
    (item) => item.id === newCheckedCompany.id
  );

  if (companyArrayFilter.length >= 1) {
    return checkedCompanyList;
  }
  if (companyArrayFilter.length === 0) {
    checkedCompanyList.push(newCheckedCompany);
  }

  return checkedCompanyList;
};
export const eraseUncheckedCompany = (
  checkedCompanyList,
  newCheckedCompany
) => {
  const companyArrayFilter = checkedCompanyList.filter(
    (item) => item.id === newCheckedCompany.id
  );

  if (companyArrayFilter.length >= 1) {
    const companyArrayFilterList = checkedCompanyList.filter(
      (item) => item.id !== newCheckedCompany.id
    );

    return companyArrayFilterList;
  }
  if (companyArrayFilter.length === 0) {
    return checkedCompanyList;
  }

  return checkedCompanyList;
};
