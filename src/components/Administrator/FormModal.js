import React from "react";
import { Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { uiCloseModal } from "../../actions/ui";

export const FormModal = (props) => {
  const { title, saveFunction, children, form } = props;
  const { modalFormOpen, modalLoading } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(uiCloseModal());
    form.resetFields();
  };
  return (
    <Modal
      title={title}
      visible={modalFormOpen}
      onOk={saveFunction}
      confirmLoading={modalLoading}
      onCancel={handleCloseModal}
      okText="Guardar"
      cancelText="Cancelar"
    >
      {children}
    </Modal>
  );
};
