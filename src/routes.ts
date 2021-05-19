import BreedSelectorContainer from "./containers/BreedSelector";
import DogViewerContainer from "./containers/DogViewer";

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
export const routes: any[] = [
  {
    path: "/breeds",
    component: BreedSelectorContainer
  },
  {
    path: "/breed-detail",
    component: DogViewerContainer
  }
];