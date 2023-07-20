import { useContext } from "react";
import { styled } from "styled-components";
import { Context } from "../../../utils/context";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const Icon = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const CountLabel = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  top: -10%;
  left: 110%;
  transform: translateX(-100%);
  font-size: 12px;
  border-radius: 50%;
  background: var(--tg-theme-text-color);
  color: var(--tg-theme-bg-color);
`;

export default function HeaderCart() {
  const navigate = useNavigate();
  const { getCartCount } = useContext(Context);
  const count = getCartCount();

  const toCart = useCallback(() => {
    navigate("/cart");
  }, []);

  return (
    <Icon onClick={toCart}>
      {count ? <CountLabel>{count}</CountLabel> : ""}
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <g id="SVGRepo_iconCarrier">
          <path
            d="M20.0164 16.2572C19.5294 18.5297 19.2859 19.666 18.4608 20.333C17.6357 21 16.4737 21 14.1495 21H9.85053C7.52639 21 6.36432 21 5.53925 20.333C4.71418 19.666 4.47069 18.5297 3.98372 16.2572L3.55514 14.2572C2.83668 10.9043 2.47745 9.22793 3.378 8.11397C4.27855 7 5.99302 7 9.42196 7H14.5781C18.0071 7 19.7215 7 20.6221 8.11397C21.2929 8.94376 21.2647 10.0856 20.9097 12"
            stroke="var(--tg-theme-text-color)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M16 12H12M9 12H8"
            stroke="var(--tg-theme-text-color)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 15H14"
            stroke="var(--tg-theme-text-color)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 9L15 3"
            stroke="var(--tg-theme-text-color)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 9L9 3"
            stroke="var(--tg-theme-text-color)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </Icon>
  );
}
