import React, { useState } from "react";
import "./SignIn.scss";
import "antd/dist/antd.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { LoginFormPage, ProFormText } from "@ant-design/pro-components";
import accountService from "../../../Service/AccountService";

function SignIn() {
  const onFinish = async (values) => {
    let userData = {
      username: values.username,
      password: values.password,
    };
    await accountService
      .userLogin(userData)
      .then((res) => {
        console.log(res);
        // localStorage.setItem("accessToken", res.data.accessToken);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div id="signin-page">
        <div
          style={{
            height: "calc(100vh - 48px)",
            margin: -24,
          }}
        >
          <LoginFormPage
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
            logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
            title="Github"
            subTitle="Github"
          >
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: "large",
                  prefix: <UserOutlined className={"prefixIcon"} />,
                }}
                placeholder={" admin or user"}
                rules={[
                  {
                    required: true,
                    message: "Please enter!",
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: "large",
                  prefix: <LockOutlined className={"prefixIcon"} />,
                }}
                placeholder={" ant.design"}
                rules={[
                  {
                    required: true,
                    message: "Please enter",
                  },
                ]}
              />
            </>
          </LoginFormPage>
        </div>
      </div>
    </>
  );
}

export default SignIn;
