import React from "react";
import { Navigate } from "react-router-dom";

//Dashboard
import Dashboard from "../Pages/Dashboard";
import Portfolio from "../Pages/Portfolio-aaMOBee/index.jsx";
// Invoicing routes
import CreateInvoice from "../Pages/Invoicing/index";
import ViewInvoice from "../Pages/Invoicing/view.jsx";
import PaymentsInvoice from "../Pages/Invoicing/payments.jsx";
import ReportsInvoice from "../Pages/Invoicing/reports.jsx";
import CategoryManager from "../Pages/Inventory-MNG/categoryManager.jsx";
import SimpleTemplatePrinter from "../components/InvoicingComponents/SimpleTemplatePrinter.jsx";
import Firm from "../Pages/Firms/FirmsTable.jsx";
import Calender from "../Pages/Calender/index.js";

// Import E-mail
// import Inbox from "../Pages/E-mail/Inbox";
// import ReadEmail from "../Pages/E-mail/ReadEmail";
// import EmailCompose from "../Pages/E-mail/EmailCompose";

// Import Authentication pages

// import Login from "../Pages/Authentication/Login";
// import ForgetPasswordPage from "../Pages/Authentication/ForgetPassword";
import Logout from "../Pages/AuthenticationPages/Logout.js";
import Register from "../Pages/AuthenticationPages/Register.js";
// import UserProfile from "../Pages/Authentication/user-profile";
import ResetPassword from "../Pages/AuthenticationPages/ResetPassword.jsx";


// inventory mngmnt

import InventoryTable from "../Pages/Inventory-MNG/InventoryTable.jsx";
import TableForm from "../Pages/Inventory-MNG/TableForm.jsx";
import TableTaxation from "../Pages/Inventory-MNG/TableTaxation.jsx";
import ItemConfiguration from "../Pages/Inventory-MNG/ItemConfiguration.jsx";

// Import Authentication Inner Pages
import Login1 from "../Pages/AuthenticationPages/Login";
// import Register1 from "../Pages/AuthenticationPages/Register";
import RecoverPassword from "../Pages/AuthenticationPages/RecoverPassword";
import LockScreen from "../Pages/AuthenticationPages/LockScreen";

// Import Utility Pages
import StarterPage from "../Pages/Utility/Starter-Page";
import Maintenance from "../Pages/Utility/Maintenance-Page";
import ComingSoon from "../Pages/Utility/ComingSoon-Page";
// import TimeLine from "../Pages/Utility/TimeLine-Page";
import FAQs from "../Pages/Utility/FAQs-Page";
import Pricing from "../Pages/Plans/Pricing-Page.js";
import Error404 from "../Pages/Utility/Error404-Page";
import Error500 from "../Pages/Utility/Error500-Page";

// Import Icon Pages
import IconMaterialdesign from "../Pages/Icons/IconMaterialdesign";
import IconFontawesome from "../Pages/Icons/IconFontAwesome";
import IconDripicons from "../Pages/Icons/IconDrip";
import IconBoxicons from "../Pages/Icons/IconBoxicons"

// Import Map Pages
// import VectorMaps from "../Pages/Maps/VectorMap";
// import GoogleMap from "../Pages/Maps/GoogleMap";
import ClientManagement from "../Pages/ClientsManagement/index.js";
import ProfileSettings from "../Pages/Settings/ProfileSettings.jsx";
import FirmsSetting from "../Pages/Firms/FirmsSetting.js";
import CreateFirm from "../Pages/Firms/CreateFirm.js";
import SwitchFirm from "../Pages/Firms/SwitchFirm.js";
import CreatePlan from "../Pages/Plans/CreatePlan.js";
import ManagePlan from "../Pages/Plans/ManagePlan.js";
import UserManage from "../Pages/Firms/UserManage.jsx";
import VerifyOtp from "../Pages/AuthenticationPages/VerifyOtp.jsx";
import ClientsPayments from "../Pages/ClientsManagement/clientPayments.js";
import ViewCustomer from "../Pages/Invoicing/viewCustomer.jsx";
import Vendor from "../Pages/Inventory-MNG/Vendor.jsx";
import Brands from "../Pages/Inventory-MNG/Brands.jsx";
import Manufacturers from "../Pages/Inventory-MNG/Manufacturers.jsx";
import Auth from "../Pages/AuthenticationPages/Auth.js";

