




import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // ต้อง Import Bootstrap CSS ที่ใดที่หนึ่งในโปรเจกต์
import 'bootstrap/dist/js/bootstrap.bundle.min'

const Nav = ({
    logo,
    home_text,
    text_nav_1,
    text_nav_2,
    text_nav_3,
}) => {
    return (
        < >
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{logo}</a>

                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">{home_text}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{text_nav_1}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{text_nav_2}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">{text_nav_3}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}



const Nav2 = (props) => {
    const { t1, t2, t3 } = props;
    return (
        < >
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                 t1 = {t1} <br />
                 t2 = {t2} <br />
                 t3 = {t3} <br />
            </nav>
        </>
    );
}




export { Nav, Nav2 }; // Export Nav2 if needed
