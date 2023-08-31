export const Link = ({link, label}) => {
    return (
        <div className="bg-[#ffcada] hover:scale-105 transition-all w-[80%] flex justify-center border-2 border-white text-white rounded-3xl py-4">
            <a href={link} target="_blank">{label}</a>
        </div>
    );
}