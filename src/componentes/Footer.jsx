import Logo from "./Logo"
import { BsFacebook , BsEnvelope} from 'react-icons/bs';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import '../estilos/footer/footer.sass'

function Footer() {
    return(
        <>
        <div className="container_footer">
            <div className="footer">
                <div className="footer_01">
                    <li>
                        <Logo className="logo"/>
                    </li>
                    <li>
                        <a href="#" className="footer_categorias">Sobre Nós</a>
                    </li>
                    <li>
                        <a href="#" className="footer_categorias">Anuncie</a>
                    </li>
                    <li>
                        <a href="#" className="footer_categorias">Política de uso</a>
                    </li>
                </div>

                <ul className="footer_02">
                    <li>
                        <h3 className="footer_titulos">Para você</h3>
                    </li>
                    <li>
                        <a href="#" className="footer_categorias">Notícias</a>
                    </li>
                    <li>
                        <a href="#" className="footer_categorias">Parques</a>
                    </li>
                    <li>
                        <a href="#" className="footer_categorias">Aventura</a>
                    </li>
                </ul>

                
                <ul className="footer_03">
                    <li>
                        <h1 className="footer_titulos">Eventos</h1>
                    </li>
                    <li>
                        <a href="#" className="footer_categorias">Meus eventos</a>
                    </li>
                    <li>
                        <a href="#" className="footer_categorias">Novos Eventos</a>
                    </li>
                    <li>
                        <a href="#" className="footer_categorias">Resultados</a>
                    </li>
                </ul>

                <div className="footer_04">
                    <div className="duvidas">
                        <h1>Dúvidas</h1>
                        <p>Insira seu email que entraremos em contato</p>
                        <div className="duvidas_grupo">
                            <input type="emai" className="email" />
                                <button className="button_duvidas">
                                    <BsEnvelope />
                                </button>
                        </div>
                    </div>

                    <div className="footer_redes">
                        <a href="#" className="facebook">
                            <BsFacebook />
                        </a>

                        <a href="#" className="instagram">
                            <BiLogoInstagramAlt />
                        </a>
                    </div>
                </div>
            </div>
                <div className="footer_copyright">
                    &copy; 2023 all rights reserved
                </div>
        </div>
        
        </>
    )
}

export default Footer