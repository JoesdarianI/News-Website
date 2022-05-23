import React, {useState} from 'react'
import "./Search.css"

const Search=({searchText}) => {
    const [text,setText] = useState('')

const handleSubmit = (e) =>{
    e.preventDefault()
    searchText(text)
}

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search ECHO.." className="input-s" onChange={(e) => setText(e.target.value)}></input>
            <button type="submit" className="submit-se">Search</button>
            </form>        
        </div>
    )
}

export default Search
