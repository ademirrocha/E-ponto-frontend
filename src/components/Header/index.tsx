import * as S  from "./styles";
import LineHeader  from "../../assets/imgs/lineHeader.svg"

 function HeaderComponent(){
    return(
        <S.HeaderContainer>
            <>
                <S.ImageContainer src={LineHeader} alt="" />
                <div className="dv-1">E-ponto</div>
                <div className="dv-2">Sistema de Gestão de Ponto Eletrônico</div>
            </>
        </S.HeaderContainer>
    )
}

export default HeaderComponent