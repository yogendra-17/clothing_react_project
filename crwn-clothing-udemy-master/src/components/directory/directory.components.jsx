import React from 'react';
import {sections as sections_list} from "./directory.data.js";
import MenuItem from "../menu-item/menu-item.components";
import './directory.styles.scss'
import {Link} from "react-router-dom";

export class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: sections_list,
        }
    }

    render() {
        return(

            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherProps}) => (
                    <MenuItem key={id} {...otherProps}/>)
                )}
            </div>

        )
    }
}
