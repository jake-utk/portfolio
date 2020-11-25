import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Github = () => {
    const [projects, setProjects] = useState([])
    const url = `https://api.github.com/users/jake-utk/repos`;

    useEffect(() => {
        axios.get(url).then(res => console.log(res))
    }, [])


    return (
        <div className='github-repos'>
            
        </div>
    );
};

export default Github;