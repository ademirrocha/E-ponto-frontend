import * as S  from "./styles";
import LineFooter  from "../../assets/imgs/lineFooter.svg"

 function FooterComponent(){
    return(
        <S.FooterContainer>
            <>
                <S.ImageContainer src={LineFooter} alt="" />
                <div className="dv">E-ponto | Sistema de Gestão de Ponto Eletrônico &copy; 2024 | Myzzy Tecnologia</div>
            </>
        </S.FooterContainer>
    )
}

export default FooterComponent