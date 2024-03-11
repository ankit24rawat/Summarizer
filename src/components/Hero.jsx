import React from 'react'
import { logo1 } from "../assets";


const Hero = () => {
  return (
<header className="w-full flex justify-center items-center flex-col">
  <nav className='flex justify-between items-center w-full mb-28 pt-2'>
    <img src={logo1} alt="SummarAI logo" className="w-72 object-contain"/>
    <div className="flex justify-between">
      <button type="button" onClick={() => window.open("https://github.com/SaiChandra1011/Article-Summarizer")} className="black_btn mr-5" >GitHub Code</button>
      <button type="button" onClick={() => window.open("https://twitter.com/titter1011")} className="black_btn mr-5" >X</button>
      <button type="button" onClick={() => window.open("https://www.linkedin.com/in/sai-chandra-94ba66231/")} className="black_btn" >LinkedIn</button>
    </div>
  </nav>
  <h1 className="head_text">Summarize Articles with <br className="max-md:hidden" /> <span className="light_blue_gradient" >OpenAI GPT-4</span></h1>
  <h2 className="description pt-8 text-purple-950">SummarAI leverages the cutting-edge OpenAI GPT-4 technology to provide concise and insightful summaries of articles. SummarAI gives users  a seamless experience, effortlessly grasping the essence of lengthy articles with just a few clicks. Experience the future of article summarization with SummarAI.</h2>
</header>

  )
}

export default Hero
