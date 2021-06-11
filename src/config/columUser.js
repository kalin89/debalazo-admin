import React from "react";
import {Button} from 'antd';
import {useDispatch} from 'react-redux'
import {uiOpenModal} from '../actions/ui'
import { CheckOutlined, CloseOutlined, BankOutlined, PlusOutlined } from "@ant-design/icons";

export const columnUser = (form) => {
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
      title: "Apellidos",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Télefono",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Correo verificado",
      dataIndex: "isVerificated",
      key: "isVerificated",
      align: "center",
      render: (value) => {
        return (
          <>
            <ReturnCheck check={value} />
          </>
        );
      },
    },
    {
      title: "Cliente",
      dataIndex: "isClient",
      key: "isClient",
      align: "center",
      render: (value) => {
        return (
          <>
            <ReturnCheck check={value} />
          </>
        );
      },
    },
    {
      title: "Conductor",
      dataIndex: "isDriver",
      key: "isDriver",
      align: "center",
      render: (value) => {
        return (
          <>
            <ReturnCheck check={value} />
          </>
        );
      },
    },
    {
      title: "Business",
      dataIndex: "isBusiness",
      key: "isBusiness",
      align: "center",
      render: (value) => {
        return (
          <>
            <ReturnCheck check={value} />
          </>
        );
      },
    },
    {
      title: "Comercio",
      dataIndex: "idBusiness",
      key: "idBusiness",
      align: "center",
      render: (text, record) => {
        return (
          <>
            <ReturnBusinees data={record} form={form} />
          </>
        );
      },
    }
  ];
};

const ReturnCheck = ({ check }) => {
  return check ? (
    <CheckOutlined style={{ fontSize: "16px", color: "#168505" }} />
  ) : (
    <CloseOutlined style={{ fontSize: "16px", color: "#08c" }} />
  );
};

const ReturnBusinees = ({data, form}) => {
  const dispatch = useDispatch();
  const actionBusiness = () => {
    if (data.idBusiness === ''){
      dispatch(uiOpenModal());
      form.setFieldsValue({
        ...data,
        idUser: data.key,
      });
      console.log('Nuevo business con user id:' + data.key);
    } else {
      console.log("go to business con business id: " + data.idBusiness );
    }
  }
  const icon = !data.isBusiness ? null : (data.isBusiness && data.idBusiness === '') ? <PlusOutlined /> : <BankOutlined />
  return icon !== null ? 
  <Button
  type="primary"
  icon={icon}
  onClick={() => actionBusiness()} 
  >
  </Button>
: 
<h1> - </h1>
}


