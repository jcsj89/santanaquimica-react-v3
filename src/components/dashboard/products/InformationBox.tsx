export const InformationBox = (props: {
  color: string;
  name: string;
  description: string;
  valor: number;
}) => {
  return (
    <div className="border justify-center items-center bg-red-500 text-white p-3">
      <h2>{props.name}</h2>
      <h2>{props.description}</h2>
      <h2>{props.valor}</h2>
    </div>
  );
};
