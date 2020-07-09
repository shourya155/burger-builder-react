import React,{ Component} from 'react';
import classes from './Modal.css';
import Backdrop from '../Bakdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show;
    }

    render(){
    return(
        <Auxiliary>
            <Backdrop clicked={this.props.modalClosed} show={this.props.show}></Backdrop>
            <div 
            className={classes.Modal}
            style={{
                transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)'
                }}
            >
            {this.props.children}
            </div>
        </Auxiliary>
        );
    }
}

export default Modal;