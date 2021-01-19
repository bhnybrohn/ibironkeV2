import React, {useState} from 'react'
import {Data} from './data'
import styled from 'styled-components'
import {IconContext} from 'react-icons'
import {FiPlus, FiMinus} from 'react-icons/fi'

const AccordianSection = styled.div`
display:flex;
flex-direction:column;
align-items:center;


`
const Container = styled.div`
position:absolute;




`
const Wrap = styled.div`
background:#111827;
color: #fff;
justify-content:space-between;
align-items:center;
width:100%:
text-align:center;
cursor:pointer;

span{
    margin-right:1.5rem
}

`
const Dropdown = styled.div`


`

export default function Accordian(){
    const [clicked, setClicked] = useState(false)
    const toggle = index => {
        if(clicked === index){
            return setClicked(null)
        }
        setClicked(index)
    }
    return(
        <div className="hidden md:block lg:block">
        <IconContext.Provider value={{color: '#EF44449', size:'25px'}}>
        <h3 className="mx-auto my-auto  font-bold text-xl pt-20 text-center  uppercase py-2 head text-red-500">What To Expect When You Work With Us
            </h3>
            <AccordianSection className="my-auto pt-4 pb-44 mb-40">
                <Container className="w-screen mx-auto px-32">
                    {Data.map((item,index)=>{
                        return(
                            <>
                            <Wrap onClick={()=>toggle(index)} key={index} className="flex">
                               <h1 className="text-gray-300 text-xl py-4 px-4">
                                   {item.question}
                                   </h1>           
                                   <span className="px-6 py-2 bg-">{clicked === index ? <FiMinus/> : <FiPlus/>}</span>                      
                            </Wrap>
                            {clicked === index ? (<Dropdown>
                                <p className="font-bold font-serif text-white px-8 py-8 bg-red-400">
                                   {item.answer}
                                   </p>       
                            </Dropdown>): null }
                            </>
                        )
                    })}
                </Container>
            </AccordianSection>
        </IconContext.Provider>

</div>
    )
}