import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Musicos from "../../components/musicos/musicos";
import FotoHaroldo from "../../assets/HaroldoFoto3.png";
import FotoVini from "../../assets/ViniFoto2.png";

function Integrantes() {

    return (
        <>
            <Header />
            <Musicos
                name="Haroldo"
                description="Mussum Ipsum, cacilds vidis litro abertis. 
                    A ordem dos tratores não altera o pão duris. Bota 1 metro de cachacis aí pra viagem! 
                    Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. 
                    Leite de capivaris, leite de mula manquis sem cabeça."
                image={FotoHaroldo}
                direction="row"
            />
            <Musicos
                name="Vinicius"
                description="Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. 
                    Praesent lacinia ultrices consectetur. Sed non ipsum felis. 
                    Delegadis gente finis, bibendum egestas augue arcu ut est. 
                    Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. 
                    Sed non consequat odio. Leite de capivaris, leite de mula manquis sem cabeça."
                image={FotoVini}
                direction="row-reverse"
            />
            <Footer />
        </>
    )
};

export default Integrantes;