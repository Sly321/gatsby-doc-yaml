import React, { Component } from "react"
import PropTypes from "prop-types"

/**
 * General component description.
 */
class HisComponentTwo extends Component {
    render() {
        // ...
    }
}

HisComponentTwo.propTypes = {
    /**
     * Description of prop "foo".
     */
    foo: PropTypes.number.isRequired,
    /**
     * Description of prop "bar" (a custom validation function).
     */
    bar: function(props, propName, componentName) {
        // ...
    },
    baz: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

HisComponentTwo.defaultProps = {
    bar: 21,
}

export default HisComponentTwo
