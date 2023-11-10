import { useEffect, useState, useRef } from "react";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import parque_1 from '../img/parque_1.jpg';
import parque_2 from '../img/parque_2.jpg';
import parque_3 from '../img/parque_3.jpg';

import natureza from '../img/natureza.jpg'

import seta01 from '../img/seta-direita.png';
import '../estilos/home/home.sass';

function Home() {

    const [data, setData] = useState([]);
    const carousel = useRef(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('http://localhost:5173/src/json/json.json')
            .then((response) => response.json())
            .then(setData)
            .catch((error) => {
                console.error('Erro ao carregar os dados:', error);
            });
    };

    const scrollCarousel = (offset) => {
        if (carousel.current) {
            carousel.current.scrollLeft += offset;
        }
    };

    if (!data?.length) return null;
    return (
        <>
        <div className="container_home">
            <Swiper className="slide-show"
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className='slide'>
                    <img src={parque_1}></img>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={parque_2}></img>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={parque_3}></img>
                </SwiperSlide>
            </Swiper>

            <div className="container">
                <div className="top">
                    <div className="parteEsquerda">
                        <div className="titulo">Destaques</div>
                        <div className="subtitulo">Veja os destaques da semana</div>
                    </div>
                    <div className="parteDireita">
                        <button className="botao">Veja Mais</button>
                    </div>
                </div>
                <div className="carousel" ref={carousel}>
                    {data.map((item) => {
                        const { id, nome, endereco, img } = item;
                        return (
                            <div key={id}>
                                <div className="item">
                                    <div className="imagem">
                                        <img src={img} alt={nome} />
                                    </div>
                                    <div className="info">
                                        <div className="titulo_1">{nome}</div>
                                        <div className="subtitulo">{endereco}</div>
                                        <button className="botao">Veja Mais</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="buttons">
                    <div className="button" onClick={() => scrollCarousel(-carousel.current.offsetWidth)}>
                        <img className="imagens_dire" src={seta01} alt="seta" />
                    </div>
                    <div className="button" onClick={() => scrollCarousel(carousel.current.offsetWidth)}>
                        <img className="imagens_esq" src={seta01} alt="seta" />
                    </div>
                </div>
                
                <div className="noticia">
                    <h1 className="titulo">Noticia</h1>
                </div>

                <div className="noticia_1">
                    <div className="imagem">
                        <img src={natureza} alt="natureza"></img>
                    </div>
                    <div className="materia">
                        <h1 className="titulo_materia">Benefícios do contato com a natureza</h1>
                        <p className="texto_materia">Viver perto da natureza oferece diversos benefícios à saúde física, de acordo com um estudo realizado em conjunto pela Universidade de Harvard e o Brigham and Women’s Hospital. Este estudo envolveu mais de 108 mil mulheres e revelou que aquelas que residiam em áreas mais verdes tinham uma taxa de mortalidade 12% mais baixa em comparação com aquelas que viviam em áreas urbanas menos arborizadas. Além disso, o estudo indicou benefícios específicos para diferentes doenças, com uma redução de 41% no risco de morte relacionada a doenças renais, 34% em casos de doenças respiratórias e 13% em casos de câncer. Em resumo, o contato com a natureza pode contribuir significativamente para melhorar a saúde física.</p>
                    </div>
                </div>
            </div>
        </div>            
        </>
    );
}

export default Home