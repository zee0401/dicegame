import styled from "styled-components";

const RollDice = ({ currentDice, rollDice }) => {
  console.log(currentDice);
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/dice/dice_${currentDice}.png`} _ alt="" />
      </div>
      <p>Click on the dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
