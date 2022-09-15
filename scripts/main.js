const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "bilder/Arena.jpg") {
      myImage.setAttribute("src","bilder/Nesteinblick.jpg");
    } else {
      myImage.setAttribute("src","bilder/Arena.jpg");
    }
  }
  
  let myButton = document.querySelector('button');
  let myHeading = document.querySelector('h1');

  function setUserName() {
   myName = prompt('Please enter your name.');
   if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}
  if (!localStorage.getItem('name')) {
    setUserName();
  } else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  }      
