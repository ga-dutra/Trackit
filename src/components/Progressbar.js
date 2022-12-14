import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";

export default function Progressbar({ progressPercentege }) {
  const percentage = progressPercentege;

  return (
    <ProgressBarContainer>
      <CircularProgressbar
        value={isNaN(progressPercentege) ? 0 : percentage}
        text={`Hoje`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#3e98c7",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent",
        })}
      />
    </ProgressBarContainer>
  );
}
const ProgressBarContainer = styled.div`
  width: 90px;
  padding-bottom: 40px;
  font-weight: 300;
`;
