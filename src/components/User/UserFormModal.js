import React from "react";
import { Form, Input, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { uiCloseModalUser } from "../../actions/ui";
import { userClearDataModal } from "../../actions/user";

export const UserFormModal = ({ user = {}, form, disabledFields = false }) => {
  const { modalUserOpen, modalLoading } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const saveFunction = () => {
    console.log("Guardar");
  };

  const formValid = () => {
    console.log("form valido");
    dispatch(uiCloseModalUser());
  };

  const handleCloseModal = () => {
    form.resetFields();
    dispatch(uiCloseModalUser());
    dispatch(userClearDataModal());
  };

  return (
    <Modal
      title={"Crear usuario"}
      visible={modalUserOpen}
      onOk={saveFunction}
      confirmLoading={modalLoading}
      onCancel={handleCloseModal}
      okText="Guardar"
      cancelText="Cancelar"
    >
      <Form form={form} onFinish={formValid}>
        <Form.Item label="key" name="key">
          <Input type="hidden" />
        </Form.Item>
        <Form.Item
          label="Nombres"
          name="firstName"
          rules={[{ required: true, message: "El nombre es requerido" }]}
        >
          <Input autoComplete="off" disabled={disabledFields} />
        </Form.Item>
        <Form.Item
          label="Apellidos"
          name="lastName"
          rules={[{ required: true, message: "El apellido es requerido" }]}
        >
          <Input autoComplete="off" disabled={disabledFields} />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "El correo es requerido" },
            { type: "email", message: "El correo debe ser valido" },
          ]}
        >
          <Input autoComplete="off" disabled={disabledFields} />
        </Form.Item>
        <Form.Item
          label="Telefono"
          name="phoneNumber"
          rules={[
            { required: true, message: "El télefono es requerido" },
            {
              min: 10,
              message: "El télefono debe contener minimo 10 numeros",
            },
            {
              max: 10,
              message: "El télefono debe contener maximo 10 numero",
            },
          ]}
        >
          <Input
            type="number"
            max={10}
            min={10}
            autoComplete="off"
            disabled={disabledFields}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
