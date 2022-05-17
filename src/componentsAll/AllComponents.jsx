import React from "react";
import Blog from "./Blog";
import WarningClass from "./WarningClass";

class AllComponents extends React.Component {
  render() {
    const name = "We did it";
    const element = <h1>Hello, {name}</h1>;

    // Hello World
    // function formatName(user) {
    //   return user.firstName + " " + user.lastName;
    // }

    // const user = {
    //   firstName: "Harper",
    //   lastName: "Perez",
    // };

    // const element = <h1>Hello, {formatName(user)}!</h1>;

    // user name greeting
    // function getGreeting(user) {
    //   if (user) {
    //     return <h1>Hello, {formatName(user)}!</h1>;
    //   }
    //   return <h1>Hello, Stranger.</h1>;
    // }
    // const element = <a href="https://www.reactjs.org"> link </a>;
    const avatarUrl =
      "https://www.google.com/search?q=google+meets&rlz=1C5CHFA_enGE1000GE1000&sxsrf=ALiCzsZvtB6i5MdUFWSCYxTFW1ca6xJVrQ:1652794796858&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjEjIO21Ob3AhVENuwKHfdjDcYQ_AUoAXoECAEQAw&biw=1728&bih=909&dpr=2#imgrc=Ec7MZ0PuoUI-BM";
    const elementt = <img src={avatarUrl}></img>;

    // Comment

    function Avatar(props) {
      return <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />;
    }
    function UserInfo(props) {
      return (
        <div className="UserInfo">
          <Avatar user={props.user} />
          <div className="UserInfo-name">{props.user.name}</div>
        </div>
      );
    }

    function Comment(props) {
      return (
        <div className="Comment">
          <UserInfo user={props.author} />
          <div className="Comment-text">{props.text}</div>
        </div>
      );
    }
    const activateLasers = () => {
      alert("Lasers!!!");
    };

    const Form = () => {
      const handleSubmit = e => {
        e.preventDefault();
        console.log("You clicked submit.");
      };

      return (
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
        </form>
      );
    };

    function UserGreeting(props) {
      return <h1>Welcome back!</h1>;
    }

    function GuestGreeting(props) {
      return <h1>Please sign up.</h1>;
    }

    function Greeting(props) {
      const isLoggedIn = props.isLoggedIn;
      if (isLoggedIn) {
        return <UserGreeting />;
      }
      return <GuestGreeting />;
    }

    //mailbox

    function Mailbox(props) {
      const unreadMessages = props.unreadMessages;
      return (
        <div>
          <h1>Hello!</h1>
          {unreadMessages.length > 0 && <h2>You have {unreadMessages.length} unread messages.</h2>}
        </div>
      );
    }

    const messages = ["React", "Re: React", "Re:Re: React"];

    const count = 0;

    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(number => number * 2);
    console.log(doubled);

    const numberss = [1, 2, 3, 4, 5];
    let listItems;

    return (
      <div>
        {<p>{element}</p>}
        <div>{elementt}</div>
        <button onClick={activateLasers}>Activate Lasers</button>
        <div>{Form()}</div>
        {/* <div>{Mailbox()}</div> */}
        {count && <h1>Messages: {count}</h1>}
        <WarningClass />
        {(listItems = numberss.map(number => <li>{number}</li>))}
        {/* <Blog /> */}
      </div>
    );
  }
}
export default AllComponents;
