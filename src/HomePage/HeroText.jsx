import React from 'react'

function HeroText() {
  return (
    <div>
        <div>
            <img className='h-16 w-16' src="src/assets/SWITCH_LOGO.png"/>
            <div>

            </div>
            <div>
              <button>
                Upcoming Events
              </button>
            </div>
        </div>
    </div>
  )
}

export default HeroText

// body {
// margin: 0;
// padding: 0;
// background-color: #2f3542;
// color: #fff;
// height: 100vh;
// display: flex;
// align-items: center;
// justify-content: center;
// font-family: "Montserrat", sans-serif;
//}
// .animated-text{
// font-size: 34px;
// font-weight: 600;
// min-width: 280px;
// }
// .animated-text span {
// position: relative;
// }
// .animated-text span::before{
// content: "Youtuber";
// color: #f£7£50;
// animation: words 20s infinite;
//}
// .animated-text span::after{
// content: "";
// position: absolute;
// width: calc (100% + 8px);
// height: 100%;
// background-color: #2£3542;
// border-left: 2px solid #ff7f50;
// right: -8px;
// animation: cursor .8s infinite, typing 20s steps (14) infinite;
// }

// @keyframes cursor {
//   to{
//   border-left: 2px solid #ff7f5000;
//}
//}
//   @keyframes words {
//   0%,20%{
//   content: "If you love Coding.";
//}
//   21%,40%{
//   content: "You are at the right place.";
//}
//   41%,60%{
//   content: "Welcome to SWITCH.";
//   }
//   61%,80%{
//   content: "This is the official coding club of Silicon University.";
//   }
//   81%,100%{
//   content: "Happy ";
//   }
//}
//   @keyframes typing {
//   10%,15%, 30%,35%, 50%,55%, 70%, 75%, 90%, 95% {
//   width: 0;
//}
//   5%, 20%, 25%, 40%,45%, 60%, 65%, 80%,85%{
//   width: calc (100% + 8px);
//   }
//}