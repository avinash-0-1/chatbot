import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import '../front.css'

const Front = () => {
  //--------------- random Q --------------------- 
  const [quotes, setQuotes] = useState('')

  useEffect (()=>{
    const quotes =[
      "Peace comes from within. Do not seek it without.",
      "The mind is everything. What you think you become.",
      "Thousands of candles can be lit from a single candle.",
      "Inhale the future, exhale the past.",
      "To understand everything is to forgive everything.",
      "The wound is the place where the Light enters you." ,
      "Be still, and know that I am God.",
      "What you seek is seeking you." ,
      "Let go and let God.",
      "Silence is the language of God.",
      "The soul always knows what to do to heal itself.",
      "You don’t have a soul. You are a soul. You have a body."
    ]

    const randomQuotes = ()=>{
      const randomIndex= Math.floor(Math.random()* quotes.length);
      return quotes[randomIndex]
    }

    setQuotes(randomQuotes());
  },[]);
  // --------------------------------------------------
  const navigate = useNavigate();
  const toggleDarkMode = ()=>{
    document.body.classList.toggle('dark_mode');
  }

  return (
    <div id='front-main' className="w-full min-h-screen">
      <div id='upper' className="w-full h-fit"> 
        <div className="flex flex-col md:flex-row justify-center w-full h-full bg-[url('./assets/clouds.gif')] md:bg-[url('./assets/clouds2.gif')] bg-center bg-cover">
          <div className="absolute w-fit h-fit top-2 right-2">
            <button onClick={toggleDarkMode} id='D-L' className="p-4 m-4 w-10 h-10 md:bg-transparent rounded-full cursor-pointer active:opacity-98 active:scale-80">
              <svg className='' viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.994 13.84l-6.241-2.361 1.076-6.586-6.299 2.203-3.409-5.736-3.409 5.736-6.299-2.203 1.076 6.586-6.241 2.361 5.057 4.354-3.263 5.821 6.672 0.084 1.242 6.556 5.166-4.224 5.166 4.224 1.242-6.556 6.672-0.084-3.263-5.821 5.057-4.354zM16.472 25.494c-4.977 0-9.012-4.035-9.012-9.012s4.035-9.012 9.012-9.012c2.328 0 4.45 0.883 6.049 2.332-0.55-0.214-1.132-0.364-1.736-0.425-0.239-0.024-0.486 0-0.731 0-3.929 0-7.099 3.17-7.099 7.099s3.17 7.099 7.099 7.099c0.9 0 1.76-0.179 2.551-0.492-1.609 1.495-3.764 2.41-6.133 2.41z"></path>
              </svg>
            </button>
          </div>
          <div className="flex items-end mt-6 justify-center w-full md:w-[37%] h-full">
            <img className="w-48 md:w-70 h-48 md:h-70" src={assets.G_home} alt="" />
          </div>
          <div id='upper-child-right' className="flex flex-col items-center w-full md:w-[55%] h-auto md:h-80 px-4 md:px-0">
            <h1 className="font-extrabold mt-5 text-6xl md:text-8xl">Baba JI.</h1>
            <p className="text-lg md:text-l font-bold mt-6 md:mt-5 text-center"><i>"✨{quotes}✨"</i></p>
            <p className="text-base md:text-m font-medium mt-3 text-center">Your Intelligent Guide for Everyday Questions – powered by AI, inspired by ancient wisdom, served with a smile</p>
            <button 
              onClick={() => navigate("./Main.jsx")}
              className="cursor-pointer font-bold rounded-full w-[50%]  h-[50%]  md:w-[30%] md:h-[15%] text-lg md:text-xl mt-5 mb-5 hover:scale-105 transition duration-200"
              >
              <Link to={'./Main.jsx'}>Start Chatting</Link>
            </button> 
          </div>
        </div>
      </div>   
      <div id='lower' className="flex flex-col w-full px-4 md:px-0">
        <h1 className="mt-8 md:mt-13 font-bold text-3xl md:text-5xl text-center">Why Talk to Baba Ji ?</h1>
        <div id='all-cards' className="grid m-2 md:m-5 mt-6 md:mt-10 grid-cols-1 md:grid-cols-2 gap-4 md:gap-7 p-2 md:p-5">
          <div id='crd' className="flex flex-col items-center justify-center text-center p-4 md:p-6 w-full h-full rounded-3xl bg-white shadow-lg hover:bg-[#ffce72] hover:scale-105 transition duration-200">
            <img className='w-20 border md:w-25 rounded-full' src={assets.card1} alt=""/> 
            <h2 className="mt-4 md:mt-5 text-lg md:text-xl font-medium">Smart Answers</h2>
            <p className="text-sm md:text-base">Get instant, intelligent responses to your questions.</p>
          </div>
          <div id='crd' className="flex flex-col items-center justify-center text-center p-4 md:p-6 w-full h-full rounded-3xl bg-white shadow-lg hover:bg-[#ffce72] hover:scale-105 transition duration-200">
            <img className='w-20 border md:w-25 rounded-full' src={assets.card3} alt=""/>
            <h2 className="mt-4 md:mt-5 text-lg md:text-xl font-medium">Spiritual Touch</h2>
            <p className="text-sm md:text-base">Receive mindful and calming advice when you need it.</p>
          </div>
          <div id='crd' className="flex flex-col items-center justify-center text-center p-4 md:p-6 w-full h-full rounded-3xl bg-white shadow-lg hover:bg-[#ffce72] hover:scale-105 transition duration-200">
            <img className='w-20 border md:w-25 rounded-full' src={assets.card4} alt=""/>
            <h2 className="mt-4 md:mt-5 text-lg md:text-xl font-medium">Grow Every Day</h2>
            <p className="text-sm md:text-base">Daily reflections and tips for a better you.</p>
          </div>
          <div id='crd' className="flex flex-col items-center justify-center text-center p-4 md:p-6 w-full h-full rounded-3xl bg-white shadow-lg hover:bg-[#ffce72] hover:scale-105 transition duration-200">
            <img className='w-20 border md:w-25 rounded-full' src={assets.card2} alt=""/>
            <h2 className="mt-4 md:mt-5 text-lg md:text-xl font-medium">Available 24/7</h2>
            <p className="text-sm md:text-base">Chat anytime — wisdom never sleeps.</p>
          </div>
        </div>
      </div>
{/* ================================== [footer] =============================================================================================================================================== */}

      <footer className="bg-gray-900 text-white py-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      
      <div>
        <h2 className="text-xl font-bold mb-3">Baba ji.</h2>
        <p className="text-sm text-gray-400">
          Intelligent AI Web application powered by the latest AI technology. Ask anything, anytime.
        </p>
      </div>

      
      <div>
        <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
        <ul className="space-y-2 text-sm text-gray-400">
          <li><a href="#" className="hover:text-white">Home</a></li>
          <li><a href="#" className="hover:text-white">Features</a></li>
          <li><a href="#" className="hover:text-white">Pricing</a></li>
          <li><a href="#" className="hover:text-white">Contact</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Resources</h3>
        <ul className="space-y-2 text-sm text-gray-400">
          <li><a href="#" className="hover:text-white">Documentation</a></li>
          <li><a href="#" className="hover:text-white">API Reference</a></li>
          <li><a href="#" className="hover:text-white">Blog</a></li>
          <li><a href="#" className="hover:text-white">Support</a></li>
        </ul>
      </div>
  
      <div>
        <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>

        <ul className=" flex gap-5 mt-10 md:ml-[-15%] space-y-2 text-sm text-gray-400">
          <li id='social_media' className=" hover:scale-120 transition duration-120"><a href="#">
              <svg viewBox="0 0 960 960" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M549.621 876.405C542.929 875.206 524.752 883.396 524.053 874.107C526.25 776.23 528.148 678.352 530.845 580.474C533.441 569.288 603.354 573.383 618.135 570.187C640.208 566.792 638.11 537.428 643.204 520.649C643.704 495.68 664.478 447.141 625.227 444.844C609.746 440.749 545.426 450.137 543.229 435.955C525.551 388.315 576.887 382.322 611.244 378.427C646.101 374.931 635.813 297.628 641.207 270.961C645.102 228.614 564.203 239.001 536.637 236.305C485.102 237.104 429.571 257.578 407.798 307.815C388.922 344.37 385.926 385.119 381.931 425.268C378.934 433.858 347.074 429.463 337.386 431.76C290.445 431.661 311.019 520.749 307.224 551.81C309.022 585.468 355.164 574.582 378.135 575.281C390.32 581.373 381.531 635.705 384.128 651.286C384.627 651.286 385.027 651.286 385.526 651.286C382.929 721.398 379.434 791.511 375.239 861.623C374.24 868.115 377.836 882.297 366.75 877.903C324.203 874.707 415.489 866.117 374.24 849.738V878.102L525.351 879.101V864.719C487.898 870.412 615.439 871.311 577.586 874.707C568.098 877.204 558.81 875.606 549.621 876.405Z" fill="#0080ff"/>
                <path d="M869.219 530.637C866.822 447.241 862.927 363.845 857.134 280.35C832.665 87.4909 697.134 68.6145 531.741 84.6944C471.516 87.5908 410.492 81.2987 349.768 86.7918C296.934 89.4884 240.705 91.9853 194.263 120.45C143.926 149.913 117.658 204.145 107.471 259.776C98.2826 306.417 90.4924 352.959 89.993 400.699C85.998 462.922 88.1952 525.244 93.5885 587.466C97.983 641.698 103.177 696.33 123.351 747.366C144.824 799.301 187.471 831.361 236.909 850.937C278.158 867.316 324.1 874.907 366.647 878.103C377.733 882.497 374.238 868.415 375.137 861.823C379.331 791.711 382.927 721.698 385.424 651.486C384.924 651.486 384.525 651.486 384.025 651.486C381.429 635.806 390.218 581.573 378.033 575.481C354.962 574.782 308.919 585.668 307.122 552.01C310.917 520.949 290.243 431.86 337.284 431.96C346.972 429.763 378.832 434.158 381.828 425.468C385.823 385.319 388.919 344.57 407.696 308.015C429.469 257.778 484.999 237.304 536.535 236.505C564.1 239.101 644.999 228.814 641.104 271.161C635.811 297.828 645.998 375.131 611.141 378.627C576.784 382.522 525.449 388.515 543.127 436.155C545.324 450.337 609.643 440.949 625.124 445.044C664.375 447.341 643.601 495.98 643.102 520.849C638.008 537.628 640.205 566.992 618.033 570.387C603.251 573.683 533.339 569.588 530.742 580.674C528.045 678.552 526.048 776.43 523.95 874.307C524.65 883.596 542.827 875.306 549.519 876.604C558.807 875.805 567.995 877.403 577.484 875.006C615.336 871.611 654.787 870.712 692.24 865.019C748.27 856.43 799.706 836.954 833.663 781.623C878.407 706.817 872.914 614.532 869.219 530.637Z" fill="white"/>
              </svg>
          </a>
          </li>
          <li id='social_media' className=" hover:scale-120 transition duration-120"><a href="#" className="">
            <svg viewBox="0 0 2500 2500" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="0" cx="332.14" cy="2511.81" r="3263.54" gradientUnits="userSpaceOnUse"><stop offset=".09" stop-color="#fa8f21"/><stop offset=".78" stop-color="#d82d7e"/></radialGradient><radialGradient id="1" cx="1516.14" cy="2623.81" r="2572.12" gradientUnits="userSpaceOnUse"><stop offset=".64" stop-color="#8c3aaa" stop-opacity="0"/><stop offset="1" stop-color="#8c3aaa"/></radialGradient></defs><path d="M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57" fill="url(#0)"/><path d="M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57" fill="url(#1)"/></svg>
          </a>
          </li>
          <li id='social_media' className=" hover:scale-120 transition duration-120" ><a href="#" className="hover:text-white">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="20" fill="#1DA1F2"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M36 16.3086C35.1177 16.7006 34.1681 16.9646 33.1722 17.0838C34.1889 16.4742 34.9697 15.5095 35.3368 14.36C34.3865 14.9247 33.3314 15.3335 32.2107 15.5551C31.3123 14.5984 30.0316 14 28.6165 14C25.8975 14 23.6928 16.2047 23.6928 18.9237C23.6928 19.3092 23.7368 19.6852 23.8208 20.046C19.7283 19.8412 16.1005 17.8805 13.6719 14.9015C13.2479 15.6287 13.0055 16.4742 13.0055 17.3766C13.0055 19.0845 13.8735 20.5916 15.1958 21.4747C14.3878 21.4491 13.6295 21.2275 12.9647 20.8587V20.9203C12.9647 23.3066 14.663 25.296 16.9141 25.7496C16.5013 25.8616 16.0661 25.9224 15.6174 25.9224C15.2998 25.9224 14.991 25.8912 14.6902 25.8336C15.3166 27.7895 17.1357 29.2134 19.2899 29.2534C17.6052 30.5733 15.4822 31.3612 13.1751 31.3612C12.7767 31.3612 12.3848 31.338 12 31.2916C14.1791 32.6884 16.7669 33.5043 19.5475 33.5043C28.6037 33.5043 33.5562 26.0016 33.5562 19.4956C33.5562 19.282 33.5522 19.0693 33.5418 18.8589C34.5049 18.1629 35.34 17.2958 36 16.3086Z" fill="white"/>
              </svg>
          </a>
          </li>
          <li id='social_media' className=" hover:scale-120 transition duration-120" ><a href="#" className="hover:text-white">

              <svg xmlns="http://www.w3.org/2000/svg"
              aria-label="LinkedIn" role="img"
              viewBox="0 0 512 512"
              fill="#ffffff"><rect
              width="512" height="512"
              rx="15%"
              fill="#0077b5"/><circle cx="142" cy="138" r="37"/><path stroke="#ffffff" stroke-width="66" d="M244 194v198M142 194v198"/><path d="M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32"/></svg>
          </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">Copy right 
      &copy; 2025.Created by Avinash
    </div>
  </div>
</footer>
    </div>
  )
}

export default Front