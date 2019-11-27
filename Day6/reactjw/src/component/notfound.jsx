import React, { Component } from 'react'

class Notfound extends Component {
    state = { }
    render() {
        return (
            <div>
                <div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>404</h1>
				<h2>Page not found</h2>
			</div>
			<a href="http://localhost:3000">Homepage</a>
		</div>
	</div>
            </div>
        )
    }
}

export default Notfound
