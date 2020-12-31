import React, { Component } from 'react'
import styled from 'styled-components'

const Section = styled.section`
background-color: #d74234;
min-height: 550px;
padding: 250px 0;
color: #fff;
` 
const Jumbotron = () => {
return (
	<Section className="home-section--1">
		<div className="container">
			<div className="row"> 
				<div className="col col-sm-12 col-md-5">
					<div className="pt-4 mt-4">
						<h1>React For Rails Developers</h1>
						<p>Supercharge your Ruby on Rails App with React.js</p>
					</div>
				</div>
				<div className="col col-sm-12 col-md-7">
					<div className="pt-4 mt-4 text-center">
					<iframe width="560" height="315" src="https://www.youtube.com/embed/5F_JUvPq410" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					</div>
				</div>
			</div>
		</div>
	</Section>
	)
}

export default Jumbotron