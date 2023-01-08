import Image from "next/image";
import React, { Fragment } from "react";
import level_1 from "../public/level_1.svg";
import level_2 from "../public/level_2.svg";
import level_3 from "../public/level_3.svg";
import { IconX } from "@tabler/icons";

const TagsList = ({ tagsArr, handleTagsDeletion, selectedTag, setSelectedTag, handleEditFunc }) => {
  const returnImg = (tag) => {
    const { skill, level } = tag;
    if (level == "level_1")
      return (
        <div className="skill-tags" >
          <div className="skill-tags_name-level" onClick={() => handleEditFunc(tag)}>
          {skill}
          <Image src={level_1} alt={`${level} icon`} width={20} height={20} />
          </div>
          <a
            className="skill-tags_remove"
            onClick={() => handleTagsDeletion(tag)}
          >
            <IconX />
          </a>
        </div>
      );
    if (level == "level_2")
      return (
        <div className="skill-tags">
          <div className="skill-tags_name-level" onClick={() => handleEditFunc(tag)}>
          {skill}
          <Image src={level_2} alt={`${level} icon`} width={20} height={20} />
          </div>
          <a
            className="skill-tags_remove"
            onClick={() => handleTagsDeletion(tag)}
          >
            <IconX />
          </a>
        </div>
      );
    return (
      <div className="skill-tags">
        <div className="skill-tags_name-level" onClick={() => handleEditFunc(tag)}>
        {skill}
        <Image src={level_3} alt={`${level} icon`} width={20} height={20} />
        </div>
        <a
          className="skill-tags_remove"
          onClick={() => handleTagsDeletion(tag)}
        >
          <IconX />
        </a>
      </div>
    );
  };
  return (
    <div className="skillset-section-body-row_skills_list">
      {tagsArr.map((tag) => <Fragment key={tag.id}>{returnImg(tag)}</Fragment>)}
    </div>
  );
};

export default TagsList;
