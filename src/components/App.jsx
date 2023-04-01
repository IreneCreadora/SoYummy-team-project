import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute, RegisterRoute } from 'service/routes';
import { getAccessToken } from 'redux/auth/authSelectors';
import { current } from 'redux/auth/authOperatins';
import { useSelector, useDispatch } from 'react-redux';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { MyRecipesList } from './MyRecipesList/MyRecipesList';

const HomePage = lazy(() => import('../pages/Home'));
const AddRecipePage = lazy(() => import('../pages/AddRecipe'));
const Register = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const Lognin = lazy(() => import('../pages/LogninPage/LogninPage'));
const WellcomPage = lazy(() => import('components/WellcomPage/WellcomPage'));

export const App = () => {
  const token = useSelector(getAccessToken);

  const dispatcher = useDispatch();

  useEffect(() => {
    if (token === null) return;
    dispatcher(current());
  }, [dispatcher, token]);

  return (
    <Routes>
      <>
        <Route
          path="/"
          element={<RegisterRoute restricted>{/* <Main /> */}</RegisterRoute>}
        />
        <Route
          path="/register"
          element={
            <RegisterRoute restricted>{/* <Register /> */}</RegisterRoute>
          }
        />
        <Route
          path="/signin"
          element={<RegisterRoute restricted>{/* <Signin /> */}</RegisterRoute>}
        />
        <Route
          path="/confirm-email"
          element={
            <RegisterRoute restricted>{/* <Subscribe /> */}</RegisterRoute>
          }
        />
      </>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <SharedLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="/add" element={<AddRecipePage />} />
        <Route path="/myrecipes" element={<MyRecipesList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Lognin />} />
        <Route path="/welcomePage" element={<WellcomPage />} />
      </Route>
    </Routes>
  );
};
