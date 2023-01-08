import { useState, useEffect, useRef } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons";

import SkillTag from "./SkillTag";
import { useOutsideAlerter } from "./custom-hooks/UseOutsideAlerter";
import TagsList from "./TagsList";

const SkillSetForm = () => {
  const supabase = useSupabaseClient();
  const [domainDrpDwn, setDomainDrpDwn] = useState(false);
  const [domain, setDomain] = useState("");
  const [domainArr, setDomainArr] = useState([]);
  const [tagsArr, setTagsArr] = useState([]);
  const [selectedTag, setSelectedTag] = useState({});
  const [editMode, setEditMode] = useState(false);

  const user = useUser();

  const dropdownRef = useRef(null);
  useOutsideAlerter(dropdownRef, setDomainDrpDwn);

  useEffect(() => {
    getDomains();
    if(user){
      getUserData();
    }
  }, [user]);

  async function getDomains() {
    try {
      let { data: domains, error } = await supabase
        .from("domains")
        .select("id,name");
      if (error && status !== 406) {
        throw error;
      }
      setDomainArr([...domains]);
    } catch (error) {
      console.log("Error loading user data!");
      console.log(error);
    }
  }

  async function getUserData () {
    try {
      console.log(user)
      let { data: user_skills, error } = await supabase
        .from('user_skills')
        .select("skills,id")
        .eq('user_id', user.id)
        setTagsArr(user_skills.map((i) => {
          i.skills["id"]= i.id
          return i.skills
        }))
    } catch (error) {
      console.log("Error getting the data!");
      console.log(error);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data, error } = tagsArr.map(async (i) => {
        const id = i.id;
        delete i.id;
        console.log(i,"qwerty")
        const x = await checkIfDataExists(id)
        if(x){
          console.log(i,"wqewwwwww")
          const { data, error } = await supabase
          .from('user_skills')
          .update({ skills: i })
          .eq('id', id)
          return { data, error };
        }else {
          console.log(i,"radddddddddd")
          const { data, error } = await supabase
            .from("user_skills")
            .insert([{ user_id: user.id, skills: i, id: id }]);
          return { data, error };
        }
      });

      if (error) throw error;
      console.log("Record updated!", data);
    } catch (error) {
      console.log("Error updating the data!");
      console.log(error);
    }
  };

  const checkIfDataExists = async (tagID) => {
    try {
      let { data: user_skills, error } = await supabase
      .from('user_skills')
      .select("id")
      .eq('id', tagID);
      
      console.log(user_skills.length > 0 ? user_skills[0].id : false,"maja",error)
      return user_skills.length > 0 ? user_skills[0].id : false
    } catch (error) {
      console.log("Error fetching the data!");
      console.log(error);
      return false
    }
  }

  const handleEditFunc = (tag) => {
    setEditMode(true)
    setSelectedTag(tag)
    setDomain(tag.domain)
  }

  const handleTagsDeletion = async (tag) => {
    try {
      const { data, error } = await supabase
      .from("user_skills")
      .delete()
      .eq('id', tag.id);
      console.log(data,error,tag.id)
      user && getUserData()
      setEditMode(false)
      setSelectedTag({})
      setDomain("")
    } catch (error) {
      console.log("Error deleting the data!");
      console.log(error);
    }
    //setTagsArr(tagsArr.filter((i) => i.skill !== tagName));

  };

  return (
    <div className="container">
      <div className="skillset-section">
        <div className="skillset-section-header">
          <p>Skillset Form</p>
        </div>
        <div className="skillset-section-body">
          <div>
            <label>Add domain</label>
            <div className="skillset-section-body_dropdown" >
              <button onClick={() => setDomainDrpDwn(!domainDrpDwn)}>
                {domain.length > 0 ? domain : "Select"}
                {domainDrpDwn ? <IconChevronUp /> : <IconChevronDown />}
              </button>
              <ul
                className={`skillset-section-body_dropdown_menu ${
                  domainDrpDwn && "open"
                }`}
                style={{ display: !domainDrpDwn && "none" }}
                ref={dropdownRef}
              >
                {domainArr.map((option) => (
                  <li
                    className="skillset-section-body_dropdown_option"
                    key={option.name}
                    onClick={() => {
                      setDomainDrpDwn(false);
                      setDomain(option.name);
                    }}
                  >
                    <a skillset-section-body_dropdown_option>{option.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="skillset-section-body-row">
            <SkillTag
              tagsArr={tagsArr}
              setTagsArr={setTagsArr}
              domain={domain}
              setDomain={setDomain}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
              editMode={editMode} setEditMode={setEditMode}
            />
          </div>
          <div className="skillset-section-body-row">
            <TagsList
              tagsArr={tagsArr}
              handleTagsDeletion={handleTagsDeletion}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
              handleEditFunc={handleEditFunc}
            />
          </div>
          <div className="skillset-section-footer">
            <button type="submit" value="Update" onClick={handleSubmit}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSetForm;
