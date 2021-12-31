import "../css/ColorOptions.css";

const ColorOptions = ({
  colors,
  selectedColor,
  setSelectedColor,
  colorRef,
}) => {
  const onColorSelect = (event) => {
    if (!event.target.value) return;
    const circle = event.target.nextElementSibling;
    setSelectedColor(event.target.value);
    const allColors = document.querySelectorAll(".color--option");
    allColors.forEach((color) => {
      color.classList.remove("color--option--selected");
    });
    circle.classList.add("color--option--selected");
  };

  const renderedColors = colors.map((color) => {
    return (
      <label key={color}>
        <input
          className="color--input"
          type="radio"
          value={color}
          name="color"
        />
        <div className={`color--option color--options--${color}`}></div>
      </label>
    );
  });
  return (
    <div className="color--options" onClick={onColorSelect} ref={colorRef}>
      {renderedColors}
    </div>
  );
};
export default ColorOptions;
