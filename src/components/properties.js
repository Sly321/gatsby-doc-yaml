import React from "react"
import PropTypes from "prop-types"

export default function Properties({ componentProperties }) {
    return (
        <>
            <h3>Properties</h3>
            <hr />
            {/* <pre>{JSON.stringify(componentProperties, null, 2)}</pre> */}
        </>
    )
}

Properties.propTypes = {
    componentProperties: PropTypes.object,
}
