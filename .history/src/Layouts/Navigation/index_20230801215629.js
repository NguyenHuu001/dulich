import './Navigation.scss'
import { CloseOutlined } from '@ant-design/icons';
function Navigation() {
    return (
         <div className="navi">
            <div className='navigation'>
            <CloseOutlined />
                <div className='content_nav'>
                    <h2>Home</h2>
                    <h2>About</h2>
                    <h2>Tours</h2>
                </div>
            </div>
    </div>
     );
}

export default Navigation;