import * as Pages from '../pages';

export const AppRoutes = [
    {path: '/', element: <Pages.Login/>},
    {path: '/duochoi', element: <Pages.ListCauDuocHoi/>},
    {path: '/dahoi', element: <Pages.ListCauDaHoi/>},
    {path: '/user/:id', element: <Pages.Ask/>},
    {path: '/answer/:id', element: <Pages.Answer/>},
];
