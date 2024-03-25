import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Inicio',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    navCap: 'Navegación',
  },
  {
    displayName: 'Concilicación',
    iconName: 'rosette',
    route: '/ui-components/badge',
  },
  {
    displayName: 'Facturas',
    iconName: 'poker-chip',
    route: '/ui-components/chips',
  },
  {
    displayName: 'Validacion',
    iconName: 'list',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Usuarios',
    iconName: 'layout-navbar-expand',
    route: '/ui-components/menu',
  },
  {
    displayName: 'Actividad',
    iconName: 'tooltip',
    route: '/ui-components/tooltips',
  },
  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'lock',
    route: '/authentication/login',
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/authentication/register',
  },
  {
    navCap: 'Herramientas',
  },
  {
    displayName: 'Ayuda(Icon)',
    iconName: '',
    route: '/extra/icons',
  },
  {
    displayName: 'Ajustes(Sample Page)',
    iconName: 'aperture',
    route: '/extra/sample-page',
  },
];
