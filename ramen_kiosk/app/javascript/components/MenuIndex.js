import React, { Component } from 'react';
import { Menu } from '../lib/requests';
import { Container, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

  class Patron extends Component {
    constructor(props) {
      super(props)
      this.state = {
        menus:[],
      }
    }

    componentDidMount() {
      Menu
       .all()
       .then(
         menus => {
           this.setState({
             menus: menus
           })
         }
       )
    }


    render(){
      const { menus } = this.state
      return (
        <main className="Server">
            <div className="menu-container">
              {
                menus && menus.map(
                  menu =>
                    <Container key={menu.id} className="menu-card">
                      <Card>
                        <CardImg top width="30%" src={menu.image.large.url} alt="Card image cap" />

                        <CardBody>
                          <CardTitle>{menu.title}</CardTitle>
                          <CardText className="menu-description">{menu.description}</CardText>
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

  export default Patron;
