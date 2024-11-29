import styled from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 1.5rem;
  gap: 2rem;
  margin-top: -5rem;

  .summary-total-positive {
    background-color: ${(props) => props.theme["green-700"]};
  }

  .summary-total-negative {
    background-color: ${(props) => props.theme["red-700"]};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SUMMARY_COLORS = {
  green: "green-300",
  greenDark: "green-700",
  red: "red-300",
  redDark: "red-700",
  white: "white",
  default: "gray-600",
} as const

interface SummaryIconProps {
  $icon: keyof typeof SUMMARY_COLORS
  $balance?: keyof typeof SUMMARY_COLORS
}

export const SummaryCard = styled.div<SummaryIconProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background-color: ${(props) => props.theme[SUMMARY_COLORS[props.$balance || "default"]]};
  padding: 1.5rem 2rem;
  border-radius: 6px;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme["gray-300"]};

    > svg {
      color: ${(props) => props.theme[SUMMARY_COLORS[props.$icon]]};
    }

  }
  > strong {
    /* strong é inline-block por padrão, dessa forma não conseguimos aplicar margin vertical em tags inline */
    display: block;
    font-size: 2rem;
  }
`