import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import styled from "styled-components";
import CardContatos from "../../components/cardContatos/cardContatos";


function Contato() {

    const CardsContainer = styled.div`
        width: 100%;
        padding: 15px 0;
        display: flex;
        justify-content: space-around;

        @media (max-width: 768px) {
            padding: 15px 0 15px 50px;
            display: block;
        }
    `;

    return (
        <>
            <Header />
            <h1>Contatos</h1>
            <CardsContainer>
                <CardContatos
                    nome="Vinícius Cruz"
                    numero="984981167"
                    instagram="vinicruzc"
                    email="endereco_vini@email.com"
                />
                <CardContatos
                    nome="Haroldo Neto"
                    numero="996613086"
                    instagram="haroldo.bneto"
                    email="endereco_haroldo@email.com"
                />
                <CardContatos
                    nome="Produção Looneta"
                    numero="981493525"
                    instagram="loonetaoficial"
                    email="endereco_producao@email.com"
                />
            </CardsContainer>
            <Footer />
        </>
    )
};

export default Contato;