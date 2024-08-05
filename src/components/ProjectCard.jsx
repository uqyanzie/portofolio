export function ProjectCard({
    imageUrl = '', projectName = '', description = '', link = '', tools = []  
}) {
    return (
        <a className="hover:text-cyan-700" href={link.length > 0 ? link : '#'} target={link.length > 0 ? '_blank' : ''} rel="noopener noreferrer">
                <div className="rounded-lg p-[2.5px] bg-gradient-to-r from-blue-500 via-blue-100 to-cyan-600 hover-background-animate cursor-pointer hover:shadow-blue-300 shadow-lg hover:shadow-xl transition duration-100 hover:ease-in">
                  <div className="bg-sky-50 hover:bg-neutral-50 py-4 px-10 rounded-md gap-8 lg:flex transition duration-100 hover:ease-in hover:opacity-90">
                    <div className="max-w-[200px] mb-3 lg:mb-0 rounded-md h-fit drop-shadow-xl shadow-gray-300">
                      <img className="rounded-md" src={imageUrl} />
                    </div>
                    <div className="flex flex-col">
                      <div className="inline-flex hover:scale-[1.03]">
                        <h5 className="text-lg font-semibold mr-1 mb-2">
                          {projectName}
                        </h5>  
                       { link.length > 0 && ( 
                        <svg 
                            className="text-sm mt-1 hover:text-blue-500" 
                            xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path 
                            d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/>
                        </svg>
                        )}
                      </div>
                      <p className="font-inter">{description}</p>
                      <div className="flex flex-wrap pt-3 gap-3 justify-self-end">
                        {tools.map((tool, index) => (
                            <div key={index} className="rounded-full border border-blue-500 text-xs p-1 px-2">
                                {tool}
                            </div>
                        ))}
                      </div>
                    </div> 
                  </div>
                </div>
              </a>
    )
}

