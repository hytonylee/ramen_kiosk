import React, { Component } from 'react';
import { Menu } from '../lib/requests';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container } from 'reactstrap';
import "../css/style.scss";


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
           menus: menus.filter(menu => menu.display)
         })
       }
     )
  }


  render(){
    const { menus } = this.state
      console.log(menus)
    return (
      <main className="Patron">
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
