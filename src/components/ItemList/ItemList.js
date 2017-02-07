import React, {Component} from 'react';

class ItemList extends Component {
    render() {
        const {title, children} = this.props;
        return (<div className="item-list">
            <h3>{title}</h3>
            <div>{children}</div>
        </div>);
    }
}

export default ItemList;