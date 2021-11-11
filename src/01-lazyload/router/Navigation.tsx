import { Link, Routes, Route, Navigate } from 'react-router-dom';
import { LazyPage1 } from "../pages";
import LazyPage2 from '../pages/LazyPage2';
import LazyPage3 from '../pages/LazyPage3';

export const Navigation = () => {

  return (
    <>
      <h2>Lazy Layout Pages</h2>

      <ul>
        <li>
          <Link to='lazy1'>Lazy Page 1</Link>
        </li>
        <li>
          <Link to="lazy2">Lazy Page 1</Link>
        </li>
        <li>
          <Link to="lazy3">Lazy Page 1</Link>
        </li>
      </ul>

      <Routes>
        <Route path="lazy1" element={<LazyPage1 />} />
        <Route path="lazy2" element={<LazyPage2 />} />
        <Route path="lazy3" element={<LazyPage3 />} />
        <Route path="*" element={ <Navigate to='lazy1' replace={true} /> } />
      </Routes>
    </>
  )
}
