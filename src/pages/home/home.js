import React from "react";
import Header from "../../components/header/header";
import Banner from "../../components/banner/banner";
import Podcast from "../../components/podcast/podcast";
import Videos from "../../components/videos/videos";
import Footer from "../../components/footer/footer";

function Home() {

    return (
        <>
            <Header />
            <Banner />
            <Podcast />
            <Videos />
            <Footer />
        </>
    )
};

export default Home;