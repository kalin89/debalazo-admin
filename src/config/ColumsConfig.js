import React from "react";
import { Tag, Button, Space } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { uiOpenModal } from "../actions/ui";

export const CulumnsRequest = (form, status, setIsNewRequest) => {
  return [
    {
      title: "#",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Nombre(s)",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Apellido",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Telefono celular",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Comentarios",
      dataIndex: "comments",
      key: "comments",
    },
    {
      title: "Estado de la solicitud",
      key: "requestStatus",
      dataIndex: "requestStatus",
      align: "center",
      render: (statusId) => {
        let configTag = {
          color: "",
          text: "",
        };

        let textStatus;
        status.forEach((s) => {
          if (s._id === statusId) return (textStatus = s.status);
        });

        switch (textStatus) {
          case "Pendiente":
            configTag.color = "orange";
            configTag.text = "Pending";
            break;
          case "Aceptada":
            configTag.color = "green";
            configTag.text = "Aceptado";
            break;
          case "Rechazada":
            configTag.color = "red";
            configTag.text = "Rechazada";
            break;
          default:
            break;
        }
        return <>{<Tag color={configTag.color}>{configTag.text}</Tag>}</>;
      },
    },
    {
      title: "Editar",
      key: "editar",
      render: (text, record) => {
        let estatusId;
        status.forEach((s) => {
          if (s.status === "Aceptada") {
            estatusId = s._id;
            return;
          }
        });
        return (
          <Space>
            {record.requestStatus !== estatusId && (
              <EditButton
                data={record}
                form={form}
                setIsNewRequest={setIsNewRequest}
              />
            )}
          </Space>
        );
      },
    },
  ];
};

const EditButton = ({ data, form, setIsNewRequest }) => {
  const dispatch = useDispatch();

  const editRequest = (data) => {
    setIsNewRequest(false);
    dispatch(uiOpenModal());
    form.setFieldsValue({
      ...data,
      id: data.key,
    });
  };

  return (
    <Button
      type="primary"
      icon={<EditOutlined />}
      onClick={() => editRequest(data)}
    >
      Editar
    </Button>
  );
};
