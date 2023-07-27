import React, {useEffect, useState} from 'react'
import NavBar from '../componets/NavBar'
import axios from 'axios'
import { MAIN_SECTION, PROJECTS_CONTAINER, PROJECT_POD, PROJECT_POD_IMAGE_OVERLAY, PROJECT_POD_TITLE } from './style/Home'


const LOGIN_STATUS = JSON.parse(localStorage.getItem("Login_Status"))
let flag = true;

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

    if((projects.length > 0) && flag){
            flag = false;
            projects.forEach((project, index) =>{
            loadImage(project.imageURL, index+1)
            console.log(project.imageURL);
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
            console.log(await res.data);

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
                    {projects.length > 0 ?
                        projects.map((project, i) => {
                            return loadedImages[i + 1] ?
                                <div key={i} className={`${PROJECTS_CONTAINER}`}>
                                    <a href={projects[i].projectLink} target='_blank' rel="noreferrer">
                                        <div className={`${PROJECT_POD} border-2 border-black`}>
                                            <img className={` ${PROJECT_POD}`} src={project.imageURL} alt={`Project-${i + 1}`} />
                                            <div className={`${PROJECT_POD_IMAGE_OVERLAY}`}>View Project</div>
                                        </div>
                                        <h1 className={`${PROJECT_POD_TITLE} text-[#212121]`}>{project.title}</h1>
                                    </a>
                                </div>
                                :
                                <div key={i} className='animate-pulse overflow-hidden'>
                                    <div className={`${PROJECT_POD} bg-gray-500  `}>
                                        <img className={` invisible`} width={1920} height={1080} alt=' ' />
                                    </div>
                                    <h1 className={`${PROJECT_POD_TITLE} text-gray-300`}>{project.title}</h1>
                                </div>
                        })
                        :
                        <>
                            {['', '', '', '', '', '', '', '', ''].map((e, i) => {
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
                            })}
                            
                        </>
                    }


                </div>
            </div>

        </>
    )
}
