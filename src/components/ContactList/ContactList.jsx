import css from './ContactList.module.css'
import PropTypes from 'prop-types';


export const ContactList = ({ contacts, handleDelete }) => (
 
    <ul>
      {contacts.map((contact,id) => (
        <li key={id}>{contact.name} {contact.number}
        <button className = {css.button} type="button" onClick={()=> handleDelete(contact.id)}> Delete </button></li>
      ))}
    </ul>

);


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
        })
  )
  // contacts: propTypes.arrayOf(
  //   propTypes.exact({
  //     id: propTypes.string.isRequired,
  //     name: propTypes.string.isRequired,
  //     number: propTypes.string.isRequired,
  //   })
  // ),
  // handleDelete: propTypes.func.isRequired,
};