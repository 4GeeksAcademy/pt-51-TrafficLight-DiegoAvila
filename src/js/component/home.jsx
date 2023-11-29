import React, { useState } from 'react';
import Semaforo from "./semaforo";

//create your first component
const Home = () => {
		
	return (
		<div className="text-center p-3 mt-3 bg-">
			<div className="rojo">
				<Semaforo color={"bg-danger bg-opacity-50"}/>
			</div>
			<div className="naranja">
				<Semaforo color={"bg-warning bg-opacity-50"}/>
			</div>
			<div className="verde">
				<Semaforo color={"bg-success bg-opacity-50"}/>	
			</div>
		</div>
	);
};

export default Home;
