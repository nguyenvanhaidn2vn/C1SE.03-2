
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {useHistory} from 'react-router-dom'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const Dashboard = ({children})=>{
  const history = useHistory();

    return(
        <div className="App">
        <Layout>
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">An Phu</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="Sản phẩm">
                  <Menu.Item key="1" onClick={()=>history.push('/ShowProducts')}>Tất cả sản phẩm</Menu.Item>
                  <Menu.Item key="2" onClick={()=>history.push('/ShowProducts')}>Thêm mới sản phẩm</Menu.Item>
                  <Menu.Item key="3">Chỉnh sửa sản phẩm</Menu.Item>
                  <Menu.Item key="4">Danh mục</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="Đơn đặt hàng">
                  <Menu.Item key="5">Đơn Khách Hàng</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="Phản hồi">
                </SubMenu>
              </Menu>
            </Sider>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}>
              {children}
            </Content>
          </Layout>
        </Layout>
      </div>
    )
}   
export default Dashboard;