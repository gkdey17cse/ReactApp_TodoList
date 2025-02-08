import React from "react";
function Footer() {
  let footerStyle = {
    position:"absolute",
    top: "100vh", // Changed from "top: 100vh"
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    padding: "10px",
  };

  return (
    <>
      <div className="mx-auto w-full"  style={footerStyle}>Copyright &copy; Todoslist</div>
    </>
  );
}

export default Footer;
