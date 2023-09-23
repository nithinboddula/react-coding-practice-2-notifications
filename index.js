const Notification = (props) => {
  //  Write your code here.
  const { name, link, className, card } = props;
  return (
    <div className={card}>
      <img src={link} className="icon" />
      <p className={className}>{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <Notification
      name="Information Message"
      link="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      className="message"
      card="card-1 card"
    />
    <Notification
      name="Success Message"
      link="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      className="message"
      card="card-2 card"
    />
    <Notification
      name="Warning Message"
      link="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      className="message"
      card="card-3 card"
    />
    <Notification
      name="Error Message"
      link="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      className="message"
      card="card-4 card"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
