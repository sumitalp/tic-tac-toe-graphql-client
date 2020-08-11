import * as React from "react";
import { Mutation, MutationFn } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { Mutation as IMutation } from "../../../typings/types";
import HomePage from "../../pages/Home";
import * as NEW_GAME from "./newGame.graphql";


interface IProps extends RouteComponentProps<{}> {}

class Home extends React.Component<IProps> {
    public state = {};
    constructor(props: IProps) {
        super(props);
        this.onNewGame = this.onNewGame.bind(this);
    }

    public render() {
        return (
            <Mutation mutation={NEW_GAME} onCompleted={this.onNewGame}>
                {(mutation: any, { loading: mutationLoading }) => (
                    <HomePage
                        loading={mutationLoading}
                        newGame={this.onNewGameClick.bind(
                            this,
                            mutation
                        )}
                        
                    />
                )}
            </Mutation>
        );
    }

    private onNewGameClick(mutation: MutationFn) {
        this.setState( () => {
            mutation();
        });
    }

    private onNewGame({ newGame }: IMutation) {
        const { history } = this.props;
        history.push(`/game/${newGame.id}`);
    }
}

export default compose(withRouter)(Home);
