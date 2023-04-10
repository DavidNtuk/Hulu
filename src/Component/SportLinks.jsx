import React, { useState } from 'react'



const SportLinks = () => {

    
    const [live , setLive ] = useState(true)
    const [breaking , setBreaking ] = useState(false)
    const [biggest , setBiggest ] = useState(false)

    const activeStyle = { borderBottom: "5px solid #FFFFFF", paddingLeft: "0px", color : "white" };

    const linkItems = [
        "Live Sport",
        "Breaking News",
        "Biggest Event",
    ]

   

    const handleChange = (item) =>{
        if(item === linkItems[0]){
            setLive(true)
            setBreaking(false)
            setBiggest(false)
        }else if(item === linkItems[1]){
            setBreaking(true)
            setBiggest(false)
            setLive(false)
        }else if(item === linkItems[2] ){
            setBiggest(true)
            setBreaking(false)
            setLive(false)
        }
    }

    // const [isActive , setIsActive ] = useState(linkItems[3]);   



  return (

    
    <div className='w-full h-full'>
        <div className='w-full h-[full] relative hidden md:block'>
            {
                live ? (
                    <>
                    <img className='active-img w-full h-[full] object-cover' src='https://cnbl-cdn.bamgrid.com/assets/b8c6dfb74d0a755e8df205721c87b1f8b74821b4229c78492ecca29a2635db9e/original' alt='SportImg'/>
                    <div className='absolute top-0 w-full h-full bg-gradient-to-tr from-black'></div>
                    </>
                ) : breaking ? (
                    <>
                    <img className='w-full h-[full] md:h-screen object-cover md:w-screen' src='https://cnbl-cdn.bamgrid.com/assets/c3a80b5dc1abbd738e023ab24a69f6567dbec95283b181a8767fb61c3d550810/original' alt='SportImg'/>
                    <div className='absolute top-0 w-full h-full bg-gradient-to-tr from-black'></div>
                    </>
                ) : biggest ? (
                    <>
                    <img className='w-full h-[full] md:h-screen object-cover md:w-screen  ' src='https://cnbl-cdn.bamgrid.com/assets/45f75e92acd6df946676a6b9db0465ba7137714393085b923cfd90bc6cac92f3/original' alt='SportImg'/>
                    <div className='absolute top-0 w-full h-full bg-gradient-to-tr from-black'></div>
                    </>
                    ) : ("")
            }
            <div className='absolute top-[5%] w-full md:left-[10%] md:top-[25%]'>
                <div className='flex justify-center md:flex md:justify-start'>
                    {
                    linkItems.map((item , i) =>{
                        return(
                            <div key={i}>
                                <button 
                                // style={ isActive === linkItems[3] ? activeStyle : {}}
                                onClick={()=>{handleChange(item)}}
                                key={item}
                                className='text-sm font-bold  text-gray-400 hover:text-white uppercase px-3 mr-3 pb-3'>{item}</button>
                            </div>    
                        )
                    })
                    }
                </div>
                {   live ? (
                    <div className='w-full h-full flex text-center justify-center md:flex md:justify-start md:text-left'>
                        <div className='max-w-[400px] md:max-w-[40%] lg:max-w-[30%] pt-8'>
                                <h1 className='text-white text-3xl md:text-3xl lg:text-5xl font-bold py-4
                                '>Live Sports</h1>
                                <p className='text-white text-md md:pt-3'>Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.</p>
                            <div className='flex py-6 justify-center md:justify-start'>
                                <img className=' bg-white rounded-full w-[50px] h-[50px] object-contain mr-3' src='https://cnbl-cdn.bamgrid.com/assets/13aa152764ceb4047c7f902524efb09c2a56e75c95991d2eb708b97cb95c25fa/original' alt='logoImg'/>
                                <img className=' bg-white rounded-full w-[50px] h-[50px] object-contain mx-3' src='https://cnbl-cdn.bamgrid.com/assets/22943c5e9e0ee02501daa440ecbc2384e5e5255b6306a4100bb49bde19b1d6ca/original' alt='logoImg'/>
                                <img className=' bg-white rounded-full w-[50px] h-[50px] object-contain mx-3' src='https://cnbl-cdn.bamgrid.com/assets/1011985ada97696d9ac50c3ba59cfa50d0cebb41008519c5bbe0058f9c7fc079/original' alt='logoImg'/>
                                <img className=' bg-white rounded-full w-[50px] h-[50px] object-contain mx-3' src='https://cnbl-cdn.bamgrid.com/assets/1caca943330869aaf05bf9db4adfc269ac8879fe9cee6392eba96561522d0452/original' alt='logoImg'/>
                            </div>
                            <p className='text-gray-400 text-[11px] py-6'>Live TV plan required. Regional restrictions, blackouts and additional terms apply</p>
                        </div>
                    </div>
                    ) : breaking ? (
                        <div className='w-full h-full flex text-center justify-center md:flex md:justify-start md:text-left'>
                            <div className='max-w-[400px] md:max-w-[40%] lg:max-w-[30%] pt-8'>
                                <h1 className='text-white text-3xl md:text-3xl lg:text-5xl font-bold py-4
                                '>Breaking News</h1>
                                <p className='text-white text-md md:pt-3'>Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.</p>
                                <div className='flex py-6 justify-center md:justify-start'>
                                    <img className=' bg-white rounded-full w-[50px] h-[50px] object-contain mr-3' src='https://cnbl-cdn.bamgrid.com/assets/c50f0bbe1a89733daacd4dce9958507e905c80280587cace7c9d5ff04d24a2c6/original' alt='logoImg'/>
                                    <img className=' bg-white rounded-full w-[50px] h-[50px] object-contain mx-3' src='https://cnbl-cdn.bamgrid.com/assets/4237ecc2a20fa875d0c6ce3b7757f95ea26a33aef20c3e352eb2d7df410c53d8/original' alt='logoImg'/>
                                    <img className=' bg-white rounded-full w-[50px] h-[50px] object-contain mx-3' src='https://cnbl-cdn.bamgrid.com/assets/202606ff83b1d175ae4bfc9f17f68c3b88ca2a3754a868b5dfbbe6cb90d8987b/original' alt='logoImg'/>
                                    <img className=' bg-white rounded-full w-[50px] h-[50px] object-contain mx-3' src='https://cnbl-cdn.bamgrid.com/assets/b452dc667946419f1fc27b906edb224fe6882fe6578b1a3cac668a597d380ec7/original' alt='logoImg'/>
                                </div>
                                <p className='text-gray-400 text-[11px] py-6'>Live TV plan required. Regional restrictions, blackouts and additional terms apply</p>
                            </div>
                        </div>     
                    ) : biggest ? (
                        <div className='w-full h-full flex text-center justify-center md:flex md:justify-start md:text-left'>
                        <div className='max-w-[400px] md:max-w-[40%] lg:max-w-[30%] pt-8'>
                            <h1 className='text-white text-3xl md:text-3xl lg:text-5xl font-bold py-4
                            '>Biggest Events</h1>
                            <p className='text-white text-md md:pt-3'>Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.</p>
                            <div className='flex py-6 justify-center md:justify-start'>
                                <img className=' bg-white rounded-full w-[50px] h-[50px] object-contain mr-3' src='https://cnbl-cdn.bamgrid.com/assets/ebb1168d64c5638b29e0533570e08b967d5bb7b46be45be60d5120367b14bf4d/original' alt='logoImg'/>
                                <img className=' bg-white rounded-full w-[50px] h-[50px] object-contain mx-3' src='https://cnbl-cdn.bamgrid.com/assets/b2d2a6d242ff1b299aed934fb6c8b02ee6058ebf35681036f7579734902a9925/original' alt='logoImg'/>
                                <img className=' bg-white rounded-full w-[50px] h-[50px] object-contain mx-3' src='https://cnbl-cdn.bamgrid.com/assets/7db5e76efc407da5300dd53714560a59bd428d263a2a8cf81bb33289ed54fdc7/original' alt='logoImg'/>
                                <img className=' bg-white rounded-full w-[50px] h-[50px] object-contain mx-3' src='https://cnbl-cdn.bamgrid.com/assets/8410cea34e60857b88988a9469b11ca484836f3bd4846ad343d07572dae61f2f/original' alt='logoImg'/>
                            </div>
                            <p className='text-gray-400 text-[11px] py-6'>Live TV plan required. Regional restrictions, blackouts and additional terms apply</p>
                        </div>
                        </div>
                    ) : ("")
                }    
            </div>
        </div>
    </div>
  )
}

export default SportLinks