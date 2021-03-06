var React = require("react");
var {Link} = require('react-router');

var Examples = React.createClass({
    render: function() {
        return(
            <div>
                <h1 className="text-center">Examples</h1>
                <p>Here are a few example locations to try out:</p>
                <ol>
                    <li>
                        <Link to='/?location=Karachi'>Karachi, PK</Link>
                    </li>
                    <li>
                        <Link to='/?location=Islamabad'>Islamabad, PK</Link>
                    </li>
                </ol>
            </div>
        );
    }
});

module.exports = Examples;