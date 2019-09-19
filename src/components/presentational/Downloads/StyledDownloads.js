import styled from "styled-components";

export const StyledDownloads = styled.div`
  margin-bottom: 72px;

  .downloads__item-wrapper {
    position: relative;
    border-radius: 10px;
    background-color: #fff;
    margin-bottom: 16px;
    transition: 0.2s;

    &:last-child {
      margin-bottom: 0px;
    }

    &:hover {
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    }
  }

  .downloads__item {
    padding: 10px 100px 10px 32px;
    height: 82px;
    display: flex;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    color: inherit;
  }

  .downloads__icon {
    position: absolute;
    top: 0;
    right: 32px;
    bottom: 0px;
    width: 48px;
    height: 45px;
    margin: auto;
    pointer-events: none;
    transition: filter 0.2s;
  }

  .downloads__item-wrapper:hover .downloads__icon {
    filter: drop-shadow(0px 0px 14px rgba(29, 233, 182, 1));
  }
`;
