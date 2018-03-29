import React, { Component } from 'react';
import { Menu } from '../lib/requests';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container } from 'reactstrap';
import "../css/style.scss";


class ItemPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items:[],
    }
  }

  componentDidMount() {
    Menu
     .all()
     .then(
       items => {
         console.log("items:", items)
         this.setState({
           items: items.filter(item => item.display)
         })
       }
     )
  }


  render(){
    const { items } = this.state
      console.log(items)
    return (
      <main className="ItemPicker">
          <div className="item-container">
            {
              items && items.map(
                item =>
                  <Container key={item.id} className="item-card">
                    <Card>
                      <CardImg top width="30%" src={item.image.large.url} alt="Card image cap" />

                      <CardBody>
                        <CardTitle>{item.title}</CardTitle>
                        <CardText className="item-description">{item.description}</CardText>
                        <Button>Button</Button>
                      </CardBody>
                    </Card>
                  </Container>
              )
            }
        </div>
      </main>
    )
  }
}

export default ItemPicker;
