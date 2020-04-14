import React from 'react'
import classes from './Footer.module.css'
import github from '../../resources/logos/github.png'

const logoWidth=40
const Footer = (props) => {
    return (
        <React.Fragment>
             <div className={classes.Footer}>
        
        <div className={classes.IconContainer}> 
            <ul className={classes.Icons}>
                <li className="link d-inline-block"><a href="https://github.com/luisalfonsopreciado/PokemonWebApp" rel="noopener noreferrer" className="LinkU" target="_blank"><img src={github} width={logoWidth} alt="github"/></a></li>
            </ul>
        </div>
        </div>
        </React.Fragment>
       
    )
}
export default Footer