// crm routes
import AllLeads from "../Pages/CRM/AllLeads.jsx"
import CreateLead from "../Pages/CRM/CreateLead.jsx";
import LeadAnalytics from "../Pages/CRM/LeadAnalytics.jsx";
import AllTasks from "../Pages/CRM/AllTasks.jsx";
import CrmUser from "../Pages/CRM/CrmUser.jsx";
import RoleManagement from "../Pages/CRM/RoleManagement.jsx";
import ReassignTask from "../Pages/CRM/ReassignTask.jsx";
import TaskManagement from "../Pages/CRM/TaskManagement.jsx";
import Redirectors from "../Pages/Portfolio-aaMOBee/components/redirectors.jsx";
import BlogsPage from "../Pages/Portfolio-aaMOBee/pages/BlogsPage.jsx";
import BlogDetailPage from "../Pages/Portfolio-aaMOBee/pages/BlogDetailPage.jsx";
import AllBlogs from "../Pages/Blogs/AllBlogs.jsx";
import CreateBlog from "../Pages/Blogs/CreateBlog.jsx";
import ManageCategories from "../Pages/Blogs/ManageCategories.jsx";
import AllFeedbacks from "../Pages/Feedbacks/AllFeedbacks.jsx";
import ProductionOrders from "../Pages/Production-Inventory/ProductionOrders.jsx";
import ProductionReports from "../Pages/Production-Inventory/ProductionReports.jsx";
import ProductionSettings from "../Pages/Production-Inventory/ProductionSettings.jsx";
import FinishedGood from "../Pages/Production-Inventory/FinishedGood.jsx";
import RawMaterialTable from "../Pages/Production-Inventory/RawMaterialTable.jsx";
import WorkInProgressTable from "../Pages/Production-Inventory/WorkInProgressTable.jsx";
import WasteManagement from "../Pages/Production-Inventory/WasteManagement.jsx";
import BomPage from "../Pages/Production-Inventory/BomPage.jsx";
const authProtectedRoutes = [
  //dashboard
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/clients-management", component: <ClientManagement /> },
  { path: "/clients-payments", component: <ClientsPayments /> },
  {path:"/calendar", component: <Calender />},
  // plans
  { path: "/create-plan", component: <CreatePlan /> },
  { path: "/manage-plan", component: <ManagePlan /> },

  // blogs
  {path:"/all-blogs", component: <AllBlogs />},
  {path:"/create-blog", component: <CreateBlog />},
  {path:"/manage-categories" , component:<ManageCategories/>},

  // feedbacks
  {path:"/all-feedbacks", component: <AllFeedbacks />},


  // invoicing
  { path: "/create-invoice", component: <CreateInvoice/> },
  { path: "/view-invoices", component: <ViewInvoice /> },
  { path: "/payments-invoice", component: < PaymentsInvoice /> },
  { path: "/reports-invoice", component: < ReportsInvoice /> },
  { path: "/view-customers", component: <ViewCustomer />},
  { path: "/simple-template-printer", component: <SimpleTemplatePrinter /> },


  // Inventory MNG
  {path:"/inventory-table", component: <InventoryTable />},
  {path:"/add-inventory", component: <TableForm />},
  {path:"/table-taxation", component: <TableTaxation />},
  {path:"/item-configuration", component: <ItemConfiguration />},
  {path:"/manage-category", component: <CategoryManager />},
  {path:"/vendors/manage", component: <Vendor />},
  {path:"/brands", component: <Brands />},
  {path:"/manufacturers", component: <Manufacturers />},

  //  production and inventory
  {path:"/production/raw-materials", component: <RawMaterialTable />},
  {path:"/production/finished-goods", component: <FinishedGood />},
  {path:"/production/work-in-progress", component: <WorkInProgressTable />},
  {path:"/production/orders", component: <ProductionOrders />},
  {path:"/production/reports", component: <ProductionReports />},
  {path:"/production/all-boms", component: <BomPage/>},
  {path:"/production/waste-management", component: <WasteManagement />},
  {path:"/production/settings", component: <ProductionSettings />},

  // firm
  {path:"/firms", component: <Firm />},
  {path:"/firmusers", component: <UserManage />},
  {path:"/firmusers-uc", component: <ComingSoon />},
  {path:"/firms-setting", component: <FirmsSetting />},
  {path:"/firms-setting-uc", component: <ComingSoon />},
  {path:"/create-firm", component: <CreateFirm />},
  {path:"/switch-firm", component: <SwitchFirm/>},

  // CRM
  {path:"/crm/all-leads", component: <AllLeads />},
  {path:"/crm/create-lead", component:<CreateLead/>},
  {path:"/crm/leads-analytics", component:<LeadAnalytics/>},
  {path:"/crm/all-tasks", component:<AllTasks/>},
  {path:"/crm/crm-users", component:<CrmUser/>},
  {path:"/crm/user-roles", component:<RoleManagement/>},
  {path:"/crm/reassign-tasks", component:<ReassignTask />},
  {path:"/crm/task-management", component:<TaskManagement />},

  //  Coming Soon 
  {path:"/clients-portal" , component: <ComingSoon />},
  {path:"/clients-payments" , component: <ComingSoon />},
  {path:"/clients/invoices" , component: <ComingSoon />},
  {path:"/clients/statements" , component: <ComingSoon />},
  {path:"/vendors/manage" , component: <ComingSoon />},
  {path:"/vendors/payments" , component: <ComingSoon />},
  {path:"/vendors/invoices" , component: <ComingSoon />},
  {path:"/vendors/info" , component: <ComingSoon />},
  {path:"/vendors/statements" , component: <ComingSoon />},
  {path:"/invoices/recurring" , component: <ComingSoon />},
  {path:"/invoices/payment-tracking" , component: <ComingSoon />},
  {path:"/invoices/bulk-generation" , component: <ComingSoon />},
  {path:"/invoices/templates" , component: <ComingSoon />},
  {path:"/quotes/create" , component: <ComingSoon />},
  {path:"/quotes/manage" , component: <ComingSoon />},
  {path:"/support/help-desk" , component: <ComingSoon />},
  {path:"/support/knowledge-base" , component: <ComingSoon />},
  {path:"/support/live-chat" , component: <ComingSoon />},
  {path:"/support/submit-ticket" , component: <ComingSoon />},
  {path:"/preferences/general" , component: <ComingSoon />},
  {path:"/preferences/company" , component: <ComingSoon />},
  {path:"/preferences/security" , component: <ComingSoon />},
  {path:"/preferences/notifications" , component: <ComingSoon />},
  {path:"/preferences/integrations" , component: <ComingSoon />},
  {path:"/preferences/tax" , component: <ComingSoon />},
  {path:"/preferences/country-laws" , component: <ComingSoon />},
  {path:"/reports/aged-receivables-payables" , component: <ComingSoon />},
  {path:"/reports/standard" , component: <ComingSoon />},
  {path:"/reports/custom" , component: <ComingSoon />},
  {path:"/reports/export" , component: <ComingSoon />},
  {path:"/reports/budgeting" , component: <ComingSoon />},
  {path:"/payments/received" , component: <ComingSoon />},
  {path:"/payments/made" , component: <ComingSoon />},
  {path:"/payments/manage" , component: <ComingSoon />},
  {path:"/payments/reconciliation" , component: <ComingSoon />},
  {path:"/expenses/record" , component: <ComingSoon />},
  {path:"/expenses/manage" , component: <ComingSoon />},
  {path:"/expenses/categories" , component: <ComingSoon />},
  {path:"/expenses/upload-receipt" , component: <ComingSoon />},
  {path:"/expenses/approval-workflow" , component: <ComingSoon />},
  {path:"/purchase-orders/create" , component: <ComingSoon />},
  {path:"/purchase-orders/manage" , component: <ComingSoon />},
  {path:"/purchase-bills/record" , component: <ComingSoon />},
  {path:"/purchase-bills/manage" , component: <ComingSoon />},
  {path:"/purchase-bills/payments" , component: <ComingSoon />},
  {path:"/purchase-bills/link-orders" , component: <ComingSoon />},
  {path:"/credit-notes/create" , component: <ComingSoon />},
  {path:"/credit-notes/manage" , component: <ComingSoon />},
  {path:"/credit-notes/apply" , component: <ComingSoon />},
  {path:"/debit-notes/create" , component: <ComingSoon />},
  {path:"/debit-notes/manage" , component: <ComingSoon />},
  {path:"/debit-notes/apply" , component: <ComingSoon />},
  {path:"/delivery-challans/create" , component: <ComingSoon />},
  {path:"/delivery-challans/manage" , component: <ComingSoon />},
  {path:"/delivery-challans/track" , component: <ComingSoon />},
  // {path:"" , component: <ComingSoon />},
  // {path:"" , component: <ComingSoon />},
  // {path:"" , component: <ComingSoon />},
  // {path:"" , component: <ComingSoon />},
  // {path:"" , component: <ComingSoon />},

  // Profile
  { path: "/userprofile", component: <ProfileSettings /> },

  //Settings
  {path:"/profile-settings", component: <ProfileSettings />}, 

 

  // Utility Pages
  { path: "/pages-starter", component: <StarterPage /> },
  // { path: "/pages-timeline", component: <TimeLine /> },
  { path: "/pages-faqs", component: <FAQs /> },
  { path: "/pricing", component: <Pricing /> },


  // Icons Pages
  { path: "/icon-boxicon", component: <IconBoxicons /> },
  { path: "/icons-materialdesign", component: <IconMaterialdesign /> },
  { path: "/icons-fontawesome", component: <IconFontawesome /> },
  { path: "/icon-dripicons", component: <IconDripicons /> },

  // Maps Pages
  // { path: "/maps-vector", component: <VectorMaps /> },
  // { path: "/maps-google", component: <GoogleMap /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
];

