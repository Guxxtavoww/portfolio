import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(42px + 1rem);
  padding: 0 2rem;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  .lista {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    li {
      flex-direction: column;
      cursor: pointer;

      .link-nav {
        position: relative;
        display: inline-block;
        color: ${(props) => props.theme.gray_color};
        flex-direction: column;
        text-transform: uppercase;
        font-weight: 500;
        transition: all 0.3s ease-in-out;
        user-select: none;
        &:hover {
          color: ${(props) => props.theme.secondary_color};
        }
      }
      & > div {
        width: 5px;
        height: 5px;
        background: transparent;
        border-radius: 50%;
        transition: 0.3s;
      }
      &:hover {
        gap: 3px;
        div {
          background: ${(props) => props.theme.secondary_color};
        }
      }
    }
  }
  .toggle {
    display: none;
    place-items: center;
    visibility: hidden;
    cursor: pointer;
    background: ${(props) => props.theme.secondary_color};
    width: 35px;
    height: 35px;
    border-radius: 50%;
    font-size: 1.4em;
    svg {
      color: ${(props) => props.theme.white_color};
    }
  }
  @media screen and (max-width: 991px) {
    & {
      justify-content: flex-end;
    }
    .toggle {
      display: grid;
      visibility: visible;
    }
    .lista {
      padding: 1rem 2rem;
      visibility: hidden;
      position: fixed;
      top: calc(42px + 1rem);
      right: -100%;
      min-height: calc(100vh - (42px + 1rem));
      width: 100%;
      z-index: 60;
      background: url("../../assets/bgWhite.png");
      background-color: ${(props) => props.theme.white_color};
      background-size: cover;
      background-repeat: repeat;
      transition: 0.3s ease-out;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      &.active {
        right: 0;
        visibility: visible;
      }
      li {
        & > div {
          display: none;
        }
        .link-nav {
          font-size: clamp(1.5em, 4vmin, 2em);
          font-weight: 400;
          &::after {
            content: "";
            position: absolute;
            bottom: -5px;
            left: 50%;
            transform: translateX(-50%);
            height: 2px;
            width: 0;
            background: ${(props) => props.theme.secondary_color};
            transition: 0.3s ease-out;
          }
          &:hover::after {
            width: 100%;
          }
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    .navbar {
      padding: 0 1rem;
    }
  }
`;
