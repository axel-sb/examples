import * as React from 'react'

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
    //- A
    const handleSearch = (event) => {
        //- D
        console.log(event.target.value)
    }

    return (
        <div>
            <h1>My Hacker Stories</h1>

            {/* //- B */}
            <Search onSearch={handleSearch} />

            <hr />

            <List list={stories} />
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
        //- C
        props.onSearch(event)
    }

    return (
        <div>
            <label htmlFor='search'>Search: </label>
            <input
                id='search'
                type='text'
                onChange={props.onSearch}
            />
            <p> Searching for {searchTerm}</p>
        </div>
    )
}

/*
/* ----------------  List  ------------------
*/

const List = ({ list }) => (
    <ul>
        {list.map((item) => (
            <Item key={item.objectID} item={item} />
        ))}
    </ul>
)

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