const publicRoutes = [

  // Authentication Page
  { path: "/auth", component: <Auth /> },
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login1 /> },
  { path: "/crm/login", component: <Login1 /> },
  { path: "/forgot-password", component: <RecoverPassword /> },
  { path: "/recover-password", component: <RecoverPassword /> },
  { path: "/register", component: <Register /> },
  {path:"/reset-password/:token", component: <ResetPassword />},
  {path:"/reset-password", component: <Navigate to ="/login" />},
  {path:"/verify-email", component: <VerifyOtp/>},
  {path:"/", component:<Portfolio/>},
  {path:"/portfolio", component:<Portfolio/>},
  {path:"/login-forwarding" , component:<Redirectors />},
  {path:"/blogs" , component:<BlogsPage/>},
  {path:"/blogs/:blog_slug" , component:<BlogDetailPage/>},

  // // Authentication Inner Pages
  // { path: "/auth-login", component: <Login1 /> },
  // { path: "/auth-register", component: <Register /> },
  // { path: "/recover-password", component: <RecoverPassword /> },
  { path: "/auth-lock-screen", component: <LockScreen /> },

  // Utility Pages
  { path: "/pages-404", component: <Error404 /> },
  { path: "/*", component: <Error404 /> },
  { path: "/pages-500", component: <Error500 /> },
  { path: "/maintenance", component: <Maintenance /> },
  { path: "/pages-comingsoon", component: <ComingSoon /> },
];

export { authProtectedRoutes, publicRoutes };
