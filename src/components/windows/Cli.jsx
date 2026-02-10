import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = () => {

    const commands = {
        about: {
            description: 'About me',
            usage: 'about',
            fn: () => 'I am a full-stack web developer passionate about building modern web applications with React, Node.js, and cloud technologies.'
        },
        skills: {
            description: 'List technical skills',
            usage: 'skills',
            fn: () => `Frontend: React, Vue.js, Vanilla JS, Sass, HTML/CSS
                        Backend: Node.js, Express, Python, Django
                        Databases: MongoDB, PostgreSQL, MySQL
                        Tools: Git, Docker, Webpack, Vite
                        Cloud: AWS, Azure, Heroku`
        },
        projects: {
            description: 'View my projects',
            usage: 'projects',
            fn: () => `1. Portfolio Website - React + Vite
                        2. E-commerce Platform - MERN Stack
                        3. Task Management App - Next.js
                        4. Real-time Chat App - Socket.io
                        5. Data Dashboard - React + Chart.js`
        },
        experience: {
            description: 'Display work experience',
            usage: 'experience',
            fn: () => `Backend Developer (Projects & Training) (2024 - Present)
                      - Developed REST APIs using Node.js and Express
                      - Implemented JWT-based authentication and MongoDB integration
                      - Followed MVC architecture and best backend practices

                    Full Stack Training – Sheriyans Coding School
                      - Hands-on experience with MERN stack projects
                      - Focused on authentication, APIs, and database design`
        },

        contact: {
            description: 'Get contact information',
            usage: 'contact',
            fn: () => `Email: ng364357@gmail.com
                        Phone: +91 63XXXXXX67
                        Location: India`
        },

        github: {
            description: 'Open GitHub profile',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/Nikhil-11-11-2007', '_blank')
                return 'Opening GitHub...'
            }
        },
        resume: {
            description: 'Download resume',
            usage: 'resume',
            fn: () => 'Resume download started...'
        },
        social: {
            description: 'View social media links',
            usage: 'social',
            fn: () => `
                        Twitter   → type: twitter
                        LinkedIn  → type: linkedin
                        Portfolio → type: portfolio
                        `
        },

        twitter: {
            description: 'Open Twitter profile',
            usage: 'twitter',
            fn: () => {
                window.open('https://x.com/NikhilGupta6656', '_blank')
                return 'Opening Twitter...'
            }
        },

        linkedin: {
            description: 'Open LinkedIn profile',
            usage: 'linkedin',
            fn: () => {
                window.open('https://www.linkedin.com/in/nikhil-gupta-610973384/', '_blank')
                return 'Opening LinkedIn...'
            }
        },

        portfolio: {
            description: 'Open Portfolio',
            usage: 'portfolio',
            fn: () => {
                window.open('#')
                return 'Opening Portfolio...'
            }
        },


        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        }
    }

    const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to My Portfolio CLI!       ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
  • about     - Learn about me
  • skills    - View my technical skills
  • projects  - Check out my work
  • experience - See my career history
  • contact   - Get in touch

Happy exploring! 🚀
`

    return (
        <MacWindow>
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'nikhilgupta:~$'}
                    promptLabelStyle={{ color: 'royalblue' }}
                />
            </div>
        </MacWindow>
    )
}

export default Cli
