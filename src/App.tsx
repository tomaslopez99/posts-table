import React, {useState} from 'react';
import './App.css';
import PostsTable from "./components/PostsTable";
import Navbar from "./components/Navbar";

const App = () => {
    const [searchText, setSearchText] = useState<string>('');

    return (
        <div className={"container"}>
            <Navbar onSearch={(search) => setSearchText(search)}/>
            <PostsTable searchText={searchText}/>
        </div>
    );
}

export default App;
