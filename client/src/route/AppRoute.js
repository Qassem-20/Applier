import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router";

import WelcomePage from "../pages/HomePage";

import SignIn from "../pages/signIn-signUp/signIn";
import RouteSignUp from "../pages/signIn-signUp/routeSignUp";
import SignUpMedicalStudent from "../pages/signIn-signUp/signUpMedicalStudent";
import SignUpCompany from "../pages/signIn-signUp/signUpCompany";
import SignUpConsumer from "../pages/signIn-signUp/signUpConsumer";
import ForgottenPassword from "../pages/signIn-signUp/forgottenPassword";

import ConsumerProfile from "../pages/consumer/editProfile";
import Opportunities from "../pages/consumer/opportunities";
import MedicalStudents from "../pages/consumer/medicalStudents";

import AddOpportunity from "../pages/company/addOpportunity";
import AppliedTrainee from "../pages/company/appliedTrainee";
import CompanyHomePage from "../pages/company/companyHomePage";
import CompanyProfile from "../pages/company/companyProfile";
import EditOpportunity from "../pages/company/editOpportunity";
import TraineeDetails from "../pages/company/traineeDetails";

import AdminHomePage from "../pages/admin/adminHomePage";
import UnauthorizedMiddleWare from "../pages/admin/unauthorizedMiddleWare";
import Consumers from "../pages/admin/consumers";
import Companies from "../pages/admin/companies";
import OpportunitiesPanel from "../pages/admin/opportunities";
import MedicalStudent from "../pages/admin/medicalStudents";
import AdminSignIn from "../pages/admin/adminSignIn";
import AddAdmin from "../pages/admin/addAdmin";
import ReportedFeedBack from "../pages/admin/reportedFeedBack";
import AdminForgottenPassword from "../pages/admin/adminForgottenPassword";
import AdminPanel from "../pages/admin/adminPanel";

import FeedBackConsumerCompany from "../pages/consumer/feedBackConsumerCompany";
import FeedBackConsumerMedical from "../pages/consumer/feedBackConsumerMedical";
import FeedBackMedical from "../pages/medicalStudent/feedBackMedical";
import FeedBackCompany from "../pages/company/feedBackCompany";

class AppRoute extends Component {
  render() {
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

          <Route path="/consumerProfile">
            <ConsumerProfile />
          </Route>
          <Route path="/opportunities">
            <Opportunities />
          </Route>
          <Route path="/medicalStudents">
            <MedicalStudents />
          </Route>

          <Route path="/addOpportunity">
            <AddOpportunity />
          </Route>
          <Route path="/appliedTrainee">
            <AppliedTrainee />
          </Route>
          <Route path="/companyHomePage">
            <CompanyHomePage />
          </Route>
          <Route path="/companyProfile">
            <CompanyProfile />
          </Route>
          <Route path="/editOpportunity">
            <EditOpportunity />
          </Route>
          <Route path="/traineeDetails">
            <TraineeDetails />
          </Route>

          <Route path="/adminHomePage">
            <AdminHomePage />
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
            <ReportedFeedBack />
          </Route>
          <Route path="/addAdmin">
            <AddAdmin />
          </Route>
          <Route path="/consumers">
            <Consumers />
          </Route>
          <Route path="/companies">
            <Companies />
          </Route>
          <Route path="/opportunitiesPanel">
            <OpportunitiesPanel />
          </Route>
          <Route path="/medicalStudent">
            <MedicalStudent />
          </Route>
          <Route path="/adminPanel">
            <AdminPanel />
          </Route>

          <Route path="/feedBackConsumerCompany">
            <FeedBackConsumerCompany />
          </Route>
          <Route path="/feedBackConsumerMedical">
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
    );
  }
}

export default AppRoute;
