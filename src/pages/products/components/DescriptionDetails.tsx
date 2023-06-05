export const DescriptionDetails = (props: { description: string }) => {
  const { description } = props;

  return (
    <>
      <span className="text-sm text-gray-500 text-normal font-sans">
        Descricao
      </span>
      <p className="border-b text-xs indent-2 antialiased font-montserrat p-2 h-full">
        {description}
      </p>
    </>
  );
};
