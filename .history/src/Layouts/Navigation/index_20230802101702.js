import './Navigation.scss';
import { CloseOutlined } from '@ant-design/icons';
function Navigation() {
    return (
        <div className="navi" style={{ display: isDivVisible ? 'none' : 'block' }}>
            <div className="navigation">
                <CloseOutlined className="close" />
                <div className="content_nav">
                    <h2>Home</h2>
                    <h2>About</h2>
                    <h2>Tours</h2>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
