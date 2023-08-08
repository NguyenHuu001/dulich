import axios from 'axios';
import { message } from 'antd';
export const handleLogin = async (values) => {
    try {
        // Gửi yêu cầu đăng nhập tới server
        const response = await axios.post('/login', values);
        const { token, data, role } = response.data;

        // Lưu token vào localStorage hoặc cookie nếu cần thiết
        // localStorage.setItem('accessToken', token);
        message.success('Đăng nhập thành công!');

        // Tiến hành chuyển hướng người dùng tới trang sau khi đăng nhập thành công (nếu cần)
        // window.location.href = '/dashboard';

        // Hoặc sử dụng một phương thức chuyển hướng khác trong React Router
        // history.push('/dashboard');
    } catch (error) {
        // Xử lý lỗi đăng nhập (nếu có)
        if (error.response) {
            message.error('Sai mật khẩu hoặc tài khoản');
        } else {
            message.error('Failed to login. Please try again.');
        }
    }
};
