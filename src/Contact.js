import React, { useState } from "react";

function Contact() {
  const [data, setData] = useState({ name: "", email: "", mobile: "" });
  function handleInputs(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  }
  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("value", JSON.stringify(data));
    setData({ name: "", email: "", mobile: "" });
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Enter Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={(e) => {
              handleInputs(e);
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Enter Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={(e) => {
              handleInputs(e);
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="mobile">Enter Mobile</label>
          <br />
          <input
            type="tel"
            name="mobile"
            value={data.mobile}
            onChange={(e) => {
              handleInputs(e);
            }}
          />
        </div>
        <input type="submit" />
      </form>
    </>
  );
}

export default Contact;
