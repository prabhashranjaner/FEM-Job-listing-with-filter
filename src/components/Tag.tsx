import type { Dispatch, SetStateAction } from "react";

const Tag = ({ item, setSearchTags, searchTags }: PropsType) => {
  const handleRemoveTag = () => {
    const newList = searchTags.filter((tag) => item !== tag);
    setSearchTags(newList);
  };
  return (
    <div className="tag">
      <span>{item}</span>
      <button className="tag__btn" onClick={handleRemoveTag}>
        <img alt="cancel icon" src="/images/icon-remove.svg" />
      </button>
    </div>
  );
};

export default Tag;

type PropsType = {
  item: string;
  setSearchTags: Dispatch<SetStateAction<string[]>>;
  searchTags: string[];
};
