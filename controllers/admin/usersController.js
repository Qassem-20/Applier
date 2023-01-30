const getAllMedicalStudents = async(req,res) => {
    res.send('get All Medical Students')
}
const getAllCompanies = async(req,res) => {
    res.send('get All Companies')
}
const getAllUsers = async(req,res) => {
    res.send('get All Users')
}
const activateMedicalStudents = async(req,res) => {
    res.send('activate Medical Students')
}
const suspendUser = async(req,res) => {
    res.send('suspend User')
}
const activateCompanies = async(req,res) => {
    res.send('activate Companies')
}
const getAllOpportunities = async(req,res) => {
    res.send('get All Opportunities')
}
const showStats = async(req,res) => {
    res.send('show Stats')
}
export {getAllMedicalStudents,activateMedicalStudents,getAllCompanies,activateCompanies,getAllUsers,suspendUser,/*getAllOpportunities,*/showStats}