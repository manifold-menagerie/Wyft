import React from 'react';
import { Icon, Label, Menu, Table, Card, Button } from 'semantic-ui-react';

class SearchResultItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }

  // componentDidUpdate(prevProps){
  // 	if(this.props.data !== prevProps.data) {
  // 		this.setState({data: this.props.data});
  // 	}
  // }

  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>{this.props.data['street_address']}</Card.Header>
          <Card.Meta>1 Miles</Card.Meta>
          <Card.Description>
            Total available sections: {this.props.data['sections'].length}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Approve
            </Button>
            <Button basic color='red'>
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default SearchResultItem;
