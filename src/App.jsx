
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { WorkingExperienceCard } from "./components/WorkingExperienceCard"
import { ProjectCard } from "./components/ProjectCard"

export default function App() {

  const from = 'from-blue-700'
  const via = 'via-blue-300'
  const to = 'to-cyan-400'

  const workingExperiences = [
    {
      date: "November 2024 - Now",
      position: "Backend Developer",
      companyName: "CV Lintas Expansi Usaha (LIXUS)",
      companyWebLink: "https://lixus.id/",
      description: `
      <ul>
        <li> -	Collaborated with a team of five (consists of marketing and engineer team) on Enfagrow CRM development and maintenance. </li>
        <li> -	Contributed to system & database design, coding, API & query implementation, third party integrations, discussing and executing the proposed ideas with the team to fulfil the brand’s requirements and interests</li>
        <li> -	Documented and resolved customer journey-tracking issues, contributing to increased client sales through segmented and personalized marketing offers.</li>
        <li> -	Increased valid prospects by introducing a new sales team performance dashboard & tracker mechanism that monitors every new customer acquisition.</li>
      </ul>
      `
    },
    {
      date: "October 2024 - Now",
      position: "Backend Developer",
      companyName: "PT Alpha Jaya Inovasi",
      companyWebLink: "https://www.alphajayainovasi.com",
      description: "Contibuting in API & Backend applications development, which also gives me the opportunity to learn about system design, database design, and API implementation for various business in fulfilling company's clients needs. By working with the team also gives me the chance to learn about agile development, coordination, and communication with the team and clients. I also have the opportunity to work on several projects, which gives me some experiences in solving some business issue into creating a useful product to help them growing and maintaining their business."
    },
    {
      date: "June 2021 - Sept 2023",
      position: "Frontend Developer Intern",
      companyName: "PT Padepokan Tujuh Sembilan",
      companyWebLink: "https://www.tujuhsembilan.com/",
      description: "Contributing on the Workshop Management System project development, implementing a responsive, user-friendly and modern UI design, adding the functionality and interactivity for the app, and also collaborate with the team to integrate all the features."
    }
  ]

  const projects = [
    {
      imageUrl: "/enfamama.png",
      projectName: "Enfagrow CRM",
      description: `Enfamama A+ Club is a customer loyalty and CRM platform in the infant and child nutrition FMCG industry, supporting Enfagrow’s digital engagement strategy.
      The platform manages large-scale customer acquisition, validation, segmentation, and retention workflows, and plays a critical role in driving new user conversion, repeat purchases, and personalized marketing campaigns`,
      link: "https://www.enfa.co.id/loyalty-program",
      tools: ["Typescript", "NodeJs", "MikroOrm", "PostgreSQL", "GCP"]
    },
    {
      imageUrl: "/asset-transfer.png",
      projectName: "Web and IOT Based Automatic Asset Transfer Recording System for Badan Pertahanan Kota Bandung",
      description: "A system prototype to provide record asset transfer between rooms in the building automatically and record it on the web dashboard.",
      link: "",
      tools: ["PHP Programming Languange", "Laravel", "MySQL", "HTML", "CSS", "Javascript", "HiveMQ", "Arduino"]
    },
    {
      imageUrl: "/platform-library.png",
      projectName: "Naval Platform Library",
      description: "Naval Platform Library is a web-based application that provides an naval information library for the indonesian navy to access and manage their knowledge of worldwide naval units and its specifications, components and abilities.",
      link: "",
      tools: ["ReactJs", "Go Programming Languange", "gRPC", "PostgreSQL"]
    },
    {
      imageUrl: "/beker.png",
      projectName: "Beker WMS",
      description: "Beker WMS is a workshop management app, built for HBBA (Himpunan Bengkel Binaan Astra) organization. It manages the workshop master data, customer data, customer vehicle data, provides cashier system & invoice printing, and also manages service execution processing and reporting.",
      link: "",
      tools: ["HTML5", "CSS3", "ReactJs", "NextJs", "Material UI", "Java Springboot"]
    },
    {
      imageUrl: "/dashboard.png",
      projectName: "AGPOT Dashboard",
      description: "Agpot is an IoT-based application that utilizes temperature, humidity and rainfall recording devices with solar panel energy sources that are integrated with internet servers and can be monitored through web pages.",
      link: "https://agpot.vercel.app/",
      tools: ["HTML5", "CSS3", "ReactJs", "Tailwind CSS", "Daisy UI", "ApexCharts"]
    }
  ]


  return (
    <div className="flex flex-col lg:flex-row h-screen text-gray-700 font-poppins">
      <div className="lg:w-5/6 py-4 px-1 shadow-2xl">
        <div className="me-auto pt-5 lg:p-6 p-8 mb-4">
          <img className="rounded-full w-32 h-32 mb-2" src="/fotopakejasmet.png" style={{ objectFit: "cover" }} />
          <div className="block">
            <h3 className="text-2xl font-semibold mb-2 font-poppins">Uqyanzie Bintang</h3>
            <h5 className="font-sans text-md text-gray-500 mb-4">Software Engineer</h5>
            <p className="font-inter pr-8 lg:pr-0 text-neutral-800 font-medium">
              Passionate in contributing codes and designs to innovative and impactful software solutions.
            </p>
          </div>
        </div>
        <div className="px-8 lg:px-6 mt-10 mb-4">
          <h4 className="font-semibold">Reach me on : </h4>
          <h5 className="mb-4">
            <a className="font-sans italic text-blue-600">uqyanzie@gmail.com</a>
          </h5>
          <ul className="text-gray-600  flex w-full gap-5">
            <li>
              <a href="https://github.com/uqyanzie" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="text-5xl hover:scale-[1.1] transition duration-100 hover:ease-in" icon={faSquareGithub} /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/uqyanzie-bintang-b210781b9/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="text-5xl hover:scale-[1.1] transition duration-100 hover:ease-in" icon={faLinkedin} /></a>
            </li>
            <li>
              <a href="https://www.instagram.com/uqyanzie/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="text-5xl hover:scale-[1.1] transition duration-100 hover:ease-in" icon={faInstagram} /></a>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="lg:bg-gradient-to-t bg-gradient-to-l from-cyan-100 via-sky-300 to-cyan-400 background-animate text-cyan-400 lg:w-1 w-[70%] h-1 lg:h-[70%] self-center rounded-full lg:ms-5">
      <p>.</p> 
      </div> */}
      <div className="bg-blue-500 text-blue-500 shadow shadow-xl shadow-blue-400 lg:w-1 w-[80%] h-1 lg:h-[85%] lg:mt-4 rounded-full self-center lg:-ms-[2px]">
        <p>.</p>
      </div>

      <div className="flex-grow lg:overflow-y-scroll text-neutral-600">

        <div className="p-10">

          <div className="mb-10">
            <h3 className={`text-2xl font-semibold mb-3 bg-gradient-to-r ${from} ${via} ${to} text-transparent bg-clip-text bg-300% animate-gradient drop-shadow-lg `}>About</h3>
            <div className="flex flex-col gap-5">
              <p className="font-inter">
                Software Engineer with solid full-stack experience, specializing in building scalable and high-performance web applications, APIs and integrating multiple systems in cloud environments.
                Proven ability to collaborate across teams, lead system design discussions, and turn complex requirements into reliable, maintainable solutions.
                Adapt quickly to new technologies and environments, motivated by technical challenges and opportunities for deeper architectural ownership.
                Committed to clean code, continuous improvement, and clear communication.
              </p>
            </div>
          </div>

          <div className="mb-10">
            <h3 className={`text-2xl font-semibold mb-5 bg-gradient-to-r ${from} ${via} ${to} text-transparent bg-clip-text bg-300% animate-gradient drop-shadow-lg`}>Working Experiences</h3>

            <div className="flex flex-col gap-5">

              {
                workingExperiences.map((experience, index) => (
                  <WorkingExperienceCard
                    key={index}
                    position={experience.position}
                    companyName={experience.companyName}
                    companyWebLink={experience.companyWebLink}
                    date={experience.date}
                    description={experience.description}
                  />
                ))
              }
            </div>

          </div>

          <div className="mb-10">
            <h3 className={`text-2xl font-semibold mb-3 bg-gradient-to-r ${from} ${via} ${to} text-transparent bg-clip-text bg-300% animate-gradient drop-shadow-lg`}>Projects & Contributions</h3>

            <div className="flex flex-col gap-8">

              {
                projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    imageUrl={project.imageUrl}
                    projectName={project.projectName}
                    description={project.description}
                    link={project.link}
                    tools={project.tools}
                  />
                ))
              }

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}