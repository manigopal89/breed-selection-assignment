import "./App.css";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { routes } from "./routes";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { setOnlineStatus } from "./stores/actions";
import { useSnackbar } from "notistack";
import { useEffect } from "react";

const App: React.FC<{ setOnlineStatus: (status: boolean) => void }> = ({
  setOnlineStatus,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    const handler = () => {
      setOnlineStatus(navigator.onLine);
      enqueueSnackbar("Network is available");
    }
    window.addEventListener("online", handler);
    window.addEventListener('offline', handler)
    return () => {
      window.removeEventListener('online', handler)
      window.removeEventListener('offline', handler)
    }
  }, [])
  
  return (
      <div className="App">
        <Container maxWidth="sm" style={{ height: "100vh" }}>
          <Router>
            <Redirect from={""} to={"/breeds"} exact={true} />
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                render={(props) => (
                  // pass the sub-routes down to keep nesting
                  <route.component {...props} />
                )}
              />
            ))}
          </Router>
        </Container>
      </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  setOnlineStatus: (status: boolean) => dispatch(setOnlineStatus(status)),
});

export default connect(null, mapDispatchToProps)(App);