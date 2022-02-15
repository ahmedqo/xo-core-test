import { XORouter, XOShape } from 'xo-core';
import 'xo-core/Ui/Container';
import 'xo-core/Components/NavBar';
import 'xo-core/Components/Loader';
import 'xo-core/Components/ToastGroup';
import _404 from './pages/_404';
import Accordion from './pages/Accordion';
import Toast from './pages/Toast';
import Badge from './pages/Badge';
import Box from './pages/Box';
import Chart from './pages/Chart';
import Field from './pages/Field';
import Home from './pages/Home';
import Loader from './pages/Loader';
import Navbar from './pages/Navbar';
import Icon from './pages/Icon';
import test from './pages/test';
import './styles/style.css';

import './views/Base.xov'

XORouter("xo-container")
    .onLoad(() => {
        const useShape = XOShape('xo-container');
        useShape();
    })
    .onChange(() => {
        store.emit("toast", "This is the " + document.title + " page.", { theme: '500' })
    })
    .loader('<xo-loader theme="300" full></xo-loader>')
    .add('/', Home, Home.name)
    .add('/navbar', Navbar, Navbar.name)
    .add('/accordion', Accordion, Accordion.name)
    .add('/toast', Toast, Toast.name)
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
    .add('/test', test, test.name)
    .run();