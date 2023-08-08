import './Navigation.scss'
function Navigation() {
    return ( <div className={s('coating')} style={{ display: isDivVisible ? 'none' : 'block' }}>
    <div className={s('sidebar_content')}>
        <div className={s('sidebar_top', 'd-flex', 'justify-content-between', 'align-items-center')}>
            <img src={logoMobile} alt="" />
            <FontAwesomeIcon icon={faXmark} onClick={handleToggleDiv} />
        </div>
        <div className={s('sidebar_cart')}>
            <a href="#">
                <img src={cart} alt="" />
                <span></span>
            </a>
        </div>
        <div className={s('sidebar_menu ')}>
            <ul className="list_style" style={{ listStyle: 'none' }}>
                <li className={s('text-uppercase', 'pt-3', 'fw-bolder')}>Trang chủ</li>
                <li className={s('text-uppercase', 'pt-3', 'position-relative', 'fw-bolder')}>
                    <div className={s('d-flex', 'justify-content-between')}>
                        <p className={s('mb-0')}>Về chúng tôi</p>
                        <div className={s('wrap_sign')}>
                            <FontAwesomeIcon className={s('menu_plus')} icon={faPlus} />
                            <FontAwesomeIcon className={s('menu_minus')} icon={faMinus} />
                        </div>
                    </div>
                    <ul className={s('list_style', 'ps-4', 'ul_down')}>
                        <li className={s('text-uppercase', 'pt-3')}>Câu chuyện founder</li>
                        <li className={s('text-uppercase', 'pt-3')}>Nền tảng lms</li>
                    </ul>
                </li>
                <li className={s('text-uppercase', 'pt-3', 'fw-bolder')}>Khóa học stem</li>
                <li className={s('text-uppercase', 'pt-3', 'fw-bolder')}>Khóa học</li>
                <li className={s('text-uppercase', 'pt-3', 'fw-bolder')}>mentor</li>
                <li className={s('text-uppercase', 'pt-3', 'fw-bolder')}>blog</li>
            </ul>
        </div>
        <div className={s('input_text')}>
            <input className={s('rounded', 'p-2')} type="text" placeholder="Tìm kiếm khóa học" />
            <FontAwesomeIcon className={s('search_glass')} icon={faMagnifyingGlass} />
        </div>
    </div>
</div> );
}

export default Navigation;