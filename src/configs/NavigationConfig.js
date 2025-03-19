import Icon, { 
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
  FileTextOutlined
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
        title: 'sidenav.main.home', // Используем ключ перевода
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'catalog',
        path: `${APP_PREFIX_PATH}/catalog`,
        title: 'sidenav.main.catalog', // Используем ключ перевода
        icon: ShoppingCartOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'products',
            path: `${APP_PREFIX_PATH}/catalog/products`,
            title: 'sidenav.main.catalog.products', // Используем ключ перевода
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'categories',
            path: `${APP_PREFIX_PATH}/catalog/categories`,
            title: 'sidenav.main.catalog.categories', // Используем ключ перевода
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'collections',
            path: `${APP_PREFIX_PATH}/catalog/collections`,
            title: 'sidenav.main.catalog.collections', // Используем ключ перевода
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'combo',
            path: `${APP_PREFIX_PATH}/catalog/combo`,
            title: 'sidenav.main.catalog.combo', // Используем ключ перевода
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'order',
        path: `${APP_PREFIX_PATH}/orders`,
        title: 'sidenav.main.order', // Используем ключ перевода
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'clients',
        path: `${APP_PREFIX_PATH}/clients`,
        title: 'sidenav.main.clients', // Используем ключ перевода
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'clientsList',
            path: `${APP_PREFIX_PATH}/clients/userList`,
            title: 'sidenav.main.clients.list', // Используем ключ перевода
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'clientsGroups',
            path: `${APP_PREFIX_PATH}/clients/groups`,
            title: 'sidenav.main.clients.groups', // Используем ключ перевода
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'banners',
        path: `${APP_PREFIX_PATH}/banners`,
        title: 'sidenav.main.banners', // Используем ключ перевода
        breadcrumb: false,
        icon: PictureOutlined,
        submenu: []
      },
      {
        key: 'promocodes',
        path: `${APP_PREFIX_PATH}/promocodes`,
        title: 'sidenav.main.promocodes', // Используем ключ перевода
        breadcrumb: false,
        icon: GiftOutlined,
        submenu: []
      },
      {
        key: 'offlinePoints',
        path: `${APP_PREFIX_PATH}/offlinePoints`,
        title: 'sidenav.main.offlinePoints', // Используем ключ перевода
        breadcrumb: false,
        icon: ShopOutlined,
        submenu: [
          {
            key: 'adresses',
            path: `${APP_PREFIX_PATH}/adresses`,
            title: 'sidenav.main.offlinePoints.adresses', // Используем ключ перевода
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'geozones',
            path: `${APP_PREFIX_PATH}/geozones`,
            title: 'sidenav.main.offlinePoints.geozones', // Используем ключ перевода
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'employees',
        path: `${APP_PREFIX_PATH}/employees`,
        title: 'sidenav.main.employees', // Используем ключ перевода
        breadcrumb: false,
        icon: UsergroupAddOutlined,
        submenu: []
      },
      {
        key: 'mailings',
        path: `${APP_PREFIX_PATH}/mailings`,
        title: 'sidenav.main.mailings', // Используем ключ перевода
        breadcrumb: false,
        icon: MailOutlined,
        submenu: []
      }
    ]
  },
  {
    key: 'systemic',
    title: 'sidenav.systemic', // Используем ключ перевода
    breadcrumb: false,
    submenu: [
      {
        key: 'settings',
        path: `${APP_PREFIX_PATH}/settings`,
        title: 'sidenav.systemic.settings', // Используем ключ перевода
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'mobileApplication',
        path: `${APP_PREFIX_PATH}/mobile`,
        title: 'sidenav.systemic.mobileApplication', // Используем ключ перевода
        icon: TabletOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'logs',
        path: `${APP_PREFIX_PATH}/logs`,
        title: 'sidenav.systemic.logs', // Используем ключ перевода
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