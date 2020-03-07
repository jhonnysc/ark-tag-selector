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
  const [stars, setStars] = useState({ four: true, five: true });
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
        <Tag onClick={() => setTags([])}>CLEAR</Tag>
        <Tag
          selected={stars.five}
          onClick={() =>
            setStars(star => {
              return { ...star, five: !stars.five };
            })
          }
        >
          5*
        </Tag>
        <Tag
          selected={stars.four}
          onClick={() =>
            setStars(star => {
              return { ...star, four: !stars.four };
            })
          }
        >
          4*
        </Tag>
      </TagsContainer>
      <TagResult>
        {Object.keys(operators).map(operator => (
          <ResultCard>
            <div>
              <OpImage
                src={process.env.PUBLIC_URL + `/chara/${operator}.png`}
              />

              <span>{operator}</span>
            </div>

            {operators[operator].map(combo => (
              <li>{combo.join(" - ")}</li>
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
