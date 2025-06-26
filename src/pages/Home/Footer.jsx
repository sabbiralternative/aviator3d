const Footer = () => {
  return (
    <div className="flex items-center justify-center w-full gap-2 m-4 mx-auto font-medium text-slate-300">
      Powered by
      <img
        alt="Aura Logo"
        loading="lazy"
        width={70}
        height={50}
        decoding="async"
        data-nimg={1}
        className
        src="https://aura-lobby-banners.s3.ap-south-1.amazonaws.com/aura.svg"
        style={{ color: "transparent" }}
      />
    </div>
  );
};

export default Footer;
