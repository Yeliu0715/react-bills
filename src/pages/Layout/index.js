import { Outlet, useLocation, useNavigate} from "react-router";

import { useEffect } from "react";
import { useDispatch } from "react-redux"; 
import { getBillList } from "@/store/modules/billStore";

// UI imports
import { TabBar } from 'antd-mobile'
import {
  BillOutline,
  CalculatorOutline,
  AddCircleOutline
} from 'antd-mobile-icons'

import './index.scss'

const tabs = [
  {
    key: '/month',
    title: 'Monthly Bill',
    icon: <BillOutline />,
  },
  {
    key: '/new',
    title: 'New Bill',
    icon: <AddCircleOutline />,
  },
  {
    key: '/year',
    title: 'Annual Bill',
    icon: <CalculatorOutline />,
  },
]

const Layout  = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBillList());
  }, []);

  const navigate = useNavigate();
  const swithPage = (key) => {
    navigate(key);
  }

  return (
    <div className="layout">
      <div className="container">
        <Outlet />
      </div>
      <div className="footer">
        <TabBar onChange={swithPage}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  );
}

export default Layout;