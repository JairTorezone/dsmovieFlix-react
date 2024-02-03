import "./styles.css";

type Props = {
  title: string;
};

const Button = ({ title }: Props) => {
  return <button>{title} </button>;
};

export default Button;
