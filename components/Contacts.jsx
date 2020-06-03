import React from "react";
import Contact from './Contact';

const API_URL = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts';


class Contacts extends React.Component {
	constructor(props) {
		super(props);
		this.state = { contacts: [] };
	}

	componentDidMount() {
		fetch(API_URL).then(response => response.json())
			.then(obj => this.setState({ contacts: obj }));
	}

	render() {
		const { contacts } = this.state;
		const items = contacts.map(contact => <Contact key={contact.id} {...contact} />);
		return (
			<div className="container" data-testid="contacts">
				<section className="contacts">

					<article className="contact">
						<span className="contact__avatar" />
						<span className="contact__data">Nome</span>
						<span className="contact__data">Telefone</span>
						<span className="contact__data">País</span>
						<span className="contact__data">Admissão</span>
						<span className="contact__data">Empresa</span>
						<span className="contact__data">Departamento</span>
					</article>

					{items}

				</section>
			</div>
		);
	}
}

export default Contacts;
