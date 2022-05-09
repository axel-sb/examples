import * as React from 'react'
import callbackHandler from './callbackHandler.png'
import callbackHandler2 from './callbackHandler2.png'
const App = () => {
    const stories = [
        {
            title: 'React',
            url: 'https://reactjs.org/',
            author: 'Jordan Walke',
            num_comments: 3,
            points: 4,
            objectID: 0,
        },
        {
            title: 'Redux',
            url: 'https://redux.js.org/',
            author: 'Dan Abramov, Andrew Clark',
            num_comments: 2,
            points: 5,
            objectID: 1,
        },
    ]
    //+ A
    const handleSearch = (event) => {
        //+ D
        console.log(event.target.value)
    }

    return (
        <div>
            <h1>My Hacker Stories</h1>

            {/* //+ B */}
            <Search onSearch={handleSearch} />

            <hr />
            {/*//- ℹ️ has state "stories" */}
            <List list={stories} />
            <hr />
            <img src={callbackHandler} alt='1'></img>
            <hr />
            <img src={callbackHandler2} alt='2'></img>
            <hr />
        </div>
    )
}

/*
/* ---------------  Search  -----------------
*/

const Search = (props) => {
    const [searchTerm, setSearchTerm] = React.useState('')

    const handleChange = (event) => {
        setSearchTerm(event.target.value)

        //+ C
        props.onSearch(event)
    }
    return (
        <div>
            <label htmlFor='search'>Search: </label>
            <input id='search' type='text' onChange={handleChange} />

            <p>
                Searching for <strong>{searchTerm}</strong>.
            </p>
        </div>
    )
}

/*
/* ----------------  List  ------------------
*/
//- ℹ️ receives props: "list"
const List = ({ list }) => (
    <ul>
        {list.map((item) => (
            <Item key={item.objectID} item={item} />
        ))}
    </ul>
)

//- ℹ️ receives props: "item"
const Item = ({ item }) => (
    <li>
        <span>
            <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
   </li>
)

export default App
