import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
    <header
        style={{
            background: `rebeccapurple`,
            position: "fixed",
            zIndex: 2,
            width: "100%",
            top: 0,
        }}
    >
        <h1 className="p-3" style={{ margin: 0 }}>
            <Link
                to="/"
                style={{
                    color: `white`,
                    textDecoration: `none`,
                }}
            >
                {siteTitle}
            </Link>
        </h1>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
