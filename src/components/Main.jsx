import React from 'react';
import InputToolbox from './InputToolbox.jsx';
import GetMemeBtn from './GetMemeBtn.jsx';
import Canvas from './Canvas.jsx';
import DownloadBtn from './DownloadBtn.jsx';

const Main = () => {

const [meme, setMeme] = React.useState({
                        topText: "",
                        bottomText: "",
                        imgUrl: "https://i.imgflip.com/9ehk.jpg"      
})

const [allMemes, setAllMemes] = React.useState([])
console.log(allMemes);


const [textPosition, setTextPosition] = React.useState({
    topX: 0.5,
    topY: 50,
    bottomX: 0.5,
    bottomY: 50
  });
      

const handleChange = (e) => {
    const {value, name} = e.currentTarget;
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
}

const getMeme = () => {
    
    const randomMeme = Math.floor(Math.random() * allMemes.length);
    const newMemeUrl =  allMemes[randomMeme].url
    setMeme(prevMeme => ({
        ...prevMeme, 
        imgUrl: newMemeUrl
    }))
}

const canvasRef = React.useRef(null);

const drawMeme = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = meme.imgUrl;
  
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
  
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawing
      ctx.drawImage(img, 0, 0);
  
      const scaleFactor = 0.10; // 7% of image height
      const fontSize = img.height * scaleFactor;
      ctx.font = `bold ${fontSize}px Impact`;



      ctx.fillStyle = "white";
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.textAlign = "center";
  
      const topX = canvas.width * textPosition.topX;
      const bottomX = canvas.width * textPosition.bottomX;
      const topY = textPosition.topY;
      const bottomY = canvas.height - textPosition.bottomY;
  
      ctx.fillText(meme.topText, topX, topY);
      ctx.strokeText(meme.topText, topX, topY);
      ctx.fillText(meme.bottomText, bottomX, bottomY);
      ctx.strokeText(meme.bottomText, bottomX, bottomY);
    };
};

React.useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllMemes(data.data.memes)
        } catch(err) {
            console.error("Error fetching data:", err)
        }
        
    }

    fetchData();
}, [])

  return (
    <main>
        <div className="meme-generator">
        <div className="input-toolbox">
        <InputToolbox
        handleChange={handleChange}
        topText={meme.topText}
        bottomText={meme.bottomText}
        topX={textPosition.topX}
        topY={textPosition.topY}
        bottomX={textPosition.bottomX}
        bottomY={textPosition.bottomY}
        setTextPosition={setTextPosition}/>

        
        <GetMemeBtn
        getMeme={getMeme}/>

        <DownloadBtn
        drawMeme={drawMeme}
        canvasRef={canvasRef}/>
        </div>

        <Canvas
        topText={meme.topText}
        bottomText={meme.bottomText}
        imgUrl={meme.imgUrl}
        topX={textPosition.topX}
        topY={textPosition.topY}
        bottomX={textPosition.bottomX}
        bottomY={textPosition.bottomY}
        drawMeme={drawMeme}
        canvasRef={canvasRef}/>

        </div>
    </main>
  )
};

export default Main;