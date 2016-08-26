import React from 'react';
import classNames from 'classnames';

//-----------------------------------------------------------------------------
var Sidebar = React.createClass({
  render: function() {

    var _this = this;
    var items = this.props.fields.map(function(field, index) {
       return <SidebarListItem  
          id={index} 
          name={field.title} 
          desc={field.description}
          key={field.title} 
          func={_this.props.gotoField} 
          selected={index == _this.props.currentItem}
        />
    });

    return (
      <div className="col-md-3 col-lg-2 sidebar">
        <h4> Object Fields </h4>
        <dl>
          {items}
        </dl>
      </div>
    )
  }
})

//-----------------------------------------------------------------------------
var SidebarListItem = React.createClass({
  handleClick: function() {
    this.props.func(this.props.id);
  },
  render: function() {

    let classes = classNames(
      "sidebar_item",
      {selected: this.props.selected}
    );

    return ( 
        <div className={classes} onClick={this.handleClick}>
          <dt> {this.props.name} </dt>
          <dd> {this.props.desc} </dd> 
        </div>
    );
  }
})

//-----------------------------------------------------------------------------
export default Sidebar;