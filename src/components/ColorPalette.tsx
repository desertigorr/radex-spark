import { useState } from "react";

type ColorPaletteProps = {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
};

export const colorArray: Record<number, string> = {
  0: "#2EC3C2",
  1: "#34C759",
  2: "#5E5CE6",
  3: "#FF9500",
  4: "#EC407A",
  5: "#FF3B30",
  6: "#007AFF",
  7: "#607D8B",
  8: "#FFEA00",
  9: "#36BAF5",
  10: "#AF52DE",
  11: "#EF2E83",
  12: "#A6A6A6"
};

export const classNames: Record<number, string> = {
  0: "Пора",
  1: "Включение",
  2: "Подрез",
  3: "Прожог",
  4: "Трещина",
  5: "Наплыв",
  6: "Эталон1",
  7: "Эталон2",
  8: "Эталон3",
  9: "Пора-скрытая",
  10: "Утяжина",
  11: "Несплавление",
  12: "Непровар корня"
};

export const ColorPalette = ({ selectedColor, setSelectedColor }: ColorPaletteProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
    setIsOpen(false);
  };

  return (
    <div className="color-change">
      <div className="edit-btn-color"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          borderColor: selectedColor
        }}
      />

      {isOpen && (
        <div className="color-area">
          <div className="editor-btn-text">
            Выберите класс дефекта:
          </div>

          <div className="color-palette">
            {Object.entries(colorArray).map(([key, color]) => (
              <div
                key={key}
                onClick={() => handleColorClick(color)}
                className={`color-box${selectedColor === color ? " selected" : ""}`}
                style={{
                  backgroundColor: color,
                }}
              >
              <span className="tooltip">
                {classNames[Number(key)]}
              </span>
            </div>
          ))}
        </div>
        </div>
      )}
    </div>
  );
};
