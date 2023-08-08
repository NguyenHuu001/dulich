import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form, Input, InputNumber } from 'antd';
import './Login.scss';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
function Login() {
    return (
        <Form
    {...layout}
    name="nest-messages"
    style={{ maxWidth: 600 }}
  >
    
    <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
      <Input />
    </Form.Item>
    
    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    );
}

export default Login;
