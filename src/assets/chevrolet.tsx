import { SVGProps } from "~/types/svg";

export function ChevroletIcon({ color = "#000", size = "30px" }: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 192.756 192.756"
      fill={color}
    >
      <g>
        <path d="M129.842 77.594V66.248H62.823v11.346H20.698L2.834 114.589h59.988v11.919h67.019v-11.919h41.461l18.619-36.995h-60.079zm33.707 25.558h-43.514v11.437H73.354v-11.437H20.698l7.031-14.695h45.625V77.594h46.681v10.863h51.268l-7.754 14.695z" />
      </g>
    </svg>
  );
}
