import type { Dispatch, SetStateAction } from "react";
import Tag from "./Tag";

const FilterBox = ({ searchTags, setSearchTags }: PropsType) => {
  const handleClearTags = () => {
    setSearchTags([]);
  };

  return (
    <div className="filterbox">
      <div className="tag__list">
        {searchTags.map((item) => (
          <Tag
            key={item}
            item={item}
            searchTags={searchTags}
            setSearchTags={setSearchTags}
          />
        ))}
      </div>
      <button className="filterbox__btn" onClick={handleClearTags}>
        Clear
      </button>
    </div>
  );
};

export default FilterBox;

type PropsType = {
  searchTags: string[];
  setSearchTags: Dispatch<SetStateAction<string[]>>;
};
