import React, { Component } from 'react';
import { Image, Statistic } from 'semantic-ui-react'
import Particles from 'react-particles-js';

import ParticleConfig from '../assets/particlesjs-config.json';
import Event from './Event.js';

import './Main.css';

class Main extends Component {
    render() {
        return (
            <div id="main">
                <Particles params={ParticleConfig} style={{position: 'absolute', top: 0, left: 0}}/>
                <div>
                    <Image src="./assets/logo/soda.png" id='logo'/>
                    <div id="title">
                        <div id="bold">The Software Develafewfopers Association</div>
                        <div>is the premiere software development club for university students.</div>
                    </div>
                    <div id='statistic'>
                    </div>
                </div>
                <Event/>
            </div>
        );
    }
}

export default Main;
