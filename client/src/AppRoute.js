import { Switch, Route } from "react-router-dom";

import SignIn from "./pages/signIn-signUp/signIn";
import RouteSignUp from "./pages/signIn-signUp/routeSignUp";
import SignUpMedicalStudent from "./pages/signIn-signUp/signUpMedicalStudent";
import SignUpCompany from "./pages/signIn-signUp/signUpCompany";
import SignUpConsumer from "./pages/signIn-signUp/signUpConsumer";
import ForgottenPassword from "./pages/signIn-signUp/forgottenPassword";

import ConsumerProfile from "./pages/consumer/consumerProfile.jsx";
import Opportunities from "./pages/consumer/opportunities";
import MedicalStudents from "./pages/consumer/medicalStudents";

import AddOpportunity from "./pages/company/addOpportunity";
import AppliedTrainee from "./pages/company/appliedTrainee";
import CompanyHomePage from "./pages/company/companyHomePage";
import CompanyProfile from "./pages/company/companyProfile";
import EditOpportunity from "./pages/company/editOpportunity";
import TraineeDetails from "./pages/company/traineeDetails";

import MedicalHomePage from "./pages/medicalStudent/homePageMedicalStudent"
import MedicalProfile from "./pages/medicalStudent/MedicalStudentProfile"


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

import RequireAuthCompany from "./pages/middleware/RequireAuthCompany";
import RequireAuthAdmin from "./pages/middleware/RequireAuthAdmin";
import RequireAuthConsumer from "./pages/middleware/RequireAuthConsumer";
import RequireAuthMedical from "./pages/middleware/RequireAuthAdmin";

import WelcomePage from "./pages/HomePage";
import React, { Fragment } from 'react'

const AppRoute = () => {
  return (
    <Fragment>
    <Switch>
      <Route exact path="/">
        <WelcomePage />
      </Route>

      <Route path="/signIn">
        <SignIn />
      </Route>
      <Route path="/signUpMedicalStudent">
        <SignUpMedicalStudent />
      </Route>
      <Route path="/routeSignUp">
        <RouteSignUp />
      </Route>
      <Route path="/signUpCompany">
        <SignUpCompany />
      </Route>
      <Route path="/signUpConsumer">
        <SignUpConsumer />
      </Route>
      <Route path="/forgottenPassword">
        <ForgottenPassword />
      </Route>

      <Route path="/consumerProfile/:consumerId">
        <RequireAuthConsumer>
        <ConsumerProfile />
        </RequireAuthConsumer>
      </Route>
      

      <Route path="/opportunities">
      <RequireAuthConsumer>
        <Opportunities />
        </RequireAuthConsumer>
      </Route>
      <Route path="/medicalStudents">
      <RequireAuthConsumer>
        <MedicalStudents />
      </RequireAuthConsumer>
      </Route>

      <Route path="/addOpportunity">
        <RequireAuthCompany>
        <AddOpportunity />
        </RequireAuthCompany>
      </Route>
      <Route path="/appliedTrainee">
      <RequireAuthCompany>
        <AppliedTrainee />
        </RequireAuthCompany>
      </Route>
      <Route path="/companyHomePage">
      <RequireAuthCompany>
        <CompanyHomePage />
        </RequireAuthCompany>
      </Route>
      <Route path="/companyProfile">
      <RequireAuthCompany>
        <CompanyProfile />
        </RequireAuthCompany>
      </Route>
      <Route path="/editOpportunity">
      <RequireAuthCompany>
        <EditOpportunity />
        </RequireAuthCompany>
      </Route>
      <Route path="/traineeDetails">
      <RequireAuthCompany>
        <TraineeDetails />
        </RequireAuthCompany>
      </Route>

      <Route path="/medicalHomePage">
        <RequireAuthMedical>
        <MedicalHomePage />
        </RequireAuthMedical>
      </Route>

      <Route path="/adminHomePage">
      <RequireAuthAdmin>
        <AdminHomePage />
        </RequireAuthAdmin>
      </Route>
      <Route path="/adminSignIn">
        <AdminSignIn />
      </Route>
      <Route path="/unauthorizedMiddleWare">
        <UnauthorizedMiddleWare />
      </Route>
      <Route path="/adminForgottenPassword">
        <AdminForgottenPassword />
      </Route>
      <Route path="/reportedFeedBack">
      <RequireAuthAdmin>
        <ReportedFeedBack />
        </RequireAuthAdmin>
      </Route>
      <Route path="/addAdmin">
      <RequireAuthAdmin>
        <AddAdmin />
        </RequireAuthAdmin>

      </Route>
      <Route path="/consumers">
      <RequireAuthAdmin>
        <Consumers />
        </RequireAuthAdmin>
      </Route>
      <Route path="/companies">
      <RequireAuthAdmin>
        <Companies />
        </RequireAuthAdmin>
      </Route>
      <Route path="/opportunitiesPanel">
      <RequireAuthAdmin>
        <OpportunitiesPanel />
        </RequireAuthAdmin>
      </Route>
      <Route path="/medicalStudent">
      <RequireAuthAdmin>
        <MedicalStudent />
        </RequireAuthAdmin>
      </Route>
      <Route path="/adminPanel">
        <RequireAuthAdmin>
          <AdminPanel />
        </RequireAuthAdmin>
      </Route>
      <Route path='/feedBackConsumerCompany/:companyId'>
      <FeedBackConsumerCompany />
      </Route>

     
      <Route path="/feedBackConsumerMedical/:medicalId">
        <FeedBackConsumerMedical />
      </Route>
      <Route path="/feedBackMedical">
        <FeedBackMedical />
      </Route>
      <Route path="/feedBackCompany">
        <FeedBackCompany />
      </Route>
    </Switch>
  </Fragment>
  )
}

export default AppRoute