import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://dragon-news-server-zeta.vercel.app/news-catergories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);
    return (
        <div>
            <h4 className='mb-4 text-danger fs-5'>All Categories:</h4>
            <div>
                {
                    categories.map(category => <p
                        key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;