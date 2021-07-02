import React from "react";
import App from "./App";

function MainIndex() {
    return (
        <div>
            <div id ="tophead" class="top-heading">
                <ul class="header-list">
                    <li><a href="#about-game">Home</a></li>
                    <li><a href="#rules">About</a></li>
                    <li><a href="#footer">Contact</a></li>
                </ul>
            </div>
            <div class="first-section">
                <div id="about-game">
                    <h2 class="avatar-text">Choose your avatar</h2>
                    <div class="avatar">
                        <img src="images/penguine.png" alt="penguine" />
                        <img src="images/bird.jpg" alt="bird" />
                        <img src="images/snowman.png" alt="snowman" />
                        <img src="images/cactus.png" alt="cactus" />
                        <img src="images/panda.png" alt="panda" />
                    </div>
                </div>
                                    <div class="start-btn">
                                        <button onClick={App()} class="btn btn-info btn-lg"> Let's Start</button>
                                    </div>
        
            </div>
                                <div class="second-section">
                                    <div id="rules">
                                        <div id="rules-carousel" class="carousel slide" data-ride="false">
                                            <ol class="carousel-indicators">
                                                <li data-target="#rules-carousel" data-slide-to="0" class="active"></li>
                                                <li data-target="#rules-carousel" data-slide-to="1"></li>
                                                <li data-target="#rules-carousel" data-slide-to="2"></li>
                                                <li data-target="#rules-carousel" data-slide-to="3"></li>
                                            </ol>
                                            <div class="carousel-inner">
                                                <div class="carousel-item active  ">
                                                    <h2 class="carousel-heading">Disclaimer</h2>
                                                    <div class="carousel-text">
                                                        Tests are provided for educational and entertainment use only.
                                                        They are not intended to and should not be used to diagnose any disease or condition or to
                                                        be a
                                                        psychological advice of any kind.
                                                        Assesment is free and anonymous.
                                                    </div>
                                                </div>
                                                <div class="carousel-item  ">
                                                    <h2 class="carousel-heading">The Rosenberg self-esteem scale</h2>
                                                    <div class="carousel-text">
                                                        The Rosenberg self-esteem scale (RSES), developed by the sociologist Morris Rosenberg, is a
                                                        self-esteem measure widely used in social-science research.
                                                        The scale measures global self-worth by measuring both positive and negative feelings about
                                                        the
                                                        self.
                                                        The Rosenberg self-esteem scale is considered a reliable and valid quantitative tool for
                                                        self-esteem assessment.
                                                    </div>
                                                </div>
                                                <div class="carousel-item  ">
                                                    <h2 class="carousel-heading">The Hamilton Anxiety Rating Scale</h2>
                                                    <div class="carousel-text">
                                                        The Hamilton Anxiety Rating Scale (HAM-A) is a psychological questionnaire used by
                                                        clinicians to
                                                        rate the severity of a patient's anxiety. Anxiety can refer to things such as "a mental
                                                        state...a drive...a response to a particular situation…a personality trait...and a
                                                        psychiatric
                                                        disorder."
                                                        Though it was one of the first anxiety rating scales to be published, the HAM-A remains
                                                        widely
                                                        used by clinicians. It was originally published by Max Hamilton in 1959.
                                                    </div>
                                                </div>
                                                <div class="carousel-item  ">
                                                    <h2 class="carousel-heading">The UCLA Loneliness Scale</h2>
                                                    <div class="carousel-text">
                                                        Developed by psychologist Daniel Russell (1996), the UCLA Loneliness Scale (Version 3) is a
                                                        20-item measure that assesses how often a person feels disconnected from others.
                                                    </div>
                                                </div>
                                            </div>
                                            <a class="carousel-control-prev" href="#rules-carousel" role="button" data-slide="prev">
                                                <span class="carousel-control-prev-icon"></span>
                                            </a>
                                            <a class="carousel-control-next" href="#rules-carousel" role="button" data-slide="next">
                                                <span class="carousel-control-next-icon"></span>
                                            </a>

                                        </div></div></div><footer id="footer" class="bottom">
                                    <div class="btop">
                                        <a href="#tophead" >Back to top</a>
                                    </div>
                                    <div class="social">
                                        <ul class="social">
                                            <li><a href="https://www.instagram.com/meghasharma.16/" target="_blank">
                                                <span class="fa fa-instagram"></span>
                                            </a></li>
                                            <li><a href="https://github.com/meghasharmaa" target="_blank">
                                                <span class="fa fa-github"></span>
                                            </a></li>
                                            <li><a href="https://www.linkedin.com/in/megha-sharma-a579581ab/" target="_blank">
                                                <span class="fa fa-linkedin"></span>
                                            </a></li>
                                            <li><a href="mailto: megha9601@gmail.com" target="_blank">
                                                <span class="fa fa-envelope"></span>
                                            </a></li>
                                        </ul>
                                    </div>
                                </footer>
            </div>
                            );
}

export default MainIndex;