import React from 'react'
import Window from './Window'
import Terminal from 'react-console-emulator'
import "./Cli.scss"
const CLi = ({windowName,windowState,setWindowState}) => {
    const commands = {
  echo: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: (...args) => args.join(' ')
  },
  about: {
    description: 'Display information about me.',
    usage: 'about',
    fn: () => `About Me:
Name: Akshat
Role: Full Stack Developer
Passionate about creating innovative web applications and exploring new technologies.
Experience in React, Node.js, and modern web development.`
  },
  projects: {
    description: 'List my projects.',
    usage: 'projects',
    fn: () => `My Projects:
1. Portfolio Website - A React-based portfolio with terminal interface
2. E-commerce Platform - Full-stack application with payment integration
3. Task Management App - MERN stack application for productivity
4. Weather Dashboard - Real-time weather app using APIs`
  },
  skills: {
    description: 'Display my technical skills.',
    usage: 'skills',
    fn: () => `Technical Skills:
Frontend: React, Vue.js, HTML5, CSS3, JavaScript, TypeScript
Backend: Node.js, Express.js, Python, Django
Database: MongoDB, PostgreSQL, MySQL
Tools: Git, Docker, AWS, VS Code
Other: REST APIs, GraphQL, Agile methodologies`
  },
  contact: {
    description: 'Get my contact information.',
    usage: 'contact',
    fn: () => `Contact Information:
Email: akshat@example.com
LinkedIn: linkedin.com/in/akshat
GitHub: github.com/akshat
Phone: +1 (123) 456-7890`
  },
  experience: {
    description: 'Show my work experience.',
    usage: 'experience',
    fn: () => `Work Experience:
Senior Developer at Tech Corp (2022-Present)
- Led development of scalable web applications
- Mentored junior developers

Junior Developer at Startup Inc (2020-2022)
- Built responsive user interfaces
- Integrated third-party APIs`
  },
  education: {
    description: 'Display my educational background.',
    usage: 'education',
    fn: () => `Education:
Bachelor of Computer Science
University of Technology (2016-2020)
- GPA: 3.8/4.0
- Relevant Coursework: Data Structures, Algorithms, Web Development`
  },
  
}
  return (
    <Window windowName={windowName} windowState={windowState} setWindowState={setWindowState}>

        <div className='Cli_Window'>
 <Terminal
    className="terminal"
      commands={commands}
         welcomeMessage={'Welcome to Akshat\'s Portfolio Terminal! Type "help" to see all available commands.'}
        promptLabel={'AkshatTerminalReact:~$'}
        promptLabelStyle={{color:"green"}}
      />
        </div>

    </Window>
  )
}

export default CLi