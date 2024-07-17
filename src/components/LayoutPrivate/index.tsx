import FooterComponent from "../Footer";
import HeaderComponent from "../Header";
import * as S  from "./styles";

 function LayoutPrivate({children}: any){
    return(
        <S.LayoutContainer>
            <>
                <HeaderComponent />
                <S.ContentContainer>
                    {children}
                </S.ContentContainer>
                <FooterComponent />
            </>
        </S.LayoutContainer>
    )
}

export default LayoutPrivate