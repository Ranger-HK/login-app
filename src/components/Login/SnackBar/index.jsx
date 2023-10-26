import {Component} from "react";
import {styleSheeets} from "./../SnackBar/styles";
import {withStyles} from "@mui/styles";

class SnackBar extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        const {classes} = this.props
        return(
            <div className={classes.container}>

            </div>
        )
    }

}

export default withStyles(styleSheeets)(SnackBar);