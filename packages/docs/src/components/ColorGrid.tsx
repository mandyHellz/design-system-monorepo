import { color } from "@mandyhellz-design-system/tokens";
import { getContrast } from "polished";

export const ColorGrid = () => {
  return Object.entries(color).map(([key, color]) => {
    return (
      <div
        key={key}
        style={{
          backgroundColor: color,
          padding: "2rem",
          boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.35) ",
        }}
      >
        <div
          className="flex justify-between font-monospace"
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            color: getContrast(color, "#FFF") < 3.5 ? "#000" : "#FFF",
          }}
        >
          <strong>-{key}</strong>
          <span>{color}</span>
        </div>
      </div>
    );
  });
};
