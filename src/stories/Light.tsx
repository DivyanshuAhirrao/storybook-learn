export type Props = {
  variant?: "green" | "yellow" | "red";
};

const Light = ({ variant = "green" }: Props) => {
  return (
    <div
      style={{
        background: variant,
        borderRadius: "50%",
        width: 50,
        height: 50,
        border:'1px solid black'
      }}
    ></div>
  );
};

export default Light;
