import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const getVisibleContacts = (contactsSt, filtersName) => {
  return contactsSt.filter((contact) =>
    contact.name.toLowerCase().includes(filtersName.toLowerCase())
  );
};

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ul className={s.list}>
      {visibleContacts.length > 0 ? (
        visibleContacts.map((contact) => (
          <li key={contact.id} className={s.item}>
            <Contact contact={contact} />
          </li>
        ))
      ) : (
        <p className="error">
          Sorry, there are no contacts matching your search.
        </p>
      )}
    </ul>
  );
};

export default ContactList;
