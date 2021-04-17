import React from "react";

export default function Navbar() {
  return (
    <div className="h-12" style={styles.header}>
      <div className="justify-items-center h-8 bg-yellow-100 my-2">
        <h1>this is main div</h1>
      </div>
    </div>
  );
}

const styles = {
  header: {
    // backgroundColor: "#F8F9FA",
    backgroundColor: "red",
  },
};
