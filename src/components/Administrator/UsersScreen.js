import React, {useEffect} from "react";
import { Col, Row, Input, Table, Form, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getDataUser } from "../../actions/user";
import { columnUser } from "../../config/columUser";
import { FormModal } from "../Administrator/FormModal";
import {uiStartModalLoader } from "../../actions/ui";
import {addNewBusiness} from '../../actions/business';

export const UsersScreen = () => {
  const { users } = useSelector(
    (state) => state.user
  );

  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const { Search } = Input;
  const { Option } = Select;
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataUser());
  }, [dispatch]);

  const formSubmit = ()=> {
    form.submit();
  }

  const saveBusiness = (e) => {
    dispatch(uiStartModalLoader());
    dispatch(addNewBusiness(e));
  }

  const searchUser = (value) => {
    console.log(value);
  };
  return (
    <>
      <Row gutter={[8, 8]} style={{ marginTop: 10 }}>
        <Col span={24}>
          <Search
            className="input-search"
            placeholder="buscar email"
            onSearch={searchUser}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table dataSource={users} columns={columnUser(form)}></Table>
        </Col>
      </Row>
      <FormModal title="Nuevo negocio" saveFunction={formSubmit} form={form}>
      <Form {...layout} form={form} onFinish={saveBusiness}>
            <Form.Item
              hidden={true}
              label="idUser"
              name="idUser"
              rules={[{ required: true, message: "El id es requerido" }]}
            >
              <Input type="hidden" />
            </Form.Item>
            <Form.Item
              label="Comercio"
              name="businessName"
              rules={[{ required: true, message: "El nombre es requerido" }]}
            >
              <Input autoComplete="off" />
              </Form.Item>
              <Form.Item
              label="Descripción"
              name="description"
              rules={[{ required: true, message: "la descripción es requerida" }]}
            >
              <Input autoComplete="off" />
              </Form.Item>
              <Form.Item
              name="turn"
              label="Giro"
              hasFeedback
              rules={[
                { required: true, message: "El giro es requerido" },
              ]}
            >
              <Select placeholder="Por favor seleccione una opción">
                    <Option key={1} value={"Comida"}>
                      {"Comida"}
                    </Option>
                    <Option key={2} value={"Eléctronica"}>
                      {"Eléctronica"}
                    </Option>
                    <Option key={3} value={"Fruteria"}>
                      {"Fruteria"}
                    </Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Calle"
              name="street"
              rules={[{ required: true, message: "La calle es requerida" }]}
            >
              <Input autoComplete="off" />
              </Form.Item>
              <Form.Item
              label="No exterior"
              name="externalNumber"
              rules={[{ required: true, message: "El numero exterior es requerido" }]}
            >
              <Input autoComplete="off" />
              </Form.Item>
              <Form.Item
              label="No interior"
              name="internalNumber"
              rules={[{ required: false, message: "El numero interior es requerido" }]}
            >
              <Input autoComplete="off" />
              </Form.Item>
              <Form.Item
              label="Colonia"
              name="suburb"
              rules={[{ required: true, message: "La colonia es requerida" }]}
            >
              <Input autoComplete="off" />
              </Form.Item>
              <Form.Item
              label="C.P"
              name="postalCode"
              rules={[{ required: true, message: "La CP es requerido" }, {
                max: 5,
                message: "El CP debe contener 5 numero",
              },{min:5, message:"El CP debe contener 5 numero"}]}
            >
              <Input type="number" max={5} min={5} autoComplete="off" />
              </Form.Item>
              <Form.Item
              label="Referencia"
              name="reference"
              rules={[{ required: true, message:"La referencia es requerida"}]}
            >
              <Input autoComplete="off" />
              </Form.Item>
              </Form>
      </FormModal>
    </>
  );
};
