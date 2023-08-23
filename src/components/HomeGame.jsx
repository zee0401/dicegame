// import "../../public/dices.png";
import styled from "styled-components";

const HomeGame = ({ toggle }) => {
  return (
    <Container>
      <box>
        <img src="../../public/dices.png" alt="" />
      </box>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default HomeGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.div`
  color: white;
  padding: 10px 18px;
  background: black;
  border-radius: 5px;
  min-width: 200px;
  border: none;
  text-align: center;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
