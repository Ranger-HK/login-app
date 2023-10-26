import {Component,Fragment} from "react";
import TextField from "../../components/Login/TextField";
import SnackBar from "../../components/Login/SnackBar";


class Login extends Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
          <Fragment>
             <TextField/>
             <SnackBar/>
          </Fragment>
        )
    }
}

export default Login;