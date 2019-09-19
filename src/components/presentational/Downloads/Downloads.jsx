import React from "react";
import PropTypes from "prop-types";
import Container from "../../../layouts/Container/Container";
import SpriteSVGIcon from "../../common/SpriteSVGIcon/SpriteSVGIcon";
import { StyledDownloads } from "./StyledDownloads";

const Downloads = ({ downloads }) => (
  <StyledDownloads>
    <Container align="right">
      <ul className={"downloads__list"}>
        {downloads.map(({ id, sourceLocation, sourceName }) => (
          <li key={id} className={"downloads__item-wrapper"}>
            <a
              href={sourceLocation}
              download={sourceName}
              className={"downloads__item"}
            >
              {sourceName}
            </a>
            <SpriteSVGIcon id="download" className={"downloads__icon"} />
          </li>
        ))}
      </ul>
    </Container>
  </StyledDownloads>
);

Downloads.proptTypes = {
  downloads: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      sourceLocation: PropTypes.string.isRequired,
      sourceName: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Downloads;
