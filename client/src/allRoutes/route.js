import Dashboard from "../pages/Dashboard/Dashboard"
import ECharts from "../pages/charts/Echarts/Echart"
import Charts from "../pages/charts/Charts"
import Login from "../pages/Auth/Login"
import Datatable from "../pages/DataTables/Datatable"
import BootStrapDataTables from '../components/DataTables/BootStrapDataTables'
import BootstrapBasic from "../components/DataTables/BootstrapBasic"
import Invoice from "../pages/Invoice/Invoice"
import AdvanceForm from "../components/forms/AdvanceForm"
import Form from "../pages/forms/Form"
import BasicElements from "../components/forms/BasicElements"

const userRoutes = [

  //dashboard
//   { path: "/dashboard", component: Dashboard2 },
  { path: "/dashboard", component: <Dashboard/>  },
  { path: "/charts", component: <Charts/>  },
  { path: "/datatables/", component: <Datatable/>  },
  { path: "/charts/echarts", component: <ECharts/>  },
  { path: "/datatables/bootstarpDatatable", component: <BootStrapDataTables/>  },
  { path: "/datatables/bootstarpbasics", component: <BootstrapBasic/>  },
  { path: "/invoice/", component: <Invoice/>  },
  // { path: "/apex", component: <ApexChart/>  },
  { path: "/form/advance-form", component: <AdvanceForm/>  },
  { path: "/form/basic-elements", component: <BasicElements/>  },
  { path: "/form", component: <Form/>  },

  // //Utility
  // { path: "/", component: <Dashboard/>  },
//   { path: "*", component: <Dashboard/> },
  // { path: "/auditor", exact: true, component: () => <Redirect to="/auditor/dashboard" /> },
]

const authRoutes = [
  //authencation page
  // { path: "/gotoemail", component: GoToEmail }, ----- DUMP
//   { path: "/account-verify/:resettoken", component: RegisterCheck }, 
//   { path: "/account-verify-message" , component: RegisterSuccess},
//   { path: "/account-password-reset/:resettoken", component: CheckForgotPassToken },
//   { path: "/logout", component: Logout }, 
  { path: "/login", component: <Login/> },
  // { path: "/chart", component: <Apaexlinecolumn/>  },
  { path: "/", component: <Login/> },
//   { path: "*", component: <Login/> },
//   { path: "/forgot-password", component: ForgetPwd },
  // { path: "/register", component: Register }, // Temporary Disabled
]

export { userRoutes, authRoutes }
