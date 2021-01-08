import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Radium, { StyleRoot } from 'radium';
import { headShake, fadeInLeftBig } from 'react-animations';

const styles = {
  bannerFadeIn: {
    animationDuration: '3s',
    animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig'),
  },
  textFadeIn: {
    animationDuration: '6s',
    animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig'),
  },
  imageFadeIn: {
    animationDuration: '6s',
    animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig'),
  },
  socialFadeIn: {
    animationDuration: '6s',
    animationName: Radium.keyframes(headShake, 'headShake'),
  },
};

class Landing extends Component {
  render() {
    return (
      <StyleRoot>
        <div style={{ width: '100%', margin: 'auto' }}>
          <Grid className='landing-grid'>
            <Cell col={12}>
              <img
                src='https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png'
                alt='avatar'
                className='avatar-img'
              />

              <div className='banner-text' style={styles.bannerFadeIn}>
                <h1 style={styles.textFadeIn}>
                  Graduate Full Stack Web Developer
                </h1>

                <hr />

                <p style={styles.textFadeIn}>
                  With Experience in using HTML/CSS | Bootstrap | JavaScript |
                  React | React Native | NodeJS | Express | MongoDB
                </p>

                <div className='social-links' style={styles.imageFadeIn}>
                  {/* LinkedIn */}
                  <a
                    href='http://google.com'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <i className='fa fa-linkedin-square' aria-hidden='true' />
                  </a>

                  {/* Github */}
                  <a
                    href='http://google.com'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <i className='fa fa-github-square' aria-hidden='true' />
                  </a>

                  {/* Freecodecamp */}
                  <a
                    href='http://google.com'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <i className='fa fa-free-code-camp' aria-hidden='true' />
                  </a>

                  {/* Facebook */}
                  <a
                    href='https://www.facebook.com/niall.walters/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <i className='fa fa-facebook-f' aria-hidden='true' />
                  </a>
                </div>
              </div>
            </Cell>
          </Grid>
        </div>
      </StyleRoot>
    );
  }
}

export default Landing;
