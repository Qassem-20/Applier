const addAdmin = async(req,res) => {
    res.send('add Admin')
}
const getAllAdmin = async(req,res) => {
    res.send('get All Admin')
}
const changeStatue = async(req,res) => {
    res.send('change Statue')
}
const deleteAdmin = async(req,res) => {
    res.send('delete Admin')
}
export {addAdmin,deleteAdmin,getAllAdmin,changeStatue}