import React from "react";

function Footer() {
  let footerStyle = {
    position: "fixed", 
    left: 0,
    bottom: 0,
    width: "100%", 
    textAlign: "center",
    padding: "10px",
  };

  return (
    <>
      <div style={footerStyle} className="bg-slate-200">
        Copyright &copy; TodosList
      </div>
    </>
  );
}

export default Footer;
