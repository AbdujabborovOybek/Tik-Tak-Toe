import React from "react";

const user = {
  id: 1,
  nickname: "oybek",
  win: 1,
  lose: 0,
};

export const App = () => {
  const auth = JSON.parse(localStorage.getItem("auth")) || null;
  const data = Array.from({ length: 9 }, () => 1);
  const users = Array.from({ length: 100 }, () => user);

  const handelClick = (value) => {
    const item = document.querySelector(`.game_item_${value}`);
    item.innerHTML = "X";
  };

  return (
    <main className="main">
      <aside className="aside">
        <header>
          <h1>Tik-Tak-Toe</h1>
          <p>
            <span>username:</span>
            <i>oybek</i>
          </p>
        </header>

        <ol>
          {users?.map((item, index) => {
            return (
              <li key={index}>
                <h2>
                  {item.nickname}
                  {index + 1}
                </h2>
                <p>
                  <span>win: {item.win}</span>
                </p>
                <p>
                  <span>lose: {item.lose}</span>
                </p>
              </li>
            );
          })}
        </ol>
      </aside>
      <section className="section">
        <div className="game">
          {data.map((item, index) => {
            return (
              <div key={index} onClick={() => handelClick(index + 1)}>
                <span className={`game_item_${index + 1}`}></span>
              </div>
            );
          })}
        </div>
      </section>

      <Auth auth={auth} />
    </main>
  );
};

const Auth = ({ auth }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = Object.fromEntries(formData);
    localStorage.setItem("auth", JSON.stringify(value));
    window.location.reload();
  };

  return (
    <div className={!auth ? "auth active" : "auth"}>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nickname</span>
          <input
            type="text"
            name="nickname"
            placeholder="Nickname"
            required
            autoComplete="off"
            autoCapitalize="off"
          />
        </label>
        <label>
          <input type="submit" value="Join" />
        </label>
      </form>
    </div>
  );
};
