import { TeamOutlined, InfoCircleOutlined, BarsOutlined, LayoutOutlined } from '@ant-design/icons';

const Werter = {
  pages: {
    main: { path: '', name: 'Главная', childs: null, icon: <LayoutOutlined /> },
    about: { path: 'about', name: 'О компании', childs: null, icon: <InfoCircleOutlined /> },
    services: {
      path: 'services',
      name: 'Услуги',
      childs: {
        bankruptcy: {
          path: 'bankruptcy',
          name: 'Банкротство',
          childs: [
            {
              path: 'individual-bankruptcy',
              name: 'Банкротство физических лиц',
              childs: null,
            },
            {
              path: 'bankruptcy-of-legal-entities',
              name: 'Банкротство юридических лиц',
              childs: null,
            },
          ],
        },
        buh: {
          path: 'buh',
          name: 'Ведение бухгалтерского и налогового учета',
          childs: null,
        },
      },
      icon: <BarsOutlined />,
    },
    contact: { name: 'Контакты', childs: null, icon: <TeamOutlined /> },
  },
};
export default Werter;
