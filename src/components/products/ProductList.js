import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Badge } from 'reactstrap';

class ProductList extends Component {
    render() {
        return (
            <div>
                <h3>Products<h6><span class="badge rounded-pill bg-secondary">{this.props.currentCategory.categoryName}</span></h6></h3>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
      currentCategory: state.changeCategoryReducer,
    };
  }


export default connect(mapStateToProps)(ProductList);