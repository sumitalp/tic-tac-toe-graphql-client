import * as React from "react";
import Wrapper from "../../components/Wrapper";
import Grid, { IProps as IGridProps } from "../../components/Grid";

import {
    GameUrls as IGameUrls,
    Player as IPlayer,
    Symbol as ISymbol
} from "../../../typings/types";

type IProps = IGridProps & {
    gameUrls: IGameUrls;
    isMultiplayer: boolean;
    controllingPlayer: IPlayer;
};

class GridPage extends React.Component<IProps> {

    public render() {
        const {
            controllingPlayer,
            currentPlayer,
            isMultiplayer,
            gameUrls
        } = this.props;

        const otherSymbol =
            controllingPlayer.symbol === ISymbol.CROSS
                ? ISymbol.NAUGHT
                : ISymbol.CROSS;
        const path = gameUrls[otherSymbol];

        return (
            <Wrapper
                controllingPlayer={controllingPlayer}
                currentPlayer={currentPlayer}
                gameUrl={`${location.origin}/${path}`}
                isMultiplayer={isMultiplayer}
            >
                <Grid {...this.props} />
            </Wrapper>
        );
    }
}

export default GridPage;
