import React, { Component } from 'react';
import { Image, Icon, Modal, Container } from 'semantic-ui-react'
import Particles from 'react-particles-js';

import ParticleConfig from './assets/particlesjs-config.json';

import './Main.css';

class Main extends Component {

    render() {

        return (
            <div>
                <div id='particles'>
                <Particles params={ParticleConfig}
                    style={{position: 'absolute', top: 0, left: 0}}/>
                </div>
                <div id="main">
                    <div>
                        <Image src="./assets/logo/darcraft.png" id='logo' centered='true' />
                        <div id="title">
                            <div id='date'>November 3, 2011 - May 3, 2019</div>
                            DarCraft has been shut down indefinitely.
                        </div>
                        <br/>
                        <Container id="info">
                            <Modal closeIcon trigger={<a rel="noopener norefferer" href="# " onclick="return false;" id='about'><Icon name='question'/> About DarCraft</a>}>
                                <Modal.Header>About DarCraft</Modal.Header>
                                <Modal.Content>
                                    <Modal.Description>
                                        DarCraft was a Survival and Creative Minecraft Server created by DaRr3n911 on November 3rd, 2011.<br/><br/>
                                        DarCraft, originally dubbed "Darren's Minecraft Server", was created with the intent of bringing all of Darren's friends together to enjoy Minecraft together doing whatever they'd like. All of the beginning players were all friends from another server looking for a new home. They all worked together to create a friendly community.<br/><br/>
                                        After a month of being a private, invite-only server, Darren's Minecraft Server became a public server, with staff, plugins, rules, and all the necessary tools to succeed. Without the help of Darren's friends, most notably SirBumpington, who helped hugely in the setup of the server and its' plugins, the server quickly evolved into a prosperous community.<br/><br/>
                                        Throughout DarCraft's years of being online, its players went through a variety of maps, each evolving over time as Darren continued to develop new ideas for the spawn, worlds, minigames, events, and plugins that kept the game interesting for many years. Whether it be testing out a Hub system similar to Hypixel with minigames like FreezeTag and DeathSwap, a separate PvP Factions Server, a long an elaborate scavenger hunt, or even something as simple as a token system to reward players for attending events - DarCraft tried its best to keep things interesting.<br/><br/>
                                        Through the seven and a half years of being online, DarCraft was able to do more than just provide players with entertainment in their free time between classes and work - it also fostered an incredible community. Many friendships were cultivated on this server, some of which are still flourishing today.<br/><br/>
                                        Despite DarCraft coming to an end after such a long journey, its important to look back on what was accomplished. An estimated 100,000 unique players have joined since starting it in November 2011, it has gone through multiple worlds, dozens of changes and countless drop parties. But, most importantly, we brought people together. For those of you that had the pleasure of experiencing DarCraft yourself, we hope the thought of it brings emotions of nostalgia and happiness.
                                    </Modal.Description>
                                </Modal.Content>
                            </Modal><br/>
                            <Modal closeIcon trigger={<a rel="noopener norefferer" href="# " onclick="return false;" id='final-post'><Icon name='file text outline'/> Read the Final Post</a>}>
                                <Modal.Header>Regarding the Future of DarCraft...</Modal.Header>
                                <Modal.Content>
                                    <Modal.Description>
                                        <h5>April 2, 2019 at 9:49 PM PT</h5>

                                        To my fellow Darcraftians,<br/><br/>

                                        I wanted to make an announcement to let you all know that <b>DarCraft will be shutting down at the beginning of May 2019</b>. 
                                        It may not come as a surprise to most of you, but it is going to be hard saying goodbye. 
                                        To give you a bit of perspective, I started this server on November 3rd, 2011, when I was 14 years old. 
                                        Now, over 7 years later, I am a 21-year-old attending university.<br/><br/>

                                        Like many of you, I grew up with DarCraft being a huge part of my life. 
                                        I spent countless hours on the server talking to my fellow Darcraftians while trying to make it as safe and as fun of a place as possible for everyone. 
                                        Through the server I was able to discover my passion for computers and programming, which has led me to study Computer Science at a university in hopes to grow my knowledge and work with computers for a living. 
                                        I was also, like many of you, able to meet lifelong friends – some of which are undoubtedly the closest friends I’ve ever had.<br/><br/>

                                        Unfortunately, DarCraft just isn’t sustainable anymore. 
                                        Despite our various attempts at bringing players back through new features we’ve attempted over the past few years, it has become increasingly difficult to maintain a strong player base when the game is slowly losing its’ popularity. 
                                        Along with that, I have been overwhelmed with university classes, leaving me little time to spend on maintaining the server. 
                                        Since I have failed to maintain the server like I used to be able to when I was younger, DarCraft has lost most of its’ player base, and along with it, our income used to pay the server fees. 
                                        So, unfortunately, we will need to shut down.<br/><br/>

                                        That being said, it is hard for me to say goodbye. 
                                        DarCraft was once a flourishing server, at one point reaching Top 175 on Planet Minecraft’s server list during the peak days of Minecraft, I am proud of what we all created. 
                                        I will cherish the memories made on the server for as long as I can, as will I cherish each and every one of you for making my 14-year-old self’s dreams come true. 
                                        I never expected DarCraft to last this long, let alone blow up into something that was self-sustainable for over 7 years.<br/><br/>

                                        So, in the beginning of May, DarCraft will be shut down indefinitely. 
                                        This isn’t to say that DarCraft can’t come back in the future, possibly in the form of a Minecraft Realm or even in another game, but for now we will need to say goodbye. 
                                        I will always cherish one of the things I am most proud of in my life so far – DarCraft. 
                                        Not just the server, but the community we created and everything that came of it. 
                                        Whether it be the lifelong friendships created, my knowledge of computers and programming, or anything else, DarCraft is and always will be something that I will look back at in unending appreciation.<br/><br/>

                                        If you want to stay connected to Darcraftians both now and past the reset, please join our <a rel="noopener noreferrer" href="http://discord.gg/4cf8KtC" target="_blank">Discord server</a>. 
                                        I, as well as many others, are always quick to reply to messages and jump into conversations. 
                                        We will also be posting more information regarding the shutdown there within the next few weeks. 
                                        If you want to stay connected with me, you can message me on the Discord server.<br/><br/>

                                        So, to each and every one of you (yes, even those banned multiple times), <i>thank you for making my dreams come true</i>. 
                                        I hope you had as much fun as I did.<br/><br/>

                                        Until we meet again,<br/><br/>

                                        Darren Vasquez (DaRr3n911)
                                    </Modal.Description>
                                </Modal.Content>
                            </Modal><br/>
                            <Modal closeIcon size='tiny' trigger={<a rel="noopener noreferrer" href="# " onclick="return false;" id='world-dl'><Icon name='download'/> World Downloads</a>}>
                                <Modal.Header>World Downloads</Modal.Header>
                                <Modal.Content>
                                    <Modal.Description>
                                        Join the Discord Server and check the <b><i>#announcements</i></b> channel for a link to the downloads!<br/>
                                    </Modal.Description>
                                </Modal.Content>
                            </Modal><br/>
                            <a rel="noopener noreferrer" id='discord' href="http://discord.gg/4cf8KtC" target='_blank'><Icon name='discord'/> Join our Discord Server</a>
                        </Container>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
