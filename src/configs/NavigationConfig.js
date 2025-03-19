import  { 
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  TabletOutlined,
  FileTextOutlined,
  SignatureOutlined
} from '@ant-design/icons';

import { APP_PREFIX_PATH } from 'configs/AppConfig';

const dashBoardNavTree = [
  {
    key: 'main',
    title: 'main',
    breadcrumb: false,
    submenu: [
      {
        key: 'home',
        path: `${APP_PREFIX_PATH}/home`,
        title: 'sidenav.main.home', 
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: []
      },
      
      {
        key: 'scheduler',
        path: `${APP_PREFIX_PATH}/scheduler`,
        title: 'sidenav.main.scheduler', 
        icon: SignatureOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'catalog',
        path: `${APP_PREFIX_PATH}/catalog`,
        title: 'sidenav.main.catalog', 
        icon: ShoppingCartOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'products',
            path: `${APP_PREFIX_PATH}/catalog/products`,
            title: 'sidenav.main.catalog.products', 
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'categories',
            path: `${APP_PREFIX_PATH}/catalog/categories`,
            title: 'sidenav.main.catalog.categories', 
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'collections',
            path: `${APP_PREFIX_PATH}/catalog/collections`,
            title: 'sidenav.main.catalog.collections', 
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'combo',
            path: `${APP_PREFIX_PATH}/catalog/combo`,
            title: 'sidenav.main.catalog.combo', 
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'order',
        path: `${APP_PREFIX_PATH}/orders`,
        title: 'sidenav.main.order', 
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'clients',
        path: `${APP_PREFIX_PATH}/clients`,
        title: 'sidenav.main.clients',  
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'clientsList',
            path: `${APP_PREFIX_PATH}/clients/userList`,
            title: 'sidenav.main.clients.list',  
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'clientsGroups',
            path: `${APP_PREFIX_PATH}/clients/groups`,
            title: 'sidenav.main.clients.groups',  
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'banners',
        path: `${APP_PREFIX_PATH}/banners`,
        title: 'sidenav.main.banners',  
        breadcrumb: false,
        icon: PictureOutlined,
        submenu: []
      },
      {
        key: 'promocodes',
        path: `${APP_PREFIX_PATH}/promocodes`,
        title: 'sidenav.main.promocodes',  
        breadcrumb: false,
        icon: GiftOutlined,
        submenu: []
      },
      {
        key: 'offlinePoints',
        path: `${APP_PREFIX_PATH}/offlinePoints`,
        title: 'sidenav.main.offlinePoints',  
        breadcrumb: false,
        icon: ShopOutlined,
        submenu: [
          {
            key: 'adresses',
            path: `${APP_PREFIX_PATH}/adresses`,
            title: 'sidenav.main.offlinePoints.adresses',  
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'geozones',
            path: `${APP_PREFIX_PATH}/geozones`,
            title: 'sidenav.main.offlinePoints.geozones',  
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'employees',
        path: `${APP_PREFIX_PATH}/employees`,
        title: 'sidenav.main.employees',  
        breadcrumb: false,
        icon: UsergroupAddOutlined,
        submenu: []
      },
      {
        key: 'mailings',
        path: `${APP_PREFIX_PATH}/mailings`,
        title: 'sidenav.main.mailings',  
        breadcrumb: false,
        icon: MailOutlined,
        submenu: []
      }
    ]
  },
  {
    key: 'systemic',
    title: 'sidenav.systemic',  
    breadcrumb: false,
    submenu: [
      {
        key: 'settings',
        path: `${APP_PREFIX_PATH}/settings`,
        title: 'sidenav.systemic.settings',  
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'mobileApplication',
        path: `${APP_PREFIX_PATH}/mobile`,
        title: 'sidenav.systemic.mobileApplication',  
        icon: TabletOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'logs',
        path: `${APP_PREFIX_PATH}/logs`,
        title: 'sidenav.systemic.logs',  
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: []
      }
    ]
  }
];

const navigationConfig = [
  ...dashBoardNavTree
];

export default navigationConfig;