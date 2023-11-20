
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareGithub, faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons"

export default function App() {

  const from = 'from-blue-700'
  const via = 'via-blue-300'
  const to =  'to-cyan-400'



  return (
    <div className="flex flex-col lg:flex-row h-screen text-gray-700 font-poppins">
      <div className="lg:w-5/6 py-4 px-1 shadow-2xl">
        <div className="me-auto pt-5 lg:ps-6 ps-8 mb-4">
          <img className="rounded-full w-32 h-32 mb-2" src="/fotopakejasmet.png" style={{objectFit: "cover"}}/>
          <div className="block">
            <h3 className="text-2xl font-semibold mb-2 font-poppins">Uqyanzie Bintang</h3>
            <h5 className="font-sans text-md text-gray-500 mb-4">Final Year Software Engineering Student</h5>
            <p className="font-inter lg:w-full w-[60%] text-neutral-800 font-medium">
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
            <a href="https://www.linkedin.com/in/uqyanzie-bintang-b210781b9/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="text-5xl hover:scale-[1.1] transition duration-100 hover:ease-in" icon={faLinkedin}/></a>
          </li>
          <li>
            <a href="https://www.instagram.com/uqyanzie/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="text-5xl hover:scale-[1.1] transition duration-100 hover:ease-in" icon={faInstagram}/></a>
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
        
        <div className="px-10 py-5">
          
          <div className="mb-10">
            <h3 className={`text-2xl font-semibold mb-3 bg-gradient-to-r ${from} ${via} ${to} text-transparent bg-clip-text bg-300% animate-gradient drop-shadow-lg `}>About</h3>
            <div className="flex flex-col gap-5">
              <p className="font-inter">
                Final year student in Software Engineering major, expected to graduate in 2024. 
                Seeking career at <strong>software development Industries</strong>, and have been working on several projects to solve people problems.
                I am eager to further develop my skills as a software engineer and contribute my expertise to challenging projects. If you are interested in collaborating or discussing potential opportunities, feel free to reach me out. 
                Let's connect and build the future together!
              </p>
            </div>
          </div>

          <div className="mb-10">
            <h3 className={`text-2xl font-semibold mb-5 bg-gradient-to-r ${from} ${via} ${to} text-transparent bg-clip-text bg-300% animate-gradient drop-shadow-lg`}>Working Experiences</h3>

            <div className="flex flex-col gap-5">

              <a className="hover:text-cyan-700" href="https://www.tujuhsembilan.com/" target="_blank" rel="noopener noreferrer">
                <div className="rounded-lg p-[2.5px] bg-gradient-to-r from-blue-500 via-blue-100 to-cyan-600 hover-background-animate cursor-pointer hover:shadow-blue-300 shadow-lg hover:shadow-xl transition duration-100 hover:ease-in">
                  <div className="bg-sky-50 hover:bg-neutral-50 py-4 px-10 rounded-md gap-8 transition duration-100 hover:ease-in hover:opacity-90">
                    <div className="block lg:flex gap-3 h-full">
                      <div className="inline font-poppins text-sm w-[28%] self-center font-semibold">
                        June 2021 - Sept 2023
                      </div>
                      <div className="hidden lg:block h-[100] bg-blue-500 border rounded-full w-[8px]"></div>
                      <div className="lg:ms-2 block mt-2 lg:mt-1">
                        <div className="flex align-middle hover:scale-[1.03] mb-2">
                          <div className="flex flex-col md:inline-flex lg:flex-row">
                            <h5 className="text-lg font-semibold mr-1">Frontend Developer Intern</h5>
                            <h5 className="hidden lg:flex text-lg font-semibold mr-1">·</h5>  
                            <h5 className="text-lg font-semibold mr-1">
                              PT Padepokan Tujuh Sembilan 
                            </h5>    
                          </div>
                          <svg className="text-sm mt-1 hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
                        </div>
                        <p className="font-inter">Contributing on the Workshop Management System project development, implementing a responsive, user-friendly and modern UI design, adding the functionality and interactivity for the app, and also collaborate with the team to integrate all the features.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>       

            </div>

          </div>

          <div className="mb-10">
            <h3 className={`text-2xl font-semibold mb-3 bg-gradient-to-r ${from} ${via} ${to} text-transparent bg-clip-text bg-300% animate-gradient drop-shadow-lg`}>Projects</h3>

            <div className="flex flex-col gap-8">

              <a className="hover:text-cyan-700" target="_blank" rel="noopener noreferrer">
                <div className="rounded-lg p-[2.5px] bg-gradient-to-r from-blue-500 via-blue-100 to-cyan-600 hover-background-animate cursor-pointer hover:shadow-blue-300 shadow-lg hover:shadow-xl transition duration-100 hover:ease-in">
                  <div className="bg-sky-50 hover:bg-neutral-50 py-4 px-10 rounded-md gap-8 lg:flex transition duration-100 hover:ease-in hover:backd">
                    <div className="max-w-[185px] mb-3 lg:mb-0 rounded-md h-fit shadow-xl shadow-gray-300">
                      <img className="rounded-md" src="/beker.png"/>
                    </div>
                    <div>
                      <div className="inline-flex hover:scale-[1.03]">
                        <h5 className="text-lg font-semibold mr-1 mb-2">
                          Beker WMS
                        </h5>  
                      </div>
                      <p className="font-inter">Beker WMS is a workshop management app, built for HBBA (Himpunan Bengkel Binaan Astra) organization</p>
                      <div className="flex flex-wrap pt-3 gap-3">
                        <a className="rounded-full border border-blue-500 text-xs p-1 px-2">
                          HTML5
                        </a>
                        <a className="rounded-full border border-blue-500 text-xs p-1 px-2">
                          CSS3
                        </a>
                        <a className="rounded-full border border-blue-500 text-xs p-1 px-2">
                          ReactJs
                        </a>
                        <a className="rounded-full border border-blue-500 text-xs p-1 px-2">
                          NextJs
                        </a>
                        <a className="rounded-full border border-blue-500 text-xs p-1 px-2">
                          Material UI
                        </a>
                      </div>
                    </div> 
                  </div>
                </div>
              </a>        

              <a className="hover:text-cyan-700" href="https://agpot.vercel.app/" target="_blank" rel="noopener noreferrer">
                <div className="rounded-lg p-[2.5px] bg-gradient-to-r from-blue-500 via-blue-100 to-cyan-600 hover-background-animate cursor-pointer hover:shadow-blue-300 shadow-lg hover:shadow-xl transition duration-100 hover:ease-in">
                  <div className="bg-sky-50 hover:bg-neutral-50 py-4 px-10 rounded-md gap-8 lg:flex transition duration-100 hover:ease-in hover:opacity-90">
                    <div className="max-w-[185px] mb-3 lg:mb-0 rounded-md h-fit shadow-xl shadow-gray-300">
                      <img className="rounded-md" src="/dashboard.png"/>
                    </div>
                    <div>
                      <div className="inline-flex hover:scale-[1.03]">
                        <h5 className="text-lg font-semibold mr-1 mb-2">
                          AGPOT Dashboard
                        </h5>  
                        <svg className="text-sm mt-1 hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
                      </div>
                      <p className="font-inter">Agpot is an IoT-based system development project that utilizes temperature, humidity and rainfall recording devices with solar panel energy sources that are integrated with internet servers and can be monitored through web pages.</p>
                      <div className="flex flex-wrap pt-3 gap-3">
                        <a className="rounded-full border border-blue-500 text-xs p-1 px-2">
                          HTML5
                        </a>
                        <a className="rounded-full border border-blue-500 text-xs p-1 px-2">
                          CSS3
                        </a>
                        <a className="rounded-full border border-blue-500 text-xs p-1 px-2">
                          ReactJs
                        </a>
                        <a className="rounded-full border border-blue-500 text-xs p-1 px-2">
                          Tailwind CSS
                        </a>
                        <a className="rounded-full border border-blue-500 text-xs p-1 px-2">
                          Daisy UI
                        </a>
                        <a className="rounded-full border border-blue-500 text-xs p-1 px-2">
                          ApexCharts
                        </a>
                      </div>
                    </div> 
                  </div>
                </div>
              </a>                    

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}