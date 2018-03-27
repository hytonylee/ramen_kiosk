import React, { Component } from 'react';
import {
  Button, Form, FormGroup, Label, Input, FormText, Col
} from 'reactstrap';
import { Menu } from '../lib/requests';



class MenuNew extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  createMenu(menuParams) {
    Menu.create(menuParams).then(data => { const {id} = data;
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(event);


    Menu.create({
      menu: {
        title: formData.get('title'),
        description: formData.get('description'),
        image: formData.get('image'),
        display: formData.get('display')
      }
    }).then(data => {
      if (!data.errors) {
        this.props.histroy.push(`/menus/${id}`)
      }
    });
  }

  render() {
    const { value } = this.state;
    return (
      <Form>
        <FormGroup row >
          <Label for="title" sm={2}>Title</Label>
          <Col sm={10}>
            <Input type="title" name="title" id="title" placeholder="with a placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="description" sm={2}>Description</Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="description" />
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="image" sm={2}>Image</Label>
            <Col sm={10}>
              <Input type="file" name="file" id="image" />
              <FormText color="muted">
                Please select an image for your menu.
              </FormText>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="display" sm={2}>Checkbox</Label>
            <Col sm={{ size: 10 }}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="display" />{' '}
                  Display
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button onClick={this.handleSubmit}>Submit</Button>
            </Col>
          </FormGroup>
      </Form>
      )

  }
}

export default MenuNew
