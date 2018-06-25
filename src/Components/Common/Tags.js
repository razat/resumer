import React, { Component } from 'react';


class Tags extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const TagKeys = this.props.items || [];
        if(typeof TagKeys[0] === 'object') {

            return (
                <div className="tags">
                {TagKeys.map((item, id) => {
                  return(
                      <span key={item.name + id} className={['rateit-'+item.rating, 'tag'].join(' ')}> {item.name}
                          <button className="delete is-small"></button>
                      </span>);
                }
                )}
                </div>
             )
        } else {

            return (
                <div className="tags">
                {TagKeys.map((item, id) => {
                  return(
                      <span className="tag" key={item + id}> {item}
                          <button className="delete is-small"></button>
                      </span>);
                }
                )}
                </div>
             )

        }
    }
}


export default Tags;