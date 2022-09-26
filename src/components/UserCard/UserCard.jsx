import "./UserCard.css";

const UserCard = () => (
  <>
    <h2 className="sr-only">Accounts</h2>

    <section className="usercard">
      <div className="usercard__wrapper">
        <h3 className="usercard__wrapper__title">
          Argent Bank Checking (x8349)
        </h3>
        <p className="wrapper__amount">$2,082.79</p>
        <p className="wrapper__amount__description">Available Balance</p>
      </div>
      <div>
        <button className="usercard__button">View transactions</button>
      </div>
    </section>

    <section className="usercard">
      <div className="usercard__wrapper">
        <h3 className="usercard__wrapper__title">Argent Bank Savings (x6712)</h3>
        <p className="wrapper__amount">$10,928.42</p>
        <p className="wrapper__amount__description">Available Balance</p>
      </div>
      <div>
        <button className="usercard__button">View transactions</button>
      </div>
    </section>

    <section className="usercard">
      <div className="usercard__wrapper">
        <h3 className="usercard__wrapper__title">
          Argent Bank Credit Card (x8349)
        </h3>
        <p className="wrapper__amount">$184.30</p>
        <p className="wrapper__amount__description">Current Balance</p>
      </div>
      <div>
        <button className="usercard__button">View transactions</button>
      </div>
    </section>
  </>
);

export default UserCard;
