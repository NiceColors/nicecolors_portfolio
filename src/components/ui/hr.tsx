interface HorizontalLineProp {
  width?: string;
  color?: string;
  margin?: string;
}

const HorizontalLine: React.FC<HorizontalLineProp> = ({
  width = "99%",
  color = "#000000",
  margin = "auto",
}) => {
  return (
    <hr
      style={{
        width: width,
        margin: margin,
        color: color,
        borderColor: color,
        backgroundColor: color,
      }}
    />
  );
};

export default HorizontalLine;
