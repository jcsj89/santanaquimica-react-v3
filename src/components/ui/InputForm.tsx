export const InputForm = (props: {
  type: string;
  name: string;
  value: string;
  onChange: (e:any) => void;
}) => {
  const { type, name, value, onChange } = props;
  return (
    <input
      type={type}
      name={name}
      value={value}
      className="font-robotomono border mx-2 text-sm"
      onChange={onChange}
    />
  );
};
