import trollface from '../assets/Troll-Face.png'

const Header = () => {
  return (
    <header>
        <img src={trollface} alt='troll-face logo'/>
        <h1>Meme Generator</h1>
    </header>
  )
}

export default Header