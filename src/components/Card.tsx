import type { companyType } from "../types";

const Card = ({ item, handleAddTag }: PropsType) => {
  const tagArray = [...item.languages, ...item.tools];
  return (
    <div className="card">
      <img src="/images/faceit.svg" alt="logo" className="card__img" />
      {/* Center */}
      <div className="center">
        <div className="center__top">
          <span className="company__name">{item.company}</span>
          {item.new && <span className="new">New</span>}
          {item.featured && <span className="featured">Featured</span>}
        </div>

        <p className="position">{item.position}</p>
        <div className="center__bottom">
          <span>{item.postedAt}</span>
          <span>{item.contract}</span>
          <span>{item.location}</span>
        </div>
      </div>
      {/*  */}
      {tagArray.length > 0 && (
        <div className="chip__list">
          {tagArray.map((tag, i) => (
            <span className="chip" key={i} onClick={() => handleAddTag(tag)}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;

type PropsType = { item: companyType; handleAddTag: (item: string) => void };
