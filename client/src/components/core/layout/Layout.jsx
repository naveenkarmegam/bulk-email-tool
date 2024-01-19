
import Sidebar from "./Sidebar";
import TobBar from "./TobBar";
import "./styles/core.css";
import "./styles/palette.css";
import Mode from "../../../utils/Mode";
import ColorSwitcher from "../../../utils/ColorSwitcher";

const Layout = ({ children }) => {

  return (
    <main id="page-top">
      <header id="wrapper" className="overflow-hidden"
      >
        <Sidebar />
        <article
          id="content-wrapper"
          className="d-flex flex-column overflow-hidden"
          >
          <section id="content" className="p-0 "
            // style={{ backgroundColor: "var(--bg-color)" }}
          >
            <TobBar />
            <div
              className="container-fluid mt-4"
            >
              {children}
            </div>
          </section>
        </article>
      </header>
      <ColorSwitcher />
      <Mode />
    </main>
  );
};

export default Layout;
