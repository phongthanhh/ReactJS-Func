import './App.css';
import Home from './pages/Home/Home'
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Registers from './pages/Registers/Registers';

// Cài đặt thư viện react router dom
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import DemoUseState from './pages/Hooks/DemoUseState/DemoUseState';
import DemoUseEffect from './pages/Hooks/DemoUseEffect/DemoUseEffect';
import DemoUseCallBack from './pages/Hooks/DemoUseCallBack/DemoUseCallBack';
import DemoUseMemo from './pages/Hooks/DemoUseMemo/DemoUseMemo';
import DemoUseRef from './pages/Hooks/DemoUseRef/DemoUseRef';
import TangGiamFS from './pages/Hooks/ReduxHook/TangGiamFS';
import FaceBookApp from './pages/Hooks/ReduxHook/FaceBookApp';
import ShoesShopAPI from './pages/API/ShoesShopAPI';
import ShoesShopAwait from './pages/API/ShoesShopAwait';
import ShopMiddleware from './pages/API/ShopMiddleware';
import HomeTemplate from './templates/HomeTemplate';
import FormTemplate from './templates/FormTemplate';
import DemoRouter from './pages/Router/DemoRouter';
import Detail from './pages/Router/Detail';

// thư viện chuyển hướng trang cho các file k phải component
import { createBrowserHistory } from 'history';
import AdminTemplate from './templates/AdminTemplate';
import DemoAntd from './pages/Admin/DemoAntd';

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      {/* Header đặt ở đây => dùng chung cho toàn bộ trang */}
      {/* <Header /> */}
      <Switch>
        {/* C2:Route => render */}
        {/* Học chuyên sâu ở Template */}
        {/* <Route exact path='/home' render={(propsRoute) => {
          // Trả về UI mới có component muốn hiển thị
          return <div className='container'>
            <Header />
            <Home {...propsRoute} />
          </div>
        }} />

        <Route exact path='/about' render={() => {
          // Trả về UI mới có component muốn hiển thị
          return <div className='container'>
            <Header />
            <About />
          </div>
        }} />

        <Route exact path='/home' render={() => {
          // Trả về UI mới có component muốn hiển thị
          return <div className='container'>
            <Login />
          </div>
        }} /> */}

        {/* C1:Route => component */}
        <HomeTemplate path='/home' component={Home} />
        <HomeTemplate path='/about' component={About} />
        <HomeTemplate path='/demo-router' component={DemoRouter} />
        <HomeTemplate path='/detail/:id' component={Detail} />
        <AdminTemplate path='/demo-antd' component={DemoAntd} />


        <FormTemplate path='/login' component={Login} />
        <FormTemplate path='/register' component={Registers} />

        <Route exact path='/use-state' component={DemoUseState} />
        <Route exact path='/use-effect' component={DemoUseEffect} />
        <Route exact path='/use-callBack' component={DemoUseCallBack} />
        <Route exact path='/use-memo' component={DemoUseMemo} />
        <Route exact path='/use-ref' component={DemoUseRef} />
        <Route exact path='/tang-giam-fs' component={TangGiamFS} />
        <Route exact path='/facebook-app' component={FaceBookApp} />
        <Route exact path='/shoes-shop-api' component={ShoesShopAPI} />
        <Route exact path='/shoes-shop-await' component={ShoesShopAwait} />
        <Route exact path='/middle-ware' component={ShopMiddleware} />




        {/* Tương tự default của switch case */}
        <HomeTemplate path='/' component={Home} />

      </Switch>
    </Router>
  );
}

export default App;
