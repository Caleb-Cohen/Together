function HeaderButton({ Icon, tooltipText, ...rest }) {
  return (
    <button
      className="relative p-3 bg-[#F5E7DE] border-2 border-black rounded-lg group font-inconsolata font-bold"
      {...rest}
    >
      <Icon className="w-8 h-8 text-[#C57756]" />
      <span className="absolute -bottom-full left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in bg-[#F5CEB5BF] p-2 border border-black whitespace-nowrap rounded-md pointer-events-none">
        {tooltipText}
      </span>
    </button>
  );
}
export default HeaderButton;
