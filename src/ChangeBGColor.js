export default function ChangeBg(){
    var scrollValue = window.scrollY;

    if(scrollValue > 1000){

        /* Change background to DarkMode */
        document.body.style = "background-color:rgb(30, 30, 30); -webkit-transition: background-color 200ms linear;";

        /* Change Navigation-Bar to DarkMode */
        document.getElementById('NavBar').style = "background-color:rgb(30, 30, 30); -webkit-transition: background-color 200ms linear;";
        document.getElementById("ProfileImage").innerHTML = `<img class="mt-[15px] mr-[100px] p-[10px] h-[80px] w-[80px]" src="images/InitialsLogo-images/Black-White.png">`;
        document.getElementById("hyperlinkdiv").innerHTML = `

        <a id="ChangeHyperLinkA" class="HyperLink" href="#About"><style>svg{fill:#ffffff}</style><svg class="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>About</a>
        <a id="ChangeHyperLinkB" class="HyperLink" href="#Skills"><style>svg{fill:#ffffff}</style><svg class="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><path d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z"/></svg>Skills</a>
        <a id="ChangeHyperLinkC" class="HyperLink" href="#Projects"><style>svg{fill:#ffffff}</style><svg class="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>Projects</a>
        <a id="ChangeHyperLinkD" class="HyperLink" href="#Contact"><style>svg{fill:#ffffff}</style><svg class="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>Contact</a>
       
        `
        document.getElementById("ChangeHyperLinkA").classList.add("HyperLinkDark");
        document.getElementById("ChangeHyperLinkA").classList.remove("HyperLink");
        document.getElementById("ChangeHyperLinkB").classList.add("HyperLinkDark");
        document.getElementById("ChangeHyperLinkB").classList.remove("HyperLink");
        document.getElementById("ChangeHyperLinkC").classList.add("HyperLinkDark");
        document.getElementById("ChangeHyperLinkC").classList.remove("HyperLink");
        document.getElementById("ChangeHyperLinkD").classList.add("HyperLinkDark");
        document.getElementById("ChangeHyperLinkD").classList.remove("HyperLink");

        /* Swapping some words and letters form green to orange because its cool! */
        document.getElementById("Tools").classList.add("SwapColorDark");
        document.getElementById("Tools").classList.remove("SwapColor");

        document.getElementById("Codam").classList.add("SwapColorDark");
        document.getElementById("Codam").classList.remove("SwapColor");

        document.getElementById("CProgramming").classList.add("SwapColorDark");
        document.getElementById("CProgramming").classList.remove("SwapColor");

        document.getElementById("Gene").classList.add("SwapColorDark");
        document.getElementById("Gene").classList.remove("SwapColor");

        /* Swapping text from black to white for DarkMode */

        document.getElementById("TextColorA").classList.add("TextColorDark");
        document.getElementById("TextColorA").classList.remove("TextColor");
        document.getElementById("TextColorB").classList.add("TextColorDark");
        document.getElementById("TextColorB").classList.remove("TextColor");
        document.getElementById("TextColorC").classList.add("TextColorDark");
        document.getElementById("TextColorC").classList.remove("TextColor");
        document.getElementById("TextColorD").classList.add("TextColorDark");
        document.getElementById("TextColorD").classList.remove("TextColor");
        document.getElementById("TextColorE").classList.add("TextColorDark");
        document.getElementById("TextColorE").classList.remove("TextColor");
        document.getElementById("TextColorF").classList.add("TextColorDark");
        document.getElementById("TextColorF").classList.remove("TextColor");
        document.getElementById("TextColorG").classList.add("TextColorDark");
        document.getElementById("TextColorG").classList.remove("TextColor");
        document.getElementById("TextColorH").classList.add("TextColorDark");
        document.getElementById("TextColorH").classList.remove("TextColor");
        document.getElementById("TextColorI").classList.add("TextColorDark");
        document.getElementById("TextColorI").classList.remove("TextColor");
        document.getElementById("TextColorJ").classList.add("TextColorDark");
        document.getElementById("TextColorJ").classList.remove("TextColor");
        document.getElementById("TextColorK").classList.add("TextColorDark");
        document.getElementById("TextColorK").classList.remove("TextColor");
        document.getElementById("TextColorL").classList.add("TextColorDark");
        document.getElementById("TextColorL").classList.remove("TextColor");
        document.getElementById("TextColorM").classList.add("TextColorDark");
        document.getElementById("TextColorM").classList.remove("TextColor");
        document.getElementById("TextColorN").classList.add("TextColorDark");
        document.getElementById("TextColorN").classList.remove("TextColor");
        document.getElementById("TextColorO").classList.add("TextColorDark");
        document.getElementById("TextColorO").classList.remove("TextColor");
        document.getElementById("TextColorP").classList.add("TextColorDark");
        document.getElementById("TextColorP").classList.remove("TextColor");
        document.getElementById("TextColorQ").classList.add("TextColorDark");
        document.getElementById("TextColorQ").classList.remove("TextColor");
        document.getElementById("TextColorR").classList.add("TextColorDark");
        document.getElementById("TextColorR").classList.remove("TextColor");
        document.getElementById("TextColorS").classList.add("TextColorDark");
        document.getElementById("TextColorS").classList.remove("TextColor");

    }else if(scrollValue < 1000){
     
        /* Change background to LightMode */
        document.body.style = "background-color: white; -webkit-transition: background-color 200ms linear;"; 

        /* Change Navigation-Bar to LightMode */
        document.getElementById('NavBar').style = "background-color: white; -webkit-transition: background-color 200ms linear;";
        document.getElementById("ProfileImage").innerHTML = `<img class="mt-[15px] mr-[100px] p-[10px] h-[80px] w-[80px]" src="images/InitialsLogo-images/White-Black.png">`;
        document.getElementById("hyperlinkdiv").innerHTML = `

        <a id="ChangeHyperLinkA" class="HyperLink" href="#About"><svg class="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>About</a>
        <a id="ChangeHyperLinkB" class="HyperLink" href="#Skills"><svg class="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><path d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z"/></svg>Skills</a>
        <a id="ChangeHyperLinkC" class="HyperLink" href="#Projects"><svg class="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>Projects</a>
        <a id="ChangeHyperLinkD" class="HyperLink" href="#Contact"><svg class="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>Contact</a>
        
        `

        document.getElementById("ChangeHyperLinkA").classList.add("HyperLink");
        document.getElementById("ChangeHyperLinkA").classList.remove("HyperLinkDark");
        document.getElementById("ChangeHyperLinkB").classList.add("HyperLink");
        document.getElementById("ChangeHyperLinkB").classList.remove("HyperLinkDark");
        document.getElementById("ChangeHyperLinkC").classList.add("HyperLink");
        document.getElementById("ChangeHyperLinkC").classList.remove("HyperLinkDark");
        document.getElementById("ChangeHyperLinkD").classList.add("HyperLink");
        document.getElementById("ChangeHyperLinkD").classList.remove("HyperLinkDark");

        /* Swapping some words and letters form orange to green because its cool! */
        document.getElementById("Tools").classList.add("SwapColor");
        document.getElementById("Tools").classList.remove("SwapColorDark");

        document.getElementById("Codam").classList.add("SwapColor");
        document.getElementById("Codam").classList.remove("SwapColorDark");

        document.getElementById("CProgramming").classList.add("SwapColor");
        document.getElementById("CProgramming").classList.remove("SwapColorDark");

        document.getElementById("Gene").classList.add("SwapColor");
        document.getElementById("Gene").classList.remove("SwapColorDark");

        /* Swapping text from white to black for LightMode */
        document.getElementById("TextColorA").classList.add("TextColor");
        document.getElementById("TextColorA").classList.remove("TextColorDark");
        document.getElementById("TextColorB").classList.add("TextColor");
        document.getElementById("TextColorB").classList.remove("TextColorDark");
        document.getElementById("TextColorC").classList.add("TextColor");
        document.getElementById("TextColorC").classList.remove("TextColorDark");
        document.getElementById("TextColorD").classList.add("TextColor");
        document.getElementById("TextColorD").classList.remove("TextColorDark");
        document.getElementById("TextColorE").classList.add("TextColor");
        document.getElementById("TextColorE").classList.remove("TextColorDark");
        document.getElementById("TextColorF").classList.add("TextColor");
        document.getElementById("TextColorF").classList.remove("TextColorDark");
        document.getElementById("TextColorG").classList.add("TextColor");
        document.getElementById("TextColorG").classList.remove("TextColorDark");
        document.getElementById("TextColorH").classList.add("TextColor");
        document.getElementById("TextColorH").classList.remove("TextColorDark");
        document.getElementById("TextColorI").classList.add("TextColor");
        document.getElementById("TextColorI").classList.remove("TextColorDark");
        document.getElementById("TextColorJ").classList.add("TextColor");
        document.getElementById("TextColorJ").classList.remove("TextColorDark");
        document.getElementById("TextColorK").classList.add("TextColor");
        document.getElementById("TextColorK").classList.remove("TextColorDark");
        document.getElementById("TextColorL").classList.add("TextColor");
        document.getElementById("TextColorL").classList.remove("TextColorDark");
        document.getElementById("TextColorM").classList.add("TextColor");
        document.getElementById("TextColorM").classList.remove("TextColorDark");
        document.getElementById("TextColorN").classList.add("TextColor");
        document.getElementById("TextColorN").classList.remove("TextColorDark");
        document.getElementById("TextColorO").classList.add("TextColor");
        document.getElementById("TextColorO").classList.remove("TextColorDark");
        document.getElementById("TextColorP").classList.add("TextColor");
        document.getElementById("TextColorP").classList.remove("TextColorDark");
        document.getElementById("TextColorQ").classList.add("TextColor");
        document.getElementById("TextColorQ").classList.remove("TextColorDark");
        document.getElementById("TextColorR").classList.add("TextColor");
        document.getElementById("TextColorR").classList.remove("TextColorDark");
        document.getElementById("TextColorS").classList.add("TextColor");
        document.getElementById("TextColorS").classList.remove("TextColorDark");
    }
}