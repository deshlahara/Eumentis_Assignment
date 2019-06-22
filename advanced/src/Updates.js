import React, { Component } from "react";

import { Modal, Form, Input } from "antd";

const Updates = Form.create()(
  // name of the newly created form inside ()

  class extends Component {
    render() {
      // const { name, email, phone, website } = this.props;

      // data definition
      const { popup, cancelLogic, updateLogic, form } = this.props;
      const { getFieldDecorator } = form; // getFieldDecorator is a function to define form elements
      // const { name, email, phone, website } = this.props.data;

      const { name, email, phone, website } = this.props.data;

      return (
        <Modal
          visible={popup}
          title="Edit Personal Information" // title of modal
          okText="UPDATE"
          cancelText="CANCEL"
          onCancel={cancelLogic}
          onOk={updateLogic}
          centered
        >
          <Form centered layout="inline">
            <Form.Item label="Name: ">
              {getFieldDecorator("name", {
                rules: [{ required: true, message: "Please enter your Name !" }]
              })(<Input placeholder={name} />)}
            </Form.Item>

            <Form.Item label="Email: ">
              {getFieldDecorator("email", {
                rules: [
                  { required: true, message: "Please enter your email !" }
                ]
              })(<Input placeholder={email} />)}
            </Form.Item>

            <Form.Item label="Phone: ">
              {getFieldDecorator("phone", {
                rules: [
                  { required: true, message: "Please enter your phone !" }
                ]
              })(<Input placeholder={phone} />)}
            </Form.Item>

            <Form.Item label="Website: ">
              {getFieldDecorator("website", {
                rules: [
                  { required: true, message: "Please enter your website !" }
                ]
              })(<Input placeholder={website} />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

export default Updates;
