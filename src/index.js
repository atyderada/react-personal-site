import ReactDOM from 'react-dom';
import routes from './Routes';
import './theme/globalStyle';

import { ParallaxController } from 'react-scroll-parallax';

ParallaxController.init();

ReactDOM.render(
    routes,
    document.getElementById('root')
);