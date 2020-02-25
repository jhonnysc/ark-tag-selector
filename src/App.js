import React, { useState, useEffect } from "react";
import { Container, TagsContainer, Tag, OpImage } from "./styles";
import Operators from "./assets/operators";

const cache = {};
function importAll(r) {
  r.keys().forEach(key => {
    cache[key] = r(key);
  });
}

importAll(require.context("./assets/icons", true, /\.jpg$/));

const allTags = [
  "Starter",
  "Senior Operator",
  "Top Operator",
  "Melee",
  "Ranged",
  "Guard",
  "Medic",
  "Vanguard",
  "Caster",
  "Sniper",
  "Defender",
  "Supporter",
  "Specialist",
  "Healing",
  "Support",
  "DPS",
  "AoE",
  "Slow",
  "Survival",
  "Defense",
  "Debuff",
  "Shift",
  "Crowd Control",
  "Nuker",
  "Summon",
  "Fast-Redeploy",
  "DP-Recovery",
  "Robot"
].sort();

function App() {
  const [tags, setTags] = useState([]);
  const [operators, setOperators] = useState([]);

  const handleClick = tagName => {
    let newtags = [];
    if (tags.includes(tagName)) {
      newtags = tags.filter(tag => tag !== tagName);
      setTags(newtags);
    } else {
      newtags = [...tags, tagName];
      setTags(newtags);
    }
    Object.keys(Operators).forEach(key => {
      let found = true;
      Operators[key].forEach(tag => {
        if (!newtags.includes(tag)) found = false;
      });

      if (found) {
        if (!operators.includes(key)) setOperators(ops => [...ops, key]);
      } else setOperators(ops => ops.filter(op => op !== key));
    });
  };

  useEffect(() => {
    console.log(tags, operators);
    return () => {};
  }, [tags, operators]);

  return (
    <Container>
      <TagsContainer>
        {allTags.map(tag => (
          <Tag
            key={tag}
            selected={tags.includes(tag)}
            onClick={() => handleClick(tag)}
          >
            {tag}
          </Tag>
        ))}
      </TagsContainer>
      {operators.map(ops => (
        <div key={ops}>
          <OpImage src={cache[`./${ops.toLowerCase()}.jpg`]} />
          <span>{Operators[ops].join(", ")}</span>
        </div>
      ))}
    </Container>
  );
}

export default App;
