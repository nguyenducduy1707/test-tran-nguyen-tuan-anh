import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="h-12 flex justify-between p-2 sticky top-0 bg-white border-b border-black">
      <div className="h-full">
        <Link to="/">
          <img
            className="h-full cursor-pointer"
            src="http://www.vinasa.org.vn/SiteFolders/vinasa-en/ImageLibrary/solid%20logo.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className="flex items-center space-x-2">
        <span>Hello, user</span>
        <img
          className="h-full rounded-full cursor-pointer"
          src="https://scontent.fpnh22-1.fna.fbcdn.net/v/t1.6435-9/179504384_1760075104162255_4923240987204907731_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=3xXCoHD0DykAX8WtB3v&tn=GiGWhD6RGivWULvm&_nc_ht=scontent.fpnh22-1.fna&oh=52f9b258381b213b839e5bd9e88c4c05&oe=60DBE516"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
