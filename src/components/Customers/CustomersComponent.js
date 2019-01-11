import React, { Component } from 'react';
// import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchCustomers } from '../../actions/customerAction';
import Customer from './CustomerComponent'

class Customers extends Component {
  componentDidMount = () => {
    this.props.fetchCustomers();
  }  

  render() {
    return (
      <div>
        <h1>Customers</h1>        
        {this.props.customers.map(item => <Customer name={item.name} city={item.city} />)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    customers: state.customerStore.customers,
    loading: state.customerStore.loading
  }
}

export default connect(mapStateToProps, { fetchCustomers })(Customers)