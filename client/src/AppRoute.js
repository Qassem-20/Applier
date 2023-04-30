import { Switch, Route } from "react-router-dom";

import WelcomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/CareersPage";
import SignIn from "./pages/signIn-signUp/signIn";
import RouteSignUp from "./pages/signIn-signUp/routeSignUp";
import SignUpMedicalStudent from "./pages/signIn-signUp/signUpMedicalStudent";
import SignUpCompany from "./pages/signIn-signUp/signUpCompany";
import SignUpConsumer from "./pages/signIn-signUp/signUpConsumer";
import ForgottenPassword from "./pages/signIn-signUp/forgottenPassword";

import RequireAuthConsumer from "./pages/middleware/RequireAuthConsumer";
import SuspendedMiddleWare from "./pages/middleware/suspendedMiddleWare";
import UnauthorizedConsumerMiddleware from "./pages/consumer/unauthorizedConsumerMiddleware";
import ConsumerProfile from "./pages/consumer/consumerProfile";
import Opportunities from "./pages/consumer/opportunities";
import MedicalStudents from "./pages/consumer/medicalStudents";
import FeedBackConsumerCompany from "./pages/consumer/feedBackConsumerCompany";
import FeedBackConsumerMedical from "./pages/consumer/feedBackConsumerMedical";

import RequireAuthCompany from "./pages/middleware/RequireAuthCompany";
import ActivationCompanyMiddleware from "./pages/middleware/activationCompanyMiddleware";
import UnauthorizedCompanyMiddleware from "./pages/company/unauthorizedCompanyMiddleware";
import AddOpportunity from "./pages/company/addOpportunity";
import AppliedTrainee from "./pages/company/appliedTrainee";
import CompanyHomePage from "./pages/company/companyHomePage";
import CompanyProfile from "./pages/company/companyProfile";
import EditOpportunity from "./pages/company/editOpportunity";
import TraineeDetails from "./pages/company/traineeDetails";
import FeedBackCompany from "./pages/company/feedBackCompany";

import RequireAuthMedical from "./pages/middleware/RequireAuthMedical";
import ActivationMedicalMiddleware from "./pages/middleware/activationMedicalMiddleware";
import MedicalHomePage from "./pages/medicalStudent/homePageMedicalStudent";
import UnauthorizedCMedicalMiddleware from "./pages/medicalStudent/unauthorizedCMedicalMiddleware";
import MedicalStudentsM from "./pages/medicalStudent/medicalStudentsM";
import FeedBackMedical from "./pages/medicalStudent/feedBackMedical";

import RequireAuthAdmin from "./pages/middleware/RequireAuthAdmin";
import RequireTypeAdmin from "./pages/middleware/RequireTypeAdmin";
import AdminHomePage from "./pages/admin/adminHomePage";
import UnauthorizedAdminMiddleWare from "./pages/admin/unauthorizedAdminMiddleware";
import Consumers from "./pages/admin/consumers";
import Companies from "./pages/admin/companies";
import OpportunitiesPanel from "./pages/admin/opportunities";
import MedicalStudent from "./pages/admin/medicalStudents";
import AdminSignIn from "./pages/admin/adminSignIn";
import AddAdmin from "./pages/admin/addAdmin";
import ReportedFeedBack from "./pages/admin/reportedFeedBack";
import AdminForgottenPassword from "./pages/admin/adminForgottenPassword";
import AdminPanel from "./pages/admin/adminPanel";

import React, { Fragment } from "react";

