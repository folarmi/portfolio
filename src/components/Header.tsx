import { navItems } from "../data";

const Header = () => {
  return (
    // <nav className="flex justify-between items-center py-16 px-32 border-b-[0.1px] border-white">
    //   <div className="flex">
    //     <p className="logo-m">{"<C/>"}</p>
    //     <p className="logo-m text-white">Folacodes</p>
    //   </div>

    //   {navItems.map((item) => (
    //     <p className="media-m" key={item.id}>
    //       {item.name}
    //     </p>
    //   ))}
    // </nav>

    <nav className="flex justify-between items-center px-32">
      <div className="flex justify-between items-center w-full border-b-[0.25px] border-white py-16">
        <div className="flex items-center gap-2">
          <p className="logo-m">{"<Hello World/>"}</p>
          <p className="logo-m text-white">Folacodes</p>
        </div>

        <div className="flex gap-8">
          {navItems.map((item) => (
            <p className="media-m" key={item.id}>
              {/* // <p className="menu-m" key={item.id}> */}
              {item.name}
            </p>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
