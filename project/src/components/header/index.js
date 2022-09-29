import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";
import Img from "../../images/git.jpg";


const Header = () => {
    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState();

    const submitGetUser = () => {
        if (!usernameForSearch) return;
        return getUser(usernameForSearch);
    };

    return (
        <header>
            <S.Image>
                <img src={Img}/>
            </S.Image>
            <S.Wrapper>
                <input
                type="text"
                placeholder="Digite o username para pesquisa..."
                onChange={(event) => setUsernameForSearch(event.target.value)}
                />
                <button type="submit" onClick={submitGetUser}>
                    <span>Buscar</span>
                </button>
            </S.Wrapper>
        </header>
    );
};

export default Header;