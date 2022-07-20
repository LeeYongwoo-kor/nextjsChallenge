import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Booking.com</title>
      </Head>
      <div>
        <div>
          <header>
            <nav>
              <div>Booking.com</div>
              <div>Hamburger Button</div>
            </nav>
          </header>
        </div>
        <div id="app">
          <div id="container">
            <div id="panel">
              <div id="transition-container">
                <div id="transition-panel">
                  <div>
                    <h1>Sign in with your Phone</h1>
                  </div>
                  <form id="nw-phone">
                    <div id="nw-phone-large">
                      <label>Phone number</label>
                      <div id="phone">
                        <select></select>
                        <input type="tel"></input>
                      </div>
                    </div>
                    <button>Continue with phone</button>
                    <div id="access_social">
                      <div>
                        <div />
                        <span>or use one of these options</span>
                        <div />
                      </div>
                      <div>
                        <a></a>
                        <a></a>
                        <a></a>
                      </div>
                      <div>
                        <button>More ways to sign in</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <div>
              <div>
                By signing in or creating an account, you agree with out Terms &
                conditions and to the processing and sharing of your personal
                data in accordance with our Privacy statement
              </div>
              <div>
                <div>
                  All rights reserved. Copyright (1994 - 2022) - Yoshi.com™
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
