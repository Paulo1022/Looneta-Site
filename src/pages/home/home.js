import React from "react";
import Header from "../../components/header/header";
import Banner from "../../components/banner/banner";
import Podcast from "../../components/podcast/podcast";
import Videos from "../../components/videos/videos";
import Footer from "../../components/footer/footer";
import Shows from "../../components/shows/shows";

function Home() {

    return (
        <>
            <Header />
            <Banner />
            <Shows />
            <Videos />
            <Podcast />
            <Footer />
        </>
    )
};

export default Home;