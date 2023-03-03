import React, { Component, Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from "./pages/signIn-signUp/signIn";
import RouteSignUp from "./pages/signIn-signUp/routeSignUp";
import SignUpMedicalStudent from "./pages/signIn-signUp/signUpMedicalStudent";
import SignUpCompany from "./pages/signIn-signUp/signUpCompany";
import SignUpConsumer from "./pages/signIn-signUp/signUpConsumer";
import ForgottenPassword from "./pages/signIn-signUp/forgottenPassword";

import ConsumerProfile from "./pages/consumer/editProfile.jsx";
import Opportunities from "./pages/consumer/opportunities";
import MedicalStudents from "./pages/consumer/medicalStudents";

import AddOpportunity from "./pages/company/addOpportunity";
import AppliedTrainee from "./pages/company/appliedTrainee";
import CompanyHomePage from "./pages/company/companyHomePage";
import CompanyProfile from "./pages/company/companyProfile";
import EditOpportunity from "./pages/company/editOpportunity";
import TraineeDetails from "./pages/company/traineeDetails";

import RequireAuth from "./pages/middleware/RequireAuthAdmin"
import AdminHomePage from "./pages/admin/adminHomePage";
import UnauthorizedMiddleWare from "./pages/admin/unauthorizedMiddleWare";
import Consumers from "./pages/admin/consumers";
import Companies from "./pages/admin/companies";
import OpportunitiesPanel from "./pages/admin/opportunities";
import MedicalStudent from "./pages/admin/medicalStudents";
import AdminSignIn from "./pages/admin/adminSignIn";
import AddAdmin from "./pages/admin/addAdmin";
import ReportedFeedBack from "./pages/admin/reportedFeedBack";
import AdminForgottenPassword from "./pages/admin/adminForgottenPassword";
import AdminPanel from "./pages/admin/adminPanel";

import FeedBackConsumerCompany from "./pages/consumer/feedBackConsumerCompany";
import FeedBackConsumerMedical from "./pages/consumer/feedBackConsumerMedical";
import FeedBackMedical from "./pages/medicalStudent/feedBackMedical";
import FeedBackCompany from "./pages/company/feedBackCompany";

import WelcomePage from "./pages/HomePage";
class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route index element={<WelcomePage />}/>

            <Route path='/signIn' element={<SignIn />}/>
            <Route path='/routeSignUp' element={<RouteSignUp />}/>
            <Route path='/signUpMedicalStudent' element={<SignUpMedicalStudent />}/>
            <Route path='/signUpCompany' element={<SignUpCompany />}/>
            <Route path='/signUpConsumer' element={<SignUpConsumer />}/>
            <Route path='/forgottenPassword' element={<ForgottenPassword />}/>

            <Route path='/consumerProfile' element={<ConsumerProfile />}/>
            <Route path='/opportunities' element={<Opportunities />}/>
            <Route path='/medicalStudents' element={<MedicalStudents />}/>

            <Route path='/addOpportunity' element={<AddOpportunity />}/>
            <Route path='/appliedTrainee' element={<AppliedTrainee />}/>
            <Route path='/companyHomePage' element={<CompanyHomePage />}/>
            <Route path='/companyProfile' element={<CompanyProfile />}/>
            <Route path='/editOpportunity' element={<EditOpportunity />}/>
            <Route path='/traineeDetails' element={<TraineeDetails />}/>
            
            <Route path='/feedBackConsumerCompany' element={<FeedBackConsumerCompany />}/>
            <Route path='/feedBackConsumerMedical' element={<FeedBackConsumerMedical />}/>
            <Route path='/feedBackMedical' element={<FeedBackMedical />}/>
            <Route path='/feedBackCompany' element={<FeedBackCompany />}/>

            <Route path='/adminSignIn' element={<AdminSignIn />}/>
            <Route path='/adminForgottenPassword' element={<AdminForgottenPassword />} />

            //middleware
            <Route path='/adminPanel' element={
              <RequireAuth>
                <AdminPanel />
              </RequireAuth>
            }/>
            
            <Route path='/addAdmin' element={<AddAdmin />} />
            <Route path='/adminHomePage' element={<AdminHomePage />} />
            <Route path='/unauthorizedMiddleWare' element={<UnauthorizedMiddleWare />} />
            <Route path='/consumers' element={<Consumers />} />
            <Route path='/companies' element={<Companies />} />
            <Route path='/opportunitiesPanel' element={<OpportunitiesPanel />} />
            <Route path='/medicalStudent' element={<MedicalStudent />} />
            <Route path='/reportedFeedBack' element={<ReportedFeedBack />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default App