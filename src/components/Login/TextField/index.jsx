import {Component} from "react";
import {styleSheeets} from "./../TextField/styles";
import {withStyles} from "@mui/styles";
import {Typography} from "@mui/material";

class TextField extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        const {classes} = this.props
        return(
            <div className={classes.container}>
                 <div >
                     <Typography variant="h3" gutterBottom>
                        Login
                     </Typography>

                     <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                 </div>

            </div>
        )
    }

}

export default withStyles(styleSheeets)(TextField);