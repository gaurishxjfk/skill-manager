import React, { useEffect, useState } from "react";
import Image from "next/image";
import level_1 from "../public/level_1.svg";
import level_2 from "../public/level_2.svg";
import level_3 from "../public/level_3.svg";

const suggestionArr = [
  [
    "level_1",
    <>
      {" "}
      <p>Beginner</p>
      <Image src={level_1} alt="Beginner icon" width={20} height={20} />
    </>,
  ],
  [
    "level_2",
    <>
      <p>Intermediate</p>
      <Image src={level_2} alt="Intermediate icon" width={20} height={20} />
    </>,
  ],
  [
    "level_3",
    <>
      <p>Expert</p>
      <Image src={level_3} alt="Expert icon" width={20} height={20} />
    </>,
  ],
];

const SkillTag = ({
  tagsArr,
  setTagsArr,
  domain,
  selectedTag,
  setSelectedTag,
  editMode,
  setEditMode,
  setDomain,
}) => {
  const [inputTag, setInputTag] = useState("");
  const [levels, setLevel] = useState("");
  const [submitTrigger, setSubmitTrigger] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    if (editMode && selectedTag) {
      setInputTag(selectedTag.skill);
      setLevel(selectedTag.level);
    }else{
      setInputTag("")
      setLevel("")
    }
  }, [editMode, selectedTag]);

  const handleInputChange = (e) => {
    setErr("");
    setInputTag(e.target.value);
  };

  const handleKeyPress = (key) => {
    if ((key === "Enter" || key === ",") && inputTag.length > 0) {
      setSubmitTrigger(true);
      if (levels.length === 0) return setErr("Select level for the skill");
      if (domain.length === 0) return setErr("Select Domain for the skill");
      console.log(tagsArr, "dd", inputTag, levels, selectedTag.id);
      setTagsArr(
        tagsArr.map((i) =>
          i.id === selectedTag.id ? { ...i, skill: inputTag, level: levels } : i
        )
      );
      setSelectedTag("");
      setEditMode(false);
      setInputTag("");
      setLevel("");
      setSubmitTrigger(false);
      setDomain("")
      setErr("");
    }
  };

  const handleLevelChange = (i) => {
    setLevel(i);
    if (i.length > 0 && inputTag.length > 0 && domain.length > 0) {
      const tempId = Date.now();
      const tagObj = { skill: inputTag, level: i, domain: domain, id: tempId };
      setTagsArr([...tagsArr, tagObj]);
      setSubmitTrigger(false);
      setLevel("");
      setInputTag("");
      setErr("");
      setDomain("")
    }
  };

  return (
    <div className="skillset-section-body-row_skills">
      <label>Skills</label>
      <input
        value={inputTag}
        className="skillset-section-body-row_skills_input"
        onChange={handleInputChange}
        onKeyUp={(e) => handleKeyPress(e.key)}
      />
      <div
        className={`skillset-section-body-row_skills_levelsSuggestion ${
          (!submitTrigger || !editMode) && "hiddenc"
        }`}
      >
        {suggestionArr.map((i) => (
          <a
            key={i[0]}
            className={`row_skills_levelsSuggestion-item ${
              levels == i[0] && "suggestion-item-active"
            }`}
            onClick={() => handleLevelChange(i[0])}
          >
            {i[1]}
          </a>
        ))}
      </div>
      <p className={`error_msg ${err.length == 0 && "hidden error_msg"}`}>
        {err}
      </p>
    </div>
  );
};

export default SkillTag;
