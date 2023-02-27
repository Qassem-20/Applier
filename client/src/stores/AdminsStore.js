import { create } from 'zustand'
import axios from 'axios';

const AdminsStore = create((set) => ({
    admins: null,

    fetchAdmins: async () => {
        // Fetch the admins
        const res = await axios.get("http://localhost:4000/api/v1/admins");
        // Set to state
        set(res.data.admins);
      }, 

}))

export default AdminsStore;