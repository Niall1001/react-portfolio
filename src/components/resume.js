import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Cell } from 'react-mdl';
import { Route } from 'react-router-dom';
import Radium, { StyleRoot } from 'radium';
import { fadeIn, fadeInLeftBig } from 'react-animations';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Avatar from '@material-ui/core/Avatar';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import TechnicalSkills from './TechnicalSkills';
import me from './assets/me.jpg';
import uni_logo from './assets/uni-logo.jpg';
import school_logo from './assets/school-logo.png';

import '../App.css';
import { TableRowColumn } from 'material-ui';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const styles = {
  leftSide: {
    animationDuration: '3s',
    animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig'),
  },
  textFadeIn: {
    animationDuration: '6s',
    animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig'),
  },
};

function createData(year, school, date) {
  switch (year) {
    case 2016:
      return {
        year,
        school,
        date,
        modules: [
          {
            module: 'A-Level - Software Systems Development',
            score: 'B',
            description: (
              <a href='https://ccea.org.uk/post-16/gce/subjects/gce-software-systems-development-2016'>
                {' '}
                <p>2016 Software Systems Development Specification</p>
              </a>
            ),
          },
          {
            module: 'A-Level - Chemistry',
            score: 'C',
            description: (
              <a href='https://ccea.org.uk/post-16/gce/subjects/gce-chemistry-2016'>
                {' '}
                <p>2016 Chemistry Specification</p>
              </a>
            ),
          },
          {
            module: 'A-Level - Biology',
            score: 'C',
            description: (
              <a href='https://ccea.org.uk/post-16/gce/subjects/gce-biology-2016'>
                {' '}
                <p>2016 Biology Specification</p>
              </a>
            ),
          },
        ],
      };
    case 2017:
      return {
        year,
        school,
        date,
        modules: [
          {
            module: 'Mathematics for Computing',
            score: 80,
            description: 'Learn how to program',
          },
          {
            module: 'Programming I (Semester 1)',
            score: 87,
            description: 'Learn how to program',
          },
          {
            module: 'Computer Technologies',
            score: 71,
            description: 'Learn how to program',
          },
          {
            module: 'Introduction to Databases',
            score: 77,
            description: 'Learn how to program',
          },
          {
            module: 'Systems Analysis and Design',
            score: 75,
            description: 'Learn how to program',
          },
          {
            module: 'Programming I (Semester 2)',
            score: 79,
            description: 'Learn how to program',
          },
        ],
      };
    case 2018:
      return {
        year,
        school,
        date,
        modules: [
          {
            module: 'Systems Software',
            score: 80,
            description: 'Learn how to program',
          },
          {
            module: 'Data Communications & Networking',
            score: 84,
            description: 'Learn how to program',
          },
          {
            module: 'Systems Development',
            score: 68,
            description: 'Learn how to program',
          },
          {
            module: 'Mobile Development',
            score: 69,
            description: 'Learn how to program',
          },
          {
            module: 'Programming II',
            score: 65,
            description: 'Learn how to program',
          },
          {
            module: 'Professional Development',
            score: 62,
            description: 'Learn how to program',
          },
          {
            module: 'Client-Server Application Development',
            score: 60,
            description: 'Learn how to program',
          },
        ],
      };
    case 2019:
      return {
        year,
        school,
        date,
        modules: [
          {
            module: 'Year of Professional Experience',
            score: 'Pass - 75',
            description: 'Placement',
          },
        ],
      };
    case 2021:
      return {
        year,
        school,
        date,
        modules: [
          {
            module: 'Concurrent Programming',
            score: 80,
            description: 'Learn how to program',
          },
          {
            module: 'Advanced Computer Architecture',
            score: 70,
            description: 'Learn how to program',
          },
          {
            module: 'Software Engineering Project',
            score: 70,
            description: 'Learn how to program',
          },
          {
            module: 'Malware Analysis',
            score: 70,
            description: 'Learn how to program',
          },
          {
            module: 'Cloud Computing',
            score: 70,
            description: 'Learn how to program',
          },
        ],
      };
    default:
      return { year, school, date, modules: [] };
  }
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root} hover='true'>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {row.year}
        </TableCell>
        <TableCell>{row.school}</TableCell>
        <TableCell align='right'>{row.date}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box margin={1}>
              <Table size='small'>
                <TableHead>
                  <TableRow>
                    <TableCell>Module</TableCell>
                    <TableCell align='right'>Score</TableCell>
                    <TableCell align='right'>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.modules.map((moduleRow) => (
                    <TableRow key={moduleRow.module}>
                      <TableCell component='th' scope='row'>
                        {moduleRow.module}
                      </TableCell>
                      <TableCell align='right'>{moduleRow.score}</TableCell>
                      <TableCell align='right'>
                        {moduleRow.description}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    year: PropTypes.number.isRequired,
    school: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    moduels: PropTypes.arrayOf(
      PropTypes.shape({
        module: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired
    ),
  }),
};

const rows = [
  createData(2016, 'St Patricks Grammar School', 2016),
  createData(2017, '1st Year - Ulster University', 2017),
  createData(2018, '2st Year - Ulster University', 2018),
  createData(2019, 'Citibank Placement Year', 2019),
  createData(2021, 'Final Year - Ulster University', 2021),
];

class Resume extends Component {
  render() {
    return (
      <StyleRoot>
        <div className='resume-left-col'>
          <Grid>
            <Cell col={5}>
              <div style={{ textAlign: 'center' }}>
                <img
                  src={me}
                  alt='Avatar'
                  style={styles.leftSide}
                  height='400px'
                />
              </div>

              <h2 style={({ paddingTop: '2em' }, styles.leftSide)}>
                Niall Stephen Walters
              </h2>
              <h4 style={({ color: 'grey' }, styles.leftSide)}>
                Graduate Computer Scientist / Software Engineer
              </h4>
              <hr style={{ borderTop: '3px solid #000000' }} />
              <p>
                I present as an outgoing, social person, well-spoken and can be
                pro-active and responsible in any graduate placement role,
                handling pressure and stress who is intuitive and effective in
                dealing with the public, a hardworking individual working well
                within a team with a good work ethic striving to complete tasks
                on time.
              </p>
              <hr style={{ borderTop: '3px solid #000000' }} />
              <h5>Address</h5>
              <p>5, Balfour Ave, BT7 2EU, Northern Ireland, UK</p>
              <h5>Phone</h5>
              <p>(+44) 7455 003158</p>
              <h5>Email</h5>
              <p>niallwalters135@gmail.com</p>
              <h5>Web</h5>

              <a href='https://github.com/Niall1001'>
                {' '}
                <p>https://github.com/niall1001</p>
              </a>
              <hr style={{ borderTop: '3px solid #000000' }} />
            </Cell>
            <Cell className='resume-right-col' col={7}>
              <h2>Education</h2>
              <Avatar src={school_logo} />
              <Education
                startYear={2010}
                endYear={2017}
                schoolName='St Patricks Grammar School (Northern Ireland)'
                schoolDescription='I studied in my highschool gaining qualification that include both GCSE and A-Levels'
              />
              <Avatar src={uni_logo} />
              <Education
                startYear={2017}
                endYear={2021}
                schoolName='University of Ulster (Northern Ireland)'
                schoolDescription='I enrolled in Computing Science programme in Ulster University Jordanstown and spent a year working as a Placement Software Engineer in Citibank as part our 3rd year placement programme'
              />

              <hr style={{ borderTop: '3px solid #e22947' }} />
              <h2>Modules</h2>
              <TableContainer component={Paper}>
                <Table aria-label='collapsible table' className='table'>
                  <TableHead>
                    <TableRow className='remove-line'>
                      <TableCell />
                      <TableCell>Year</TableCell>
                      <TableCell>School</TableCell>
                      <TableCell align='right'>Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <Row key={row.year} row={row} />
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <h2>Experience</h2>
              <Experience
                startYear={2019}
                endYear={2020}
                jobName='Placement Software Engineer - Citi Bank'
                jobDescription='I worked for Citibank as Placement Software Engineer. Working within a Software Development based team, I have gained valuable insight into the world of Work as a Software Engineer. Participating and being included in daily meetings and knowledge sharing sessions has greatly improved my understanding and sparked enthusiasm into my daily work.
                Taking on the role of Scrum master, I planned and executed tasks to ensure sprint completion. I ensured tasks completed by my team where to a high standard and done on time. 
                Deployed my changes of code from Development into Production. Afforded me the opportunity to see how Citi completed this and introduced me to processes that include the use of; uDeploy and TeamCity as deployment tools to complete these tasks.
                Left a lasting impact with my team at Citi as I created and developed the mavenisation of one of the applications my team worked on throughout the year. Completed and worked on JIRA tasks daily has increased my coding knowledge and application.
                Working with a team to present Java training to employees that are training for the Java certificate training.'
              />
              <hr style={{ borderTop: '3px solid #e22947' }} />

              <h2>Technical Skills</h2>
              <TechnicalSkills
                skillsName='A-Level Software Systems Development Project'
                skillsDescription='In A-level software,
               I began by breaking down the specified school (Provided by a case study) into different tables that held relevant information on;
                Tutors, Students, Fees, Instruments, Events etc. as well as tables to hold information on students renting an instrument for example.
                 Creating a working database in SQL and then created a suitable front-end system that I could utilise and modify the database in accordance to SQL queries that I created.
                  Also, creating my front-end project using C# in a way that could be easily readable and act fully independent and be integrated seamlessly with each of my teammates projects;
                   to create a fully modular system.'
              />
              <TechnicalSkills
                skillsName='Citi Bank Placement Year'
                skillsDescription='Through completing a placement with Citi, I have greatly improved my knowledge of Java and SQL.
                 I was assigned tasks throughout the year including; refactoring methods, creating test cases using Mockito and fixing logical issues within production applications.
                Throughout this year I was introduced to maven style projects and I converted a project from a simple jar file structure to a maven style structure.
                Improvement of interpersonal skills like; Speaking - Throughout placement I was encouraged to voice any problems I was struggling with to my team, so that they could help resolve any issues.
                Listening - I demonstrated clear listening and understanding skills through taking online training courses on both Java and Mockito and through in house training on both SQL and Python training when I had to listen clearly to what was being said, assimilate and the to apply the knowledge as required. 
                Presenting – In joining the Java Certificate Training Scheme I had to present knowledge via presentations to support others in gaining their Java Certificate qualifications.'
              />

              <h2>Language Proficency</h2>
              <Skills skill='javascript' progress={100} />
              <Skills skill='HTML/CSS' progress={80} />
              <Skills skill='NodeJS' progress={50} />
              <Skills skill='React' progress={75} />
            </Cell>
          </Grid>
        </div>
      </StyleRoot>
    );
  }
}

export default Resume;
