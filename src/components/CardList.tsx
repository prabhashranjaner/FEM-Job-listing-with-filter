import Card from "./Card";
import data from "../../data.json";
import type { Dispatch, SetStateAction } from "react";
import type { companyType } from "../types";

const CardList = ({ searchTags, setSearchTags }: PropsType) => {
  const visibleItems: companyType[] =
    searchTags.length === 0
      ? data
      : data.filter((item) => {
          const newList = [...item.languages, ...item.tools];
          if (searchTags.some((searchTag) => newList.indexOf(searchTag) !== -1))
            return true;
          else return false;
        });

  const handleAddTag = (tag: string) => {
    const index = searchTags.findIndex((item) => item === tag);

    if (index !== -1) return;

    setSearchTags([...searchTags, tag]);
  };
  return (
    <div className="cardlist">
      {visibleItems.map((item) => (
        <Card key={item.id} item={item} handleAddTag={handleAddTag} />
      ))}
    </div>
  );
};

export default CardList;

type PropsType = {
  searchTags: string[];
  setSearchTags: Dispatch<SetStateAction<string[]>>;
};
