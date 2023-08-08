import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import imgpass from '../../assets/images/img_pass.png';
import avatarLogin from '../../assets/images/avatar_login.png';

function Register() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    // Gọi API đăng ký thông qua axios
    try {
      const response = await axios.post('/api/auth/register', {
        username: username,
        email: email,
        password: password,
      });

      // Xử lý phản hồi từ server sau khi đăng ký thành công
      console.log(response.data);
      // Hiển thị thông báo đăng ký thành công tại đây (nếu muốn)
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error(error.response.data);
      // Hiển thị thông báo lỗi tại đây (nếu muốn)
    }
  };

  return (
    <div className="container col-sm-12 mt-5 mb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-12 d-flex flex-wrap justify-content-center mb-5">
          <div className="col-md-4 col-12 d-flex align-items-center">
            <img src={imgpass} alt="anh pass" />
          </div>
          <div className="col-md-4 col-12 mt-5 d-flex flex-column align-items-center bg-login">
            <img
              className="avatar_login"
              src={avatarLogin}
              style={{ width: '80px', height: '80px', borderRadius: '50%' }}
              alt="anh"
            />
            <h3 className="title_login">Register</h3>
            <div className="col-md-10">
              <Form
                className="d-flex flex-column justify-content-center align-items-center form"
                {...layout}
                name="nest-messages"
                onSubmit={handleRegister} // Gắn hàm xử lý khi người dùng submit form
              >
                <div className="mb-4" style={{ width: '100%' }}>
                  <Input
                    style={{ width: '100%' }}
                    placeholder="User Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Cập nhật trạng thái username khi người dùng nhập
                  />
                </div>
                <div className="mb-4" style={{ width: '100%' }}>
                  <Input
                    style={{ width: '100%' }}
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Cập nhật trạng thái email khi người dùng nhập
                  />
                </div>
                <div style={{ width: '100%' }} className="mb-4">
                  <Input.Password
                    style={{ width: '100%' }}
                    placeholder="input password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Cập nhật trạng thái password khi người dùng nhập
                  />
                </div>
                <Button
                  className="mb-4"
                  style={{ width: '100%', backgroundColor: 'black' }}
                  type="primary"
                  htmlType="submit"
                  onSubmit={}
                >
                  Register
                </Button>
                <div className="d-flex  ">
                  <p className="cdk mb-0 me-3">Already have an account?</p>
                  <Link to="/login">
                    <div style={{ color: 'black' }} className="fw-bolder">
                      Login
                    </div>
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
