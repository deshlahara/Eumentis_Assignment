// imports first
import React, { Component } from "react";
import Updates from "./Updates";

import { Card, Icon } from "antd";
import { Row, Col } from "antd";
// import { Modal, Form, Input } from 'antd';

// import Forms from './Forms';

//const after imports
const { Meta } = Card;

const fancy = {
  fontSize: "0.9em"
};

class FakeCard extends Component {
  constructor(props) {
    // passing state as props
    super(props);

    this.onIconClick = this.onIconClick.bind(this); // bind is needed to use this in callback
    this.showModal = this.showModal.bind(this); // this shows the modal on click of edit icon
    // this.deleteLogic = this.deleteLogic.bind(this);

    const { name, email, phone, website } = this.props.data;

    // this.deleteRef = React.createRef();

    this.state = {
      toggle: true, // ICON TOGGLE
      // popup: false,
      popup: false, //MODAL POPUP
      name: name, // name on RHS is the JSON data prop that's destructured
      email: email,
      phone: phone,
      website: website
    };
  }
  // state = {icon: <Icon type="heart" theme="twoTone" twoToneColor="red" />}
  // const {}

  onIconClick = e => {
    e.preventDefault();
    this.setState(state => ({
      // state is a callback that is called and checks the current state of the icon anf toggles it
      toggle: !state.toggle // this sees the toggle state as TRUE / FALSE and re-renders the state as per state
    }));
  };

  // showModal = popup => {
  //   this.setState({ popup });
  // };

  showModal = () => {
    this.setState({
      popup: true
    });
  };

  cancelLogic = () => {
    this.setState({ popup: false });
  };

  // this logic saves the form details into card
  updateFormRef = formRef => {
    //saveFormRef is a prop
    this.formRef = formRef;
  };

  //LOGIC TO UPDATE THE DETAILS
  updateLogic = () => {
    const form = this.formRef.props.form; // form on LHS is used in next line to validate the fields entered and form on both LHS and RHS are different
    //validating the form fields
    form.validateFields((error, newData) => {
      // IF CANCEL IS CLICKED
      if (error) {
        return;
      }
      // IF UPDATE BUTTTON IS CLICKED THEN THIS LOGIC IS EXECUTED
      console.log(" UPDATED DETAILS ", newData);
      this.setState({
        popup: false,
        name: newData.name, // newdata.name on RHS is the data entered to update the card details
        email: newData.email,
        phone: newData.phone,
        website: newData.website
      });
    });
  };

  // delete logic

  render() {
    // const { name, email, phone, website } = this.props.data; // destructuring the props data

    return (
      <Row justify="center">
        <Col md={8} sm={24} lg={6} xs={24} xl={6}>
          <Card
            className="shadow-sm"
            style={{ width: "260px" }}
            cover={
              <img
                style={{ backgroundColor: "#F5F5F5" }}
                alt="example"
                src={`https://avatars.dicebear.com/v2/avataaars/${
                  this.props.data.username
                }.svg?options[mood][]=happy`}
              />
            }
            actions={[
              // this checks state of icon and toggles it as per the boolean value
              <Icon
                type="heart"
                theme={this.state.toggle ? "twoTone" : "filled"}
                twoToneColor="red"
                fill={this.state.toggle ? "red" : "red"}
                onClick={e => this.onIconClick(e)}
              />,

              // callback that activates the modal on screen
              <Icon type="edit" onClick={this.showModal} />,

              // callback () is used to update the state of cards when icon is clicked
              // so if () is not defined, then it directly filters the cards and removes then on initial render
              // argument called inside deleteLogic() as this.props.key is refering to its parent ie <Map />
              <Icon
                type="delete"
                theme="filled"
                onClick={() => this.props.deleteLogic(this.props.name)}
              />
            ]}

            // card end
          >
            {/* <Modal
              title="Edit Personal Information"
              centered  // centered on screen 
              visible={this.state.popup}  // this prop shows the modal on screen by reverting the current value of state : false
              onOk={() => this.showModal(false)}  // OK BUTTON
              onCancel={() => this.showModal(false)}  // CANCEL BUTTON
            >

            </Modal> */}
            <Updates
              wrappedComponentRef={this.updateFormRef}
              popup={this.state.popup}
              cancelLogic={this.cancelLogic}
              updateLogic={this.updateLogic}
              data={this.props.data}
            />

            <Meta className="mb-1" title={this.state.name} />

            <Row>
              <Col span={4}>
                <Meta className="pt-1" avatar={[<Icon type="mail" />]} />
                <Meta className="pt-1" avatar={[<Icon type="phone" />]} />
                <Meta className="pt-1" avatar={[<Icon type="global" />]} />
              </Col>
              <Col span={20} style={fancy}>
                <Meta className="pt-2" avatar={this.state.email} />
                <Meta className="pt-2" avatar={this.state.phone} />
                <Meta className="pt-2" avatar={this.state.website} />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default FakeCard;
