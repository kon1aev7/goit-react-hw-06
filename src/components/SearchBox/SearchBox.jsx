import { useId } from "react";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);
  const handleFilterChange = (filter) => dispatch(setNameFilter(filter));
  const id = useId();

  return (
    <div className={s.searchBox}>
      <div className={s.wrapper}>
        <label className={s.label} htmlFor={id}>
          Find contacts by name
        </label>
        <input
          className={s.input}
          type="text"
          id={id}
          value={filter}
          onChange={(e) => handleFilterChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBox;
