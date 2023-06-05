type ITitle = {
  title: string;
};
const ContentTitle = ({ title }: ITitle) => {
  return <h1 className="text-3xl uppercase font-roboto mb-2">{title}</h1>;
};

export default ContentTitle;
