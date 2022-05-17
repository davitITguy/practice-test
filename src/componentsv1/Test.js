import React from "react";

export default function Test() {
  const name = "davit";
  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }

  const user = {
    firstName: "vaja",
    lastName: "dzneladze",
  };
  //   function getGreeting(user) {
  //     if (user) {
  //       return <h1>Hello shisho{formatName(user)}</h1>;
  //     }
  //     return <h1>I'm davit</h1>;
  //   }
  //   getGreeting(user);
  //   const element = (
  //     <div>
  //       <h1>Hello</h1>
  //       <h2>good to see you</h2>
  //     </div>
  //   );
  //   //   const title = response.potentiallyMaliciousInput;
  //   // This is safe:
  //   //   const elementt = <h1>{title}</h1>;

  //   const elementtt = <h1 className="greeting">Hello, world!</h1>;
  //   const elementttt = React.createElement("h1", { className: "greeting" }, "Hello, world!");
  //   /**
  //    * create element amowmebs sanam sheqmnis objs
  //    */
  //   const elementtttt = {
  //     type: "h1",
  //     props: {
  //       className: "greeting",
  //       children: "Hello, world!",
  //     },
  //   };
  //   function Welcome(props) {
  //     return <h1>Hello, {props.name}</h1>;
  //   }
  //   function Welcome(props) {
  //     return <h1>Hello, {props.name}</h1>;
  //   }

  //   const root = ReactDOM.createRoot(document.getElementById("root"));
  //   const elemennt = <Welcome name="Sara" />;
  //   root.render(elemennt);
  //   Welcome("davit");
  return (
    <div>
      <div>spanderashvili, {name}</div>
      <div>Hello, {formatName(user)}</div>
      <button>Text</button>
    </div>
  );
}
