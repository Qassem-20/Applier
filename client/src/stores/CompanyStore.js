import { create } from 'zustand';
import axios from 'axios';
const CompanyStores = create((set) => ({
    companies: null,

    fetchCompanies: async () => {
        // Fetch the companies
        const res = await axios.get("http://localhost:4000/api/v1/companies");
        // Set to state
        set({companies: res.data.companies});
      }, 

      deleteAdmin: async (_id) => {
        const res = await axios.delete(
          "http://localhost:4000/api/v1/companies/" + _id
        );

        const { companies } = CompanyStores.getState();

        //update page;
        const newCompanies = [...companies].filter((company) => {
          return company._id !== _id;
        });
        set({ company: newCompanies });
      },

      updateType: {
        _id: null,
        type: "",
      },

      updateAdminType: async (e) => {
        e.preventDefault();

        const {
          updateType: { type, _id },
          companies,
        } = CompanyStores.getState();
    
        // Send the update request
        const res = await axios.put(`http://localhost:4000/api/v1/companies/${_id}`, {
          type,
        });
    
        // Update state
        const newCompanies = [...companies];
        const adminIndex = companies.findIndex((company) => {
          return company._id === _id;
        });
        newCompanies[adminIndex] = res.data.company;
    
        set({
          companies: newCompanies,
          updateType: {
            _id: null,
            organization_name: "",
            register_number: "",
            organization_phone: "",
            organization_website: "",
            organization_bio: "",
            supervisor_name: "",
            password: "",
            organization_email: "",
            email: "",
            supervisor_phone: "",
            country: "",
            city: "",
          },
        });
      },

      values: {
        organization_name: "",
        register_number: "",
        organization_phone: "",
        organization_website: "",
        organization_bio: "",
        supervisor_name: "",
        password: "",
        organization_email: "",
        email: "",
        supervisor_phone: "",
        country: "",
        city:"",
      },

      registerAdmin: async (e) => {
        e.preventDefault();
        const { values, companies } = CompanyStores.getState();

        // add company
        const res = await axios.post(
            "http://localhost:4000/api/v1/companies/registerAdmin",
          values
        );
        set({
          companies: [...companies, res.data.company],
          values: {
            name: "",
            email: "",
            type: "",
            phone: "",
            password: "",
          },
        });
    },
      
      handleChange: async (e) =>{
        const { name, value } = e.target;

        set((state)=>{
          return{
            values:{
              ...state.values,
              [name]:value,
            }
          }
        })
      }

}))

export default CompanyStores;