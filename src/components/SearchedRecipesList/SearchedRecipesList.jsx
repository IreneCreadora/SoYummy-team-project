import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { selectSearchedRecipes } from 'redux/search/selectors';
import { selectIsLoading } from 'redux/search/selectors';
import { selectError } from 'redux/search/selectors';
import placeholder from '../../images/placeholder.png';

export const SearchedRecipesList = () => {
  const recipes = useSelector(selectSearchedRecipes);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      {error &&
        toast.error('Something went wrong, please try again later', {
          autoClose: 3000,
        })}
      {isLoading && !error && <Loader />}
      {recipes.length === 0 ? (
        <div className="flex flex-col gap-[32px] items-center mt-[50px] mb-[200px] w-[350]">
          <img src={placeholder} alt="vegetables assortment" />
          <p className="text-center Poppins text-customBase dark:text-white">
            Try looking for something else..
          </p>
        </div>
      ) : (
        <div>
          <ul className="mb-[50px] flex flex-wrap w-full gap-0 md:gap-8 xl:gap-3 justify-center md:justify-between">
            {recipes.map(({ thumb, _id, title }) => {
              return (
                <li
                  key={_id}
                  className="w-[100%] h-[343px] md:h-[336px] xl:h-[300px] rounded-lg relative md:w-[calc(50%-16px)] xl:w-[calc(25%-12px)] object-cover shadow hover:shadow-lg focus:shadow-lg  shadow-black hover:shadow-black focus:shadow-black  dark:shadow-white dark:hover:shadow-white dark:focus:shadow-white"
                >
                  <NavLink
                    to={`/recipes/${_id}`}
                    className="bg-gray-200  rounded-lg bg-cover bg-center w-full h-full bg-no-repeat block"
                    style={{ backgroundImage: `url('${thumb}` }}
                  >
                    <div className="absolute font-medium text-base leading-5 tracking-tight text-secondaryText p-4 bg-white bottom-[26px] left-0 right-0 mx-auto rounded-lg w-[calc(100%-18px)] xl:w-[calc(100%-16px)] whitespace-nowrap overflow-hidden text-ellipsis dark:text-whiteText dark:bg-accentDark shadow shadow-black dark:shadow-white">
                      {title}
                    </div>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};
