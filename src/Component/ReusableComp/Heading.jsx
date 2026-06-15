function Heading({ title, classNames }) {
    return (
        <h2 className={`text-[#2D5D80] font-helvetica text-[32px] md:text-[40px] font-normal mb-6 ${classNames || ""}`}>
            {title}
        </h2>
    );
}

export default Heading