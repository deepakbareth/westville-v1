function Paragraph({ text, color = "gray-900", size = "text-[15px]" }) {
    return (
        <p className={`${size} text-${color} font-normal font-helvetica leading-relaxed  `}>
            {text}
        </p>
    );
}

export default Paragraph