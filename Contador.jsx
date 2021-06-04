import './Contador.css'

import React, { Component } from 'react'

import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

class Contador extends Component{
	state = {
		numero: this.props.numeroInicial || 0,
		passo: this.props.passo || 5,
	}

	// Em um componente de classe é necessário utilizar uma arrow function para
	// vincular a função chamada no click do component a instância atual

	inc = () => {
		this.setState({
			numero: this.state.numero + this.state.passo
		})
	}

	dec = () => {
		this.setState({
			numero: this.state.numero - this.state.passo
		})
	}

	setPasso = (novoPasso) => {
		this.setState({
			passo: novoPasso,
		})
	}

	render(){
		return(
			<div className="Contador">
				<Display numero={this.state.numero}/>
				<PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
				<Botoes setInc={this.inc} setDec={this.dec} />
			</div>
		)
	}
}
export default Contador