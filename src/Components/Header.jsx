import Header_image from "../assets/header_img.png";
const Header = () => {
  return (
    <div
      className="mt-2 mb-2 h-[34vw]    m-auto bg-no-repeat  bg-contain   "
      style={{ backgroundImage: `url(${Header_image})` }}
    >
      <div className=" flex flex-col items-start gap-[1.5vw]  w-1/2  headerItems p-20  animate-fadeIn">
        <h1 className="text-lg md:text-8xl    text-white   ">
          Order Your favourite food here
        </h1>
        <p className="text-white   ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, 
          atque fuga. Ut ipsa neque quidem, inventore recusandae reprehenderit
          eos debitis, incidunt modi temporibus nemo voluptate sapiente, sed
          blanditiis rem suscipit.
        </p>
        <button className="bg-white p-2 rounded-3xl border-none">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
