import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src='https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png'
                alt='avatar'
                style={{ height: '200px' }}
              />
            </div>

            <h2 style={{ paddingTop: '2em' }}>Niall Walters</h2>
            <h4 style={{ color: 'grey' }}>Graduate Software Engineer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>
              I present as an outgoing, social person, well-spoken and can be
              pro-active and responsible in any graduate programming role,
              handling pressure and stress who is intuitive and effective in
              dealing with public, a hardworking individual working well within
              a team with a good work ethic striving to complete tasks on time.
            </p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>5 Balfour Avenue, Belfast, BT7 2EU</p>
            <h5>Phone</h5>
            <p>07455 003158</p>
            <h5>Email</h5>
            <p>niallwalters135@gmail.com</p>
            <h5>Web</h5>
            <p>Aboutniallwalters.com</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className='resume-right-col' col={8}>
            <h2>Education</h2>

            <Education
              startYear={2017}
              endYear={2021}
              schoolName='St Patricks Grammar School, Downpatrick'
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Education
              startYear={2007}
              endYear={2009}
              schoolName='University Of Ulster - BSc (Hons) Computing Science'
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={2020}
              jobName='Placement at Citi'
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Experience
              startYear={2012}
              endYear={2016}
              jobName='Second Job'
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>
            <Skills skill='javascript' progress={80} />
            <Skills skill='Java' progress={75} />
            <Skills skill='Mockito' progress={50} />
            <Skills skill='Angular' progress={50} />
            <Skills skill='HTML/CSS' progress={60} />
            <Skills skill='NodeJS' progress={50} />
            <Skills skill='React' progress={50} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
