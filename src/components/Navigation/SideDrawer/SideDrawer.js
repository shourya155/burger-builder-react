import React from 'react';
import classes from './SideDrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Bakdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary'; 


const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer,classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer,classes.Open];
    }
    
    return(
        <Auxiliary>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
            <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Auxiliary>
    );
}

export default sideDrawer;