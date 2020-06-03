import React from 'react';
import moment from 'moment';

class Contact extends React.Component {
  render() {
    const { avatar, name, phone, country, admissionDate, company, department } = this.props;

    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar">
          <img src={avatar} alt="Imagem perfil" />
        </span>
        <span className="contact__data">{name}</span>
        <span className="contact__data">{phone}</span>
        <span className="contact__data">{country}</span>
        <span className="contact__data">{moment(admissionDate).format("DD/MM/YYYY")}</span>
        <span className="contact__data">{company}</span>
        <span className="contact__data">{department}</span>
      </article>
    );
  }
}

export default Contact;
