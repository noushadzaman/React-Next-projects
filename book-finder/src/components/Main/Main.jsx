import { useState } from "react";
import Container from "../Container/Container";
import Header from "../Header/Header";

const Main = () => {
    const [sort, setSort] = useState('');
    const [search, setSearch] = useState('');
    console.log(sort)

    return (
        <div className="my-10 lg:my-14">
            <Header setSort={setSort} setSearch={setSearch} />
            <Container sort={sort} search={search} />
        </div>
    );
};

export default Main;