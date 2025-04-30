import downloadImg from '../assets/download.png'

const DownloadBtn = (props) => {

      const handleDownload = () => {
        const canvas = props.canvasRef.current;
        props.drawMeme(); // Make sure canvas is drawn before download
      
        const link = document.createElement("a");
        link.download = "meme.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      };
      
    
      return (
        <>
        <button className='btn download' onClick={handleDownload}>
            <span>Download Meme</span>
            <img src={downloadImg} alt='download icon'/>
        </button>
        </>
      )

  };

  


export default DownloadBtn