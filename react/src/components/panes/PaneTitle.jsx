import React, { Component } from 'react';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../../theme/App.Style';
import {
    Card,
    CardHeader,
} from '@material-ui/core/';

class PaneTitle extends Component {

    render() {
        const {
            classes,
        } = this.props;
        // const piDate = `${moment(Date.now()).format(`ddd, MMM Do, h:mm:ss a`)}`;
        return (
            <Card className={cn(classes.cardTitle)}>
                <CardHeader
                    title={`ChuckenGotchi`}
                    subheader={`Remember Tamagotchi? It's kind of like that, but with chickens`}
                />
            </Card>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(PaneTitle))
);
