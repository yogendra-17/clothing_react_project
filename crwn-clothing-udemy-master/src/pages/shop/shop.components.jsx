import React from 'react';
import './shop.styles.scss'
import SHOP_DATA from "./shop.data.js";
import CollectionPreview from '../../components/collection-preview/collection-preview.components.jsx'

export class ShopPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = SHOP_DATA;
    }


    render() {
        const collections = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, title, routeName, items})=>(
                        <CollectionPreview key={id} title={title} routeName={routeName} items={items}/>
                        )
                    )
                }
            </div>
        )
    }
}