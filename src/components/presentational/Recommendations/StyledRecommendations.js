import styled from "styled-components";

export const StyledRecommendations = styled.div`
  overflow: hidden;
  text-align: left;

  .recommendations__headline {
    margin-bottom: 16px;
  }
  .recommendations__intro {
    margin-bottom: 40px;
  }
  .recommendations__list {
    margin: -24px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
  }
  .recommendations__item {
    width: 33.3333%;
    padding: 24px;
  }
  .recommendations__icon {
    display: block;
    width: 48px;
    height: 48px;
    margin: 0 auto 16px;
    border-radius: 50%;
    background-color: #bdf3e6;
  }
  .recommendations__text {
    color: #828282;
  }
`;
