import { 
  Routes,
  Route,
  NavLink,
  Navigate
} from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";


export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>

      <ul>
        <li>
          <NavLink to="lazyload1">Page 1</NavLink>
        </li>
        <li>
          <NavLink to="lazyload2">Page 2</NavLink>
        </li>
        <li>
          <NavLink to="lazyload3">Page 3</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="lazyload1" element={<LazyPage1 />} />
        <Route path="lazyload2" element={<LazyPage2 />} />
        <Route path="lazyload3" element={<LazyPage3 />} />

        <Route path="*" element={<Navigate to='lazyload1' replace />} />
      </Routes>
    </div>
  )
}

export default LazyLayout;
