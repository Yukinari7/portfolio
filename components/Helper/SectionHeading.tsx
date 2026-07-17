
type Props = {
    heading: string;
};

const SectionHeading = ({heading}:Props) => {
  return (   
        <div className="pb-10">
            <h1 className="lg:text-3xl text-xl font-semibold" style={{fontFamily:"space Grotesk"}}>{heading}</h1>
        </div>
  )
}

export default SectionHeading