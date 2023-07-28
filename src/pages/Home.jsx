import React, {useEffect, useState} from 'react'
import NavBar from '../componets/NavBar'
import axios from 'axios'
import { MAIN_SECTION } from './style/Home'


const LOGIN_STATUS = JSON.parse(localStorage.getItem("Login_Status"))
let flag = true;
const monthsArray = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

export default function Home() {

    const [projects, setProjects] = useState([]);
    const [loadedImages, setLoadedImages] = useState([]);
    

    const handleImageLoad = (index)=>{
        setLoadedImages(
        (previousLoadedImages => {
            const updatedLoadedImages = [...previousLoadedImages];
            updatedLoadedImages[index] = true;
            return updatedLoadedImages;
        })
        )
    }
    const loadImage = (src, index)=>{
        const image = new Image();
        image.src = src;
        image.onload = ()=>{handleImageLoad(index)}
    }

    if((projects?.result?.length > 0) && flag){
            flag = false;
            projects?.result?.forEach((project, index) =>{
            loadImage(project.poster, index+1)
        })
    }

    const data = async()=>{
        try{
            const body = {
                "category": "movies",
                "language": "kannada", 
                "genre": "all",
                "sort": "voting"
            }
            const res = await axios.post(process.env.REACT_APP_GEEKSYNERGY_API, body)
            
            setProjects(await res.data)  

        }catch(e){
            console.log(e);
        }
        
    }

    useEffect(()=>{
        data()
    },[])

    if((LOGIN_STATUS === null) || (LOGIN_STATUS.login_status !== true)){
        window.location.href = "/login"
        return
    }

    const dateMatch = (t)=>{
        const date = new Date(t * 1000);
        const month = date.getMonth() ;
        const day = date.getDate();
        return `${day} ${monthsArray[month]}`
         
    }


    return (
        
        <>
            
            
            <div className='z-10 bg-white w-full h-16 fixed top-0 left-0 drop-shadow-lg'>
                <div className='h-full flex items-center justify-center overflow-hidden' >
                        <img src="https://www.geeksynergy.com/assets/img/logo/logo-2.png" alt="" width={48}/>
                        <span >GeekSynergy</span>
                </div>
            </div>

            <NavBar/>
            
            <div className=' h-screen  overflow-y-auto'>
                <div className={`${MAIN_SECTION} mt-16 `}>
                    {projects?.result?.length > 0 ?
                        projects.result.map((project, i) => {
                            
                            return loadedImages[i + 1] ?
                            <div key={i} className=' overflow-hidden'>
                                
                            <div className={`${"PROJECT_POD"} border-2 rounded flex p-2 hover:cursor-pointer`}>
                                <div className='relative mr-2 flex items-center w-8 h-[1rem] my-auto rounded before:absolute  before:border-l-8 before:border-t-8 before:w-4 before:h-4 before:border-gray-400 before:bottom-6 before:left-0.5 before:rotate-45	before:rounded  after:absolute  after:border-r-8 after:border-b-8 after:w-4 after:h-4 after:border-gray-400 after:top-6 after:left-0.5 after:rotate-45	after:rounded flex justify-center font-semibold'>{project.totalVoted}</div>
                                
                                <div id='poster' className='w-[182px] h-[182px] bg-gray-400 scale-100' >
                                    <img className='w-full h-full' src={project.poster} alt="poster" loading='lazy'/>
                                </div>
                                <div className=' ml-2 w-full overflow-hidden truncate w-max-full'>
                                    <div className={`mt-1 mb-2 w-full text-xl font-bold  `}>{project.title}</div>
                                    <div className={`mb-2 h-[1rem] font-medium `}><span className='block truncate  w-full'><span className='text-gray-500'>Genre:</span> {project.genre}</span></div>
                                    <div className={`mb-2 h-[1rem] font-medium `}><span className='block truncate  w-full'><span className='text-gray-500'>Director:</span> {project.director}</span></div>
                                    <div className={`mb-2 h-[1rem] font-medium "`}><span className='block truncate  w-full'><span className='text-gray-500'>Starring: </span> {project.stars}</span></div>
                                    <div className='flex gap-1'>
                                        <div className={`mt-1 mb-1 pr-2 border-r-2`}>Mins</div> 
                                        <div className={`mt-1 mb-1 pr-2 border-r-2`}>{project.language}</div> 
                                        <div className={`mt-1 mb-1 pr-2 border-r-2`}>{dateMatch(project.releasedDate)}</div> 
                                    </div>
                                    <div className='flex gap-1'>
                                        <div className={`mt-1 mb-1 pr-2 border-r-2 text-teal-600`}>{project.pageViews} views</div> 
                                        <div className={`mt-1 mb-1 pr-2 border-r-2 text-teal-600`}> Voted by {project.voting} people(s)</div> 

                                    </div>
                                </div>
                            </div>
                            <div id='watch_trailer' className={` w-full mx-auto bg-gray-300  h-[2rem] font-bold text-white bg-sky-500 flex justify-center items-center hover:bg-sky-700 hover:cursor-pointer rounded-b`}>Watch Trailer</div>

                        </div>
                                :
                                <div key={i} className=' overflow-hidden'>
                                
                                <div className={`${"PROJECT_POD"} animate-pulse border-4 rounded flex p-2`}>
                                    <div className='relative mr-2 flex items-center bg-gray-400 w-8 h-[1rem] my-auto rounded before:absolute  before:border-l-8 before:border-t-8 before:w-4 before:h-4 before:border-gray-400 before:bottom-6 before:left-0.5 before:rotate-45	before:rounded  after:absolute  after:border-r-8 after:border-b-8 after:w-4 after:h-4 after:border-gray-400 after:top-6 after:left-0.5 after:rotate-45	after:rounded'></div>
                                    <div className='w-[200px] h- bg-gray-400'></div>
                                    <div className='ml-2 w-full '>
                                        <div className={`mt-1 mb-2 bg-gray-400 w-full h-[1.5rem]`}></div>
                                        <div className={`mb-2 bg-gray-400 w-[40%] h-[1rem]`}></div>
                                        <div className={`mb-2 bg-gray-300 w-[50%] h-[1rem]`}></div>
                                        <div className={`mb-2 bg-gray-400 w-[45%] h-[1rem]`}></div>
                                        <div className='flex gap-1'>
                                            <div className={`mt-1 mb-1 bg-gray-400 w-[25%] h-[1rem] `}></div> 
                                            <div className={`mt-1 mb-1 bg-gray-400 w-[20%] h-[1rem]`}></div> 
                                            <div className={`mt-1 mb-1 bg-gray-400 w-[30%] h-[1rem]`}></div>
                                        </div>
                                        <div className='flex gap-1'>
                                            <div className={`mt-1 mb-1 bg-gray-400 w-[35%] h-[1rem] `}></div> 
                                            <div className={`mt-1 mb-1 bg-gray-400 w-[20%] h-[1rem]`}></div> 
                                        </div>
                                    </div>
                                </div>
                                <div className={` w-full mx-auto bg-gray-300  h-[2rem]`}></div>

                            </div>
                        })
                        :
                        
                        ['', '', '', '', '', '', '', '', ''].map((e, i) => {
                            return <div key={i} className=' overflow-hidden'>
                                
                                <div className={`${"PROJECT_POD"} animate-pulse border-4 rounded flex p-2`}>
                                    <div className='relative mr-2 flex items-center bg-gray-400 w-8 h-[1rem] my-auto rounded before:absolute  before:border-l-8 before:border-t-8 before:w-4 before:h-4 before:border-gray-400 before:bottom-6 before:left-0.5 before:rotate-45	before:rounded  after:absolute  after:border-r-8 after:border-b-8 after:w-4 after:h-4 after:border-gray-400 after:top-6 after:left-0.5 after:rotate-45	after:rounded'></div>
                                    <div className='w-[200px] h- bg-gray-400'></div>
                                    <div className='ml-2 w-full '>
                                        <div className={`mt-1 mb-2 bg-gray-400 w-full h-[1.5rem]`}></div>
                                        <div className={`mb-2 bg-gray-400 w-[40%] h-[1rem]`}></div>
                                        <div className={`mb-2 bg-gray-300 w-[50%] h-[1rem]`}></div>
                                        <div className={`mb-2 bg-gray-400 w-[45%] h-[1rem]`}></div>
                                        <div className='flex gap-1'>
                                            <div className={`mt-1 mb-1 bg-gray-400 w-[25%] h-[1rem] `}></div> 
                                            <div className={`mt-1 mb-1 bg-gray-400 w-[20%] h-[1rem]`}></div> 
                                            <div className={`mt-1 mb-1 bg-gray-400 w-[30%] h-[1rem]`}></div>
                                        </div>
                                        <div className='flex gap-1'>
                                            <div className={`mt-1 mb-1 bg-gray-400 w-[35%] h-[1rem] `}></div> 
                                            <div className={`mt-1 mb-1 bg-gray-400 w-[20%] h-[1rem]`}></div> 
                                        </div>
                                    </div>
                                </div>
                                <div className={` w-full mx-auto bg-gray-300  h-[2rem]`}></div>

                            </div>
                        })

                    }

                </div>
            </div>

        </>
    )
}
