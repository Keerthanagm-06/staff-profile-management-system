import React from 'react';

const AuthLayout = (props) => {
    return (
        <div id="db-wrapper">
            {/* <Container className="d-flex flex-column"> */}
            {props.children}
            {/* </Container> */}
        </div>
    );
};
export default AuthLayout;