const AppRoute = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>

        <Route path="/about">
          <AboutPage />
        </Route>

        <Route path="/careers">
          <CareersPage />
        </Route>

        <Route path="/contact">
          <ContactPage />
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

        <Route path="/unauthorizedConsumerMiddleware">
          <RequireAuthConsumer>
            <UnauthorizedConsumerMiddleware />
          </RequireAuthConsumer>
        </Route>
        <Route path="/consumerProfile">
          <RequireAuthConsumer>
            <SuspendedMiddleWare>
              <ConsumerProfile />
            </SuspendedMiddleWare>
          </RequireAuthConsumer>
        </Route>
        <Route path="/opportunities">
          <RequireAuthConsumer>
            <SuspendedMiddleWare>
              <Opportunities />
            </SuspendedMiddleWare>
          </RequireAuthConsumer>
        </Route>
        <Route path="/medicalStudents">
          <RequireAuthConsumer>
            <SuspendedMiddleWare>
              <MedicalStudents />\
            </SuspendedMiddleWare>
          </RequireAuthConsumer>
        </Route>
        <Route path="/feedBackConsumerCompany/:companyId">
          <RequireAuthConsumer>
            <SuspendedMiddleWare>
              <FeedBackConsumerCompany />
            </SuspendedMiddleWare>
          </RequireAuthConsumer>
        </Route>
        <Route path="/feedBackConsumerMedical/:medicalId">
          <RequireAuthConsumer>
            <SuspendedMiddleWare>
              <FeedBackConsumerMedical />
            </SuspendedMiddleWare>
          </RequireAuthConsumer>
        </Route>

        <Route path="/unauthorizedCompanyMiddleware">
          <RequireAuthCompany>
            <UnauthorizedCompanyMiddleware />
          </RequireAuthCompany>
        </Route>
        <Route path="/feedBackCompany">
          <RequireAuthCompany>
            <ActivationCompanyMiddleware>
              <FeedBackCompany />
            </ActivationCompanyMiddleware>
          </RequireAuthCompany>
        </Route>
        <Route path="/addOpportunity">
          <RequireAuthCompany>
            <ActivationCompanyMiddleware>
              <AddOpportunity />
            </ActivationCompanyMiddleware>
          </RequireAuthCompany>
        </Route>
        <Route path="/appliedTrainee/:opportunityId">
          <RequireAuthCompany>
            <ActivationCompanyMiddleware>
              <AppliedTrainee />
            </ActivationCompanyMiddleware>
          </RequireAuthCompany>
        </Route>
        <Route path="/companyHomePage">
          <RequireAuthCompany>
            <ActivationCompanyMiddleware>
              <CompanyHomePage />
            </ActivationCompanyMiddleware>
          </RequireAuthCompany>
        </Route>
        <Route path="/companyProfile">
          <RequireAuthCompany>
            <CompanyProfile />
          </RequireAuthCompany>
        </Route>
        <Route path="/editOpportunity/:opportunityId">
          <RequireAuthCompany>
            <ActivationCompanyMiddleware>
              <EditOpportunity />
            </ActivationCompanyMiddleware>
          </RequireAuthCompany>
        </Route>
        <Route path="/traineeDetails/:consumerId">
          <RequireAuthCompany>
            <ActivationCompanyMiddleware>
              <TraineeDetails />
            </ActivationCompanyMiddleware>
          </RequireAuthCompany>
        </Route>

        <Route path="/unauthorizedCMedicalMiddleware">
          <RequireAuthMedical>
            <UnauthorizedCMedicalMiddleware />
          </RequireAuthMedical>
        </Route>
        <Route path="/medicalHomePage">
          <RequireAuthMedical>
            <MedicalHomePage />
          </RequireAuthMedical>
        </Route>
        <Route path="/medicalStudentsM">
          <RequireAuthMedical>
            <ActivationMedicalMiddleware>
              <MedicalStudentsM />
            </ActivationMedicalMiddleware>
          </RequireAuthMedical>
        </Route>
        <Route path="/feedBackMedical">
          <RequireAuthMedical>
            <ActivationMedicalMiddleware>
              <FeedBackMedical />
            </ActivationMedicalMiddleware>
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
        <Route path="/unauthorizedAdminMiddleWare">
          <RequireAuthAdmin>
            <UnauthorizedAdminMiddleWare />
          </RequireAuthAdmin>
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
          <AddAdmin />
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
            <RequireTypeAdmin>
              <AdminPanel />
            </RequireTypeAdmin>
          </RequireAuthAdmin>
        </Route>
      </Switch>
    </Fragment>
  );
};

export default AppRoute;
