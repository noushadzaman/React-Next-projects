/* eslint-disable react/prop-types */
import { useState } from "react";
import data from "../../Data/Data";
import BookItem from "../BookItem/BookItem";

const Container = ({ sort, search }) => {
    const [favoriteItem, setFavoriteItem] = useState([]);
    const searchedItems = data.filter(singleData => singleData.name.toLowerCase().includes(search.toLowerCase()));
    let dataArr = [...data];
    if (sort === 'year_desc') {
        const items = data.sort((a, b) => b.published - a.published);
        dataArr = items;
    }
    if (sort === 'year_asc') {
        const items = data.sort((a, b) => a.published - b.published);
        dataArr = items;
    }
    if (sort === 'name_asc') {
        const items = data.sort((a, b) => a.name.localeCompare(b.name));
        dataArr = items;
    }
    if (sort === 'name_desc') {
        const items = data.sort((a, b) => b.name.localeCompare(a.name));
        dataArr = items;
    }

    return (
        <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
                search ?
                    searchedItems.map((singleData, index) => <BookItem
                        key={index}
                        singleData={singleData}
                        setFavoriteItem={setFavoriteItem}
                        favoriteItem={favoriteItem}
                    />)
                    :
                    dataArr.map((singleData, index) => <BookItem
                        key={index}
                        singleData={singleData}
                        setFavoriteItem={setFavoriteItem}
                        favoriteItem={favoriteItem}
                    />)
            }
        </div>
    );
};

export default Container;