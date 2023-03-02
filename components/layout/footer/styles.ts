import styled from "styled-components";
import { highlight } from "styles/globals";

export const DesktopWrap = styled.div<{ dark: boolean }>`
  position: relative;
  width: 100%;
  height: 30.5rem;
  border-top: 0.1rem solid
    ${(props) =>
      props.dark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
  background-color: ${(props) =>
    props.dark ? "rgba(42, 42, 42, 0.5)" : "rgba(200, 200, 200, 0.15)"};
  margin-top: 8rem;
  .wrap {
    width: 116rem;
    margin: 0 auto;
  }
  .sub-wrap-1 {
    padding: 6rem 0 4rem 0;
    border-bottom: 0.1rem solid
      ${(props) =>
        props.dark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)"};
    margin-bottom: 1rem;
    .brand-wrap {
      margin-top: 1.6rem;
      .img-box.brand {
        max-width: 20.9rem;
      }
      .nft {
        width: 9rem;
        height: 3.9rem;
        padding: 0.6rem 1rem;
        margin-left: 0.9rem;
        color: ${highlight};
        border: 0.3rem solid ${highlight};
        border-radius: 0.9rem;
      }
    }
    .link-wrap {
      .links {
        display: inline-block;
        margin-right: 10rem;
        vertical-align: top;
        &:last-child {
          margin-right: 0;
        }
        label {
          display: block;
          font-family: Lexend;
          font-weight: 800;
          font-size: 1.6rem;
          line-height: 2rem;
          color: ${(props) => (props.dark ? "#2ad2d6" : "#01ABB2")};
          margin-bottom: 1.2rem;
          white-space: nowrap;
        }
        a {
          display: block;
          margin-bottom: 1rem;
          font-family: "IBM Plex Sans";
          font-weight: 500;
          font-size: 1.4rem;
          line-height: 1.8rem;
          color: ${(props) => (props.dark ? "#e4e4e4" : "#848484")};
          white-space: nowrap;
          &.disabled {
            pointer-events: none;
          }
        }
      }
    }
  }
  .sub-wrap-2 {
    font-family: "IBM Plex Sans";
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: ${(props) => (props.dark ? "#e4e4e4" : "#848484")};
    .contact span {
      font-weight: 400;
      text-decoration-line: underline;
    }
    .divider {
      width: 0.1rem;
      height: 1.7rem;
      margin: 0 1.2rem;
      background: ${(props) => (props.dark ? "#fff" : "#5a5a5a")};
    }
  }
`;
