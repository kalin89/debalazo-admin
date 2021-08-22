import React, {useEffect, useState} from "react";
import { Row, Col, Form, Input, Button, Checkbox } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { loginRequest } from "../../actions/request"

import "./login.scss";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export const LoginScreen = () => {
  const [navigate, setNavigate] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 4,
      span: 16,
    },
  };

  useEffect(() => {
    if(navigate){
      history.push("admin/users")
    }
       
  }, [navigate]);


  const onFinish = (values) => {
    dispatch(loginRequest(values));
    setNavigate(true);
    
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  return (
    <Row>
      <Col span={12} offset={6}>
        <div className="login__form">
          <h2><span>De</span>Balazo</h2>
          <div className="__div1">
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="E-mail"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "El nombre de usuario es requerido",
                  },
                ]}
              >
                <Input prefix={<UserOutlined />} />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "El password es querido",
                  },
                ]}
              >
                <Input.Password prefix={<LockOutlined />} />
              </Form.Item>

              <Form.Item
                {...tailLayout}
                name="remember"
                valuePropName="checked"
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Col>
    </Row>
  );
};