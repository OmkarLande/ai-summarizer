import React from 'react'
import logo from '../assets/logo.svg'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='w-full flex justify-between items-center mb-10 pt-3'>
            <img src={logo}  alt='sumz_logo' className='w-28 object-contain'/>
            <button 
                type='button'
                onClick={()=> window.open('http://github.com/OmkarLande/ai-summarizer')}
                className='black_btn'>
                Github
            </button>
        </nav>

        <h1 className='head_text'>Summarize Articles with <br className='max-md:hidden'/>
            <span className='orange_gradient'> 
             OpenAl GPT-4
            </span>
        </h1>
        <h2 className='desc'>
        Simplify your rading with Summarize. an open source article
        summarizer that transform lengthy articles into and
        concise summaries.
        </h2>
    </header>
  )
}

export default Hero