import { create } from 'zustand';
import axios from 'axios';

const AdminsStore = create((set) => ({
    admins: null,

    fetchAdmins: async () => {
        // Fetch the admins
        const res = await axios.get("http://localhost:4000/api/v1/admins");
        // Set to state
        set({admins: res.data.admins});
      }, 

      deleteAdmin: async (_id) => {
        const res = await axios.delete(
          "http://localhost:4000/api/v1/admins/" + _id
        );

        const { admins } = AdminsStore.getState();

        //update page;
        const newAdmins = [...admins].filter((admin) => {
          return admin._id !== _id;
        });
        set({ admins: newAdmins });
      },

      updateType: {
        _id: null,
        type: "",
      },

      updateAdminType: async (e) => {
        e.preventDefault();

        const {
          updateType: { type, _id },
          admins,
        } = AdminsStore.getState();
    
        // Send the update request
        const res = await axios.put(`http://localhost:4000/api/v1/admins/${_id}`, {
          type,
        });
    
        // Update state
        const newAdmins = [...admins];
        const adminIndex = admins.findIndex((admin) => {
          return admin._id === _id;
        });
        newAdmins[adminIndex] = res.data.admin;
    
        set({
          admins: newAdmins,
          updateType: {
            _id: null,
            type: "",
          },
        });
      },

      values: {
        name: "",
        email: "",
        type: "",
        phone: "",
        password: "",
      },

      registerAdmin: async (e) => {
        e.preventDefault();
        const { values, admins } = AdminsStore.getState();

        // add admin
        const res = await axios.post(
            "http://localhost:4000/api/v1/admins/registerAdmin",
          values
        );
        set({
          admins: [...admins, res.data.admin],
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
      },

      //login
      loggedIn:null,
      loginForm:{
        email:"",
        password:"",
      },
      handleChangeLogin: async (e) =>{
        const { name, value } = e.target;

        set((state)=>{
          return{
            loginForm:{
              ...state.loginForm,
              [name]:value,
            }
          }
        })
      },
      loginAdmin: async () =>{
        const {loginForm} = AdminsStore.getState();

        const res = await axios.post("/admins/loginAdmin",loginForm, {
          withCredentials:true,
        });

        set({loggedIn:true})

      },
      checkAuth: async () =>{
        try{
        await axios.get("/admins/check-auth");
        set({loggedIn:true})
      }catch(err){
        set({loggedIn:false})
      }
      },
}))

export default AdminsStore;