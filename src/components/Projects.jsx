const project =[
    {
    title: "BRO(Booking, Reservation and Ordering System)",
    description: "BRO is a web-based application designed to facilitate the booking, reservation, and ordering process for customers and store owners. The system will support user authentication, store management, menu management, customer reviews, wishlist management, cart management, payment processing, table booking, and search functionalities.1",
    image: "path/to/image1.jpg",
    technologies:["HTML", "CSS", "JavaScript", "React","stripe","Node.js","Express.js","MySQL","Prisma","Tailwind CSS","Bcrypt","JWT","React-Router","Axios","Postman"],
    link: "https://example.com/project1",
    },
    {
    title: "Education Management System",
    description: "The university registration system is designed to facilitate student, instructor, and administrator interactions. It enables students to register for courses, view schedules, check grades, and monitor payment status. Instructors can manage course content, grade students, and communicate important updates. Administrators handle student and faculty data, course offerings, schedules, and payment verification. The system ensures secure, reliable, and scalable operations, supporting the future growth of users while providing an intuitive interface for all stakeholders.",
    image: "path/to/image1.jpg",
    technologies:["HTML", "CSS", "JavaScript", "React","stripe","Node.js","Express.js","MySQL","Prisma","Tailwind CSS","Bcrypt","JWT","React-Router","Axios","Postman"],
    link: "https://example.com/project1",
    },
    {
    title: "Crypto Web Page",
    description: "Landing page for a cryptocurrency project using HTML, CSS, and JavaScript. fetch data from an API and display it on the page.",
    image: "path/to/image1.jpg",
    technologies:["HTML", "CSS", "JavaScript"],
    link: "https://example.com/project1",
    },
    {
    title: "Music Landing Page",
    description: "Landing page for a music app using HTML and CSS.",
    image: "path/to/image1.jpg",
    technologies:["HTML", "CSS"],
    link: "https://example.com/project1",
    },
    {
    title: "Dashboard Landing Page", 
    description: "Landing page for a dashboard using HTML and CSS.",
    image: "path/to/image1.jpg",
    technologies:["HTML", "CSS"],
    link: "https://example.com/project1",
    },
    {
    title: "Project 1",
    description: "Description of Project 1",
    image: "path/to/image1.jpg",
    technologies:["HTML", "CSS"],
    link: "https://example.com/project1",
    },
    {
    title: "Project 1",
    description: "Description of Project 1",
    image: "path/to/image1.jpg",
    technologies:["HTML", "CSS"],
    link: "https://example.com/project1",
    },
    {
    title: "Project 1",
    description: "Description of Project 1",
    image: "path/to/image1.jpg",
    technologies:["HTML", "CSS"],
    link: "https://example.com/project1",
    },
    {
    title: "Project 1",
    description: "Description of Project 1",
    image: "path/to/image1.jpg",
    technologies:["HTML", "CSS"],
    link: "https://example.com/project1",
    },
    {
    title: "Project 1",
    description: "Description of Project 1",
    image: "path/to/image1.jpg",
    technologies:["HTML", "CSS"],
    link: "https://example.com/project1",
    },
]
function Projects() {
  return (
    <div className='pb-4'>
      <h2 className='my-20 text-center text-4xl'>Projects</h2>
      <div>
        {
          project.map((project, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:jusify-center'>
                <div className='w-1/4 lg:w-1/4'>
                    <img src={project.image} width={250} height={250} alt={project.title} className='mb-6 rounded'/>                
                </div>
                <div className='w-3/4 lg:w3/4'>
                    <h3 className='mb-2 text-2xl font-semibold'>{project.title}</h3>
                    <p className="mb-4 text-stone-400">{project.description}</p>
                    <div className="mb-4 flex flex-wrap">
                    {
                        project.technologies.map((technology, index) => (
                            <span key={index} className='m-2 rounded bg-stone-700 p-2 text-sm font-medium text-stone-300'>{technology}</span>
                        ))
                    }
                    </div>
                </div>
                <a href={project.link} target='_blank' rel='noopener noreferrer' className='bg-white rounded-full p-4 text-sm text-stone-800'>View Project</a>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects
