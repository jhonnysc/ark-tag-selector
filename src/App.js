import React, { useState, useEffect } from "react";
import {
  Container,
  TagsContainer,
  Tag,
  OpImage,
  TagResult,
  ResultCard
} from "./styles";
import Operators from "./assets/operators";
import "./app.css";

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
  const [tags, setTags] = useState(allTags);
  const [operators, setOperators] = useState({});

  const handleClick = tagName => {
    let newtags = [];
    if (tags.includes(tagName)) {
      newtags = tags.filter(tag => tag !== tagName);
      setTags(newtags);
    } else {
      newtags = [...tags, tagName];
      setTags(newtags);
    }
    let x = { ...operators };
    Object.keys(Operators).forEach(key => {
      let found_combos = [];
      let not_found = [];
      Operators[key].combos.forEach(combo => {
        let found = true;
        combo.forEach(tag => {
          if (!newtags.includes(tag)) found = false;
        });
        if (found) found_combos.push(combo);
        else not_found.push(combo);
      });
      if (found_combos.length > 0) {
        if (x[key]) {
          found_combos.forEach(combo => {
            if (!x[key].includes(combo)) x[key].push(combo);
          });
        } else x[key] = found_combos;
      } else {
        if (x[key]) {
          not_found.forEach(combo => {
            if (x[key].includes(combo)) x[key].pop(combo);
          });
          if (x[key].length < 1) delete x[key];
        }
      }
    });
    setOperators(x);
  };

  useEffect(() => {
    console.log(operators);
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
      <TagResult>
        {Object.keys(operators).map(operator => (
          <ResultCard>
            <span>{operator}</span>
            {operators[operator].map(combo => (
              <div>{combo.join(" - ")}</div>
            ))}
          </ResultCard>
        ))}
      </TagResult>
    </Container>
  );
}

// {
//   operators.map(ops => (
//     <div style={{ display: "flex", flexDirection: "column" }} key={ops}>
//       {/* <OpImage src={cache[`./${ops.toLowerCase()}.jpg`]} /> */}
//       <span style={{ fontWeight: "bold" }}>{ops}</span>
//       <span>{Operators[ops]}</span>
//     </div>
//   ));
// }
export default App;
