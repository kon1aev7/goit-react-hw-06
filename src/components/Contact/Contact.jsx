import { BiSolidUserRectangle } from "react-icons/bi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelate = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={s.item}>
      <div>
        <p className={s.text}>
          <BiSolidUserRectangle /> {name}
        </p>
        <p className={s.text}>
          <FaPhoneSquareAlt /> {number}
        </p>
      </div>
      <button className={s.button} onClick={handleDelate}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
