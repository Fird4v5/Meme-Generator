

const InputToolbox = (props) => {


  return (
        <>
            <div className="topText">
            <label>Top text
                <input                                                      
                onChange={props.handleChange}             
                type="text"                         
                placeholder="Enter top text"                    
                value={props.topText}                    
                name='topText'/>
            </label>
            </div>

            <div className="bottomText">
            <label>Bottom text
                <input                                          
                onChange={props.handleChange}                         
                type="text"                                 
                placeholder="Enter bottom text"                                           
                value={props.bottomText}                 
                name='bottomText'/>
            </label>
            </div>
            
            <div className="top-x">
            <label>Top Text X Position
                <input
                type="range"
                min="0"
                max="100"
                value={props.topX * 100}
                onChange={(e) =>
                props.setTextPosition((prev) => ({
                    ...prev,
                    topX: parseFloat(e.target.value) / 100
                }))
                }/>
            </label>
            </div>
            
            <div className="top-y">
            <label>Top Text Y Position
                <input
                type='range'
                min="10"
                max="500"
                value={props.topY}
                onChange={(e) => 
                    props.setTextPosition((prev) => ({
                        ...prev,
                        topY: parseInt(e.target.value)
                    }))}/>
            </label>
            </div>

            <div className="bottom-x">
            <label>Bottom Text X Position
                <input
                type="range"
                min="0"
                max="100"
                value={props.bottomX * 100}
                onChange={(e) =>
                props.setTextPosition((prev) => ({
                ...prev,
                bottomX: parseFloat(e.target.value) / 100
                    }))}/>
            </label>
            </div>

            <div className="bottom-y">        
            <label>Bottom Text Y Position
                <input
                type="range"
                min="10"
                max="500"
                value={props.bottomY}
                onChange={(e) =>
                props.setTextPosition((prev) => ({
                    ...prev,
                bottomY: parseInt(e.target.value)
                }))}/>
            </label>
            </div>
        </>
  )
}

export default InputToolbox