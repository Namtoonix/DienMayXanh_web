import NotFoundPage from 'page/NotFoundPage/NotFoundPage';

const routes = [
  {
    path: '',
    exact: false,
    main: () => <NotFoundPage />,
  },
];

export default routes;
