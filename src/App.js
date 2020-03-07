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
  const [tags, setTags] = useState([]);
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
    let temp_ops = { ...operators };
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
        if (temp_ops[key]) {
          found_combos.forEach(combo => {
            if (!temp_ops[key].combos.includes(combo))
              temp_ops[key].combos.push(combo);
          });
        } else
          temp_ops[key] = {
            rarity: Operators[key].rarity,
            combos: found_combos
          };
      } else {
        if (temp_ops[key]) {
          not_found.forEach(combo => {
            if (temp_ops[key].combos.includes(combo))
              temp_ops[key].combos.pop(combo);
          });
          if (temp_ops[key].combos.length < 1) delete temp_ops[key];
        }
      }
    });
    setOperators(temp_ops);
  };

  // useEffect(() => {
  //   handleClick(null);
  // }, []);

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
        <Tag
          onClick={() => {
            setTags([]);
            setOperators({});
          }}
        >
          CLEAR
        </Tag>
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
        {Object.keys(operators).map(operator => {
          if (stars[operators[operator].rarity])
            return (
              <ResultCard>
                {console.log(stars[operators[operator].rarity])}
                <div>
                  <OpImage
                    src={process.env.PUBLIC_URL + `/chara/${operator}.png`}
                  />

                  <span>{operator}</span>
                </div>

                {operators[operator].combos.map(combo => (
                  <li>{combo.join(" - ")}</li>
                ))}
              </ResultCard>
            );
          return null;
        })}
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
