import React, { useEffect, useState } from "react";
import { Table, Button, Form, Input, Select, Badge, Space } from "antd";
import { CulumnsRequest } from "../../config/ColumsConfig";
import { PlusOutlined, ProfileOutlined } from "@ant-design/icons";
import { FormModal } from "./FormModal";
import { useDispatch, useSelector } from "react-redux";
import { uiOpenModal, uiStartModalLoader } from "../../actions/ui";
import {
  addNewRequest,
  updateRequest,
  GetDataRequest,
  getRequestByEmail,
  getAllRequestPending,
} from "../../actions/request";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";

const RequestsScreen = () => {
  const { requests, status, pendingCount } = useSelector(
    (state) => state.request
  );
  const [isNewRequest, setIsNewRequest] = useState(false);
  const [form] = Form.useForm();
  const configColumns = CulumnsRequest(form, status, setIsNewRequest);
  const { Option } = Select;
  const { Search } = Input;

  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetDataRequest());
  }, [dispatch]);

  const saveEditRequest = () => {
    form.submit();
  };

  const saveRequest = async (e) => {
    if (e.key === undefined) {

      dispatch(addNewRequest(e, requests[requests.length-1].no));
    } else {
      let textStatus;
      status.forEach((s) => {
        if (s._id === e.requestStatus) {
          textStatus = s.status;
          return;
        }
      });
      if (textStatus === "Aceptada") {
        Swal.fire({
          title: "¿Estas seguro de aprobar esta solicitud?",
          text:
            "Al aprobar esta solicitud se crear un nuevo usuario business con los datos de la solicitud",
          confirmButtonColor: "#269615",
          cancelButtonColor: "#d33",
          confirmButtonText: "Aprobar",
          showCancelButton: true,
          cancelButtonText: "Cancelar",
        }).then(async (result) => {
          if (result.isConfirmed) {
            dispatch(uiStartModalLoader());
            await dispatch(updateRequest(e));
          }
        });
        return;
      }
      dispatch(uiStartModalLoader());
      await dispatch(updateRequest(e));
    }
  };

  const shearchRequest = (value) => {
    console.log(value);
    if (!value) {
      return dispatch(GetDataRequest());
    }

    dispatch(getRequestByEmail(value));
  };

  const searchPending = () => {
    dispatch(getAllRequestPending());
  };

  const showModal = () => {
    form.resetFields();
    setIsNewRequest(true);
    dispatch(uiOpenModal());
  };
  return (
    <div className="request">
      <div className="buton-new">
        <Space>
          <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
            Nueva solicitud
          </Button>
          <Button type="text" onClick={searchPending}>
            <Badge count={pendingCount}>
              <ProfileOutlined
                style={{ fontSize: "28px", color: "#08c" }}
                className="icon-notification"
              />
            </Badge>
          </Button>
        </Space>
      </div>
      <div>
        <Search
          className="input-search"
          placeholder="buscar email"
          onSearch={shearchRequest}
        />
      </div>
      <div>
        <Table columns={configColumns} dataSource={requests} />
        <FormModal
          title="Nueva Solicitud"
          saveFunction={saveEditRequest}
          form={form}
        >
          <Form {...layout} form={form} onFinish={saveRequest}>
            <Form.Item
              hidden={true}
              label="key"
              name="key"
              // rules={[{ required: false, message: "El nombre es requerido" }]}
            >
              <Input type="hidden" />
            </Form.Item>
            <Form.Item
              label="Nombres"
              name="firstName"
              rules={[{ required: true, message: "El nombre es requerido" }]}
            >
              <Input autoComplete="off" />
            </Form.Item>
            <Form.Item
              label="Apellidos"
              name="lastName"
              rules={[{ required: true, message: "El apellido es requerido" }]}
            >
              <Input autoComplete="off" />
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
              <Input type="number" max={10} min={10} autoComplete="off" />
            </Form.Item>
            <Form.Item
              label="Correo"
              name="email"
              rules={[
                { required: true, message: "El correo es requerido" },
                { type: "email", message: "El correo debe ser valido" },
              ]}
            >
              <Input autoComplete="off" />
            </Form.Item>
            <Form.Item
              hidden={isNewRequest}
              name="comments"
              label="Comentario"
              rules={[
                {
                  required: !isNewRequest,
                  message: "El comentario es requerido",
                },
              ]}
            >
              <Input autoComplete="off" />
            </Form.Item>
            <Form.Item
              hidden={isNewRequest}
              name="requestStatus"
              label="Estado"
              hasFeedback
              rules={[
                { required: !isNewRequest, message: "El estado es requerido" },
              ]}
            >
              <Select placeholder="Por favor seleccione una opción">
                {status.map((s) => {
                  return (
                    <Option key={s._id} value={s._id}>
                      {s.status}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Form>
        </FormModal>
      </div>
    </div>
  );
};

export default withRouter(RequestsScreen);
