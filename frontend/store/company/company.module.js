import CompanyService from '../../src/services/company/company.service'

const companyData = JSON.parse(localStorage.getItem('company'));
const initialState = companyData ? { company: companyData } : { company: null };

export const company = {
  namespaced: true,
  state: initialState,
  actions: {
    all({ commit }){
        return CompanyService.getAllCompany().then(
            company => {
                commit('fetchAllSuccess', company.data);
                return Promise.resolve(company.data);
            },
            error => {
                commit('fetchAllFailure');
                return Promise.reject(error);
            }
        )
    },
  },
  mutations: {
    fetchAllSuccess(state, company) {
        state.company = company
    },
    fetchAllFailure(state) {
        state.company = null;
    }
  }
};