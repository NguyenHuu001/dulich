import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Login.scss';

function Login() {
    return (
        <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
            <Input />
        </Form.Item>
    );
}

export default Login;
