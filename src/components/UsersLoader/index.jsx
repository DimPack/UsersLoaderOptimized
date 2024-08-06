import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { getUsers } from "../../api";
import Spinner from "../Spinner";
import ChooseLanguage from "./ChooseLanguage";
import InputResults from "./InputResults";
import UserInfo from "./UserInfo";
import Pagination from "./Pagination";
import styles from "./UserLoader.module.css";

/*https://www.youtube.com/watch?v=jvJAmF4an54&list=PLxQIdU5bMkOiUg3p6X4BXVpIfWzMaLV7l&index=157 */
class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isPending: false,
      error: null,
      currentPage: 1,
      currentResults: 5,
      currentNat: "gb",
    };
    this.quantityPage_1 = 5;
    this.quantityPage_2 = 10;
    this.quantityPage_3 = 15;
  }

  load = () => {
    const { currentPage, currentResults, currentNat } = this.state;
    this.setState({ isPending: true });
    getUsers({ page: currentPage, results: currentResults, nat: currentNat })
      .then((data) => {
        if (data.error) {
          throw new Error(data.error);
        }
        this.setState({ users: data.results });
      })
      .catch((error) => {
        this.setState({ error: error });
      })
      .finally(() => {
        this.setState({ isPending: false });
      });
  };

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.currentPage !== this.state.currentPage ||
      prevState.currentResults !== this.state.currentResults ||
      prevState.currentNat !== this.state.currentNat
    ) {
      this.load();
    }
  }

  prevPage = () => {
    this.setState((state, props) => {
      const { currentPage } = state;
      if (currentPage > 1) {
        return { currentPage: currentPage - 1 };
      }
    });
  };
  nextPage = () => {
    this.setState((state, props) => {
      const { currentPage } = state;
      return { currentPage: currentPage + 1 };
    });
  };

  handlerResults = ({ target: { value } }) => {
    this.setState({ currentResults: Number(value) });
  };
  handlerNat = ({ target: { value } }) => {
    this.setState({ currentNat: value });
  };
  render() {
    const { users, isPending, error, currentPage, currentResults, currentNat } =
      this.state;
    if (isPending) {
      return <Spinner />;
    }
    if (error) {
      return <div>ERROR!!!</div>;
    }
    return (
      <section>
        <h2>Users:</h2>
        <div>
          <Pagination
            currentPage={currentPage}
            prevPage={this.prevPage}
            nextPage={this.nextPage}
          />
          <ChooseLanguage
            currentNat={currentNat}
            handlerNat={this.handlerNat}
          />

          <div>
            <InputResults
              quantityPage={this.quantityPage_1}
              handlerResults={this.handlerResults}
              currentResults={currentResults}
            />
            <InputResults
              quantityPage={this.quantityPage_2}
              handlerResults={this.handlerResults}
              currentResults={currentResults}
            />
            <InputResults
              quantityPage={this.quantityPage_3}
              handlerResults={this.handlerResults}
              currentResults={currentResults}
            />
          </div>
        </div>
        {users.length ? (
          <ul className={styles.containerUsers}>
            {users.map((user, i) => (
              <UserInfo key={user.login.uuid} user={user} index={i + 1} />
            ))}
          </ul>
        ) : (
          <p>empty list of users</p>
        )}
      </section>
    );
  }
}

UsersLoader.propTypes = {};

export default UsersLoader;
