const COMPANY_MANAGEMENT = {
  create: `${process.env.REACT_APP_API_HOSTNAME}api/createCompany`,
  update: `${process.env.REACT_APP_API_HOSTNAME}api/updateCompany`,
  getCompany: `${process.env.REACT_APP_API_HOSTNAME}api/ListCompanies`,
  delete: `${process.env.REACT_APP_API_HOSTNAME}api/deleteCompanyDetails/`,

  getCompanyUsers: `${process.env.REACT_APP_API_HOSTNAME}api/getUserListByCompany/`,
  addCompanyUsers: `${process.env.REACT_APP_API_HOSTNAME}api/userCompany`,
  deleteCompanyUsers: `${process.env.REACT_APP_API_HOSTNAME}api/delete/userCompany/`,
};

export default COMPANY_MANAGEMENT;
