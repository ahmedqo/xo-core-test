import { XORouter, XOShape } from 'xo-core';
import 'xo-core/Ui/Container';
import 'xo-core/Components/NavBar';
import 'xo-core/Components/Loader';
import _404 from './pages/_404';
import Accordion from './pages/Accordion';
import Alert from './pages/Alert';
import Badge from './pages/Badge';
import Box from './pages/Box';
import Chart from './pages/Chart';
import Field from './pages/Field';
import Home from './pages/Home';
import Loader from './pages/Loader';
import Navbar from './pages/Navbar';
import Icon from './pages/Icon';
import './styles/style.css';

XORouter("xo-container")
    .onLoad(() => {
        const useShape = XOShape('xo-container');
        useShape();
    })
    .loader('<xo-loader full></xo-loader>')
    .add('/', Home, Home.name)
    .add('/navbar', Navbar, Navbar.name)
    .add('/accordion', Accordion, Accordion.name)
    .add('/alert', Alert, Alert.name)
    .add('/box', Box, Box.name)
    .add('/badge', Badge, Badge.name)
    .scope('/loader', (add) => [
        add('/', Loader, Loader.name),
        add('/{id:n}', Loader, Loader.name + 1),
    ])
    .add('/chart', Chart, Chart.name)
    .add('/field', Field, Field.name)
    .add('/icon', Icon, Icon.name)
    .add('/404', _404, _404.name)
    .run();