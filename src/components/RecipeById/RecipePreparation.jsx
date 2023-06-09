import { useSelector } from 'react-redux';
import { selectRecipeById } from 'redux/recipes/recipesSelectors';
import placeholder from 'images/dishes_placeholder.webp';

export const RecipePreparation = () => {
  const recipes = useSelector(selectRecipeById);
  const { thumb, instructions } = recipes;

  const steps = instructions.split('\n');
  // const filteredSteps = steps.filter(step => step !== '');

  return (
    <>
      <div className="container">
        <div className="xl:flex justify-between mb-[100px] md:mb-[200px] xl:gap-[50px]">
          <div className="xl:w-[757px]">
            <h2 className="text-customBase text-secondaryText dark:text-whiteText font-semibold mb-[28px] md:mb-8">
              Recipe Preparation
            </h2>
            <ul className="flex flex-col gap-y-3.5 md:gap-[18px] mb-[50px] text-xs md:text-customXs md:leading-[18px] text-[#000000] dark:text-whiteText ">
              {steps.map((step, index) => {
                if (step !== '')
                  return (
                    <li key={index} className="flex ">
                      <div className="flex justify-center items-center rounded-full w-5 h-5 mr-3.5 px-2.5 bg-accentMain text-customShoppingList  font-semibold text-white">
                        {index + 1}
                      </div>
                      <p>{step}</p>
                    </li>
                  );
                return '';
              })}
            </ul>
          </div>
          <div className="max-w-[343px] md:max-w-[433px] xl:w-[433px] h-[250px] md:h-[332px] overflow-hidden align-middle">
            {{ thumb } ? (
              <img
                src={thumb}
                loading="lazy"
                className="block w-full rounded align-middle h-full object-cover"
                alt="ingredient_photo"
              />
            ) : (
              <img
                className="block  bg-cover bg-center w-full rounded object-cover"
                src={placeholder}
                loading="lazy"
                alt="placeholder"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
