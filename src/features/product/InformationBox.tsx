export const InformationBox = (props: {
  color: string;
  name: string;
  description: string;
  valor: number | string;
}) => {
  return (
    <div
      className="shadow rounded-lg
    text-center p-2 my-1 bg-gray-100"
    >
      <h3 className="uppercase text-gray-600">{props.name}</h3>
      <h3 className="text-yellow-800">{props.description}</h3>
      <h3 className=" text-zinc-700">{props.valor}</h3>
    </div>
  );
};
