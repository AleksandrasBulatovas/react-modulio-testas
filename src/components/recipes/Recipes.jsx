import Recipe from "../recipe/Recipe";
import React, { useEffect, useState } from "react";
import Nav from "../nav/Nav";
const Recipes = () => {

    const [recipes, setRecipes] = useState([])

    const onSearch = (value) => {
        console.log({ value });
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setRecipes(data.meals);
            })
            .catch((error) => console.log(error))
    };

    return (
        <>
            <Nav onSearch={onSearch} />
            <section className="pt-4">
                <div className="container px-lg-5">
                    <div className="row gx-lg-5">
                        {!recipes && (
                            <span>Nieko neradau</span>
                        )}
                        {recipes?.map((r, i) => (
                            <Recipe
                                key={i}
                                title={r.strMeal}
                                img={r.strMealThumb}
                                ingr1={r.strIngredient1}
                                amount1={r.strMeasure1}
                                ingr2={r.strIngredient2}
                                amount2={r.strMeasure2}
                                ing3={r.strIngredient3}
                                amount3={r.strMeasure3}
                                ingr4={r.strIngredient4}
                                amount4={r.strMeasure4}
                                ingr5={r.strIngredient5}
                                amount5={r.strMeasure5}
                                ingr6={r.strIngredient6}
                                amount6={r.strMeasure6}
                                ingr7={r.strIngredient7}
                                amount7={r.strMeasure7}
                                ingr8={r.strIngredient8}
                                amount8={r.strMeasure8}
                                ingr9={r.strIngredient9}
                                amount9={r.strMeasure9}
                                ingr10={r.strIngredient10}
                                amount10={r.strMeasure10}
                                ingr11={r.strIngredient11}
                                amount11={r.strMeasure11}
                                ingr12={r.strIngredient12}
                                amount12={r.strMeasure12}
                                ingr13={r.strIngredient13}
                                amount13={r.strMeasure13}
                                ingr14={r.strIngredient14}
                                amount14={r.strMeasure14}
                                ingr15={r.strIngredient15}
                                amount15={r.strMeasure15}
                                ingr16={r.strIngredient16}
                                amount16={r.strMeasure16}
                                ingr17={r.strIngredient17}
                                amount17={r.strMeasure17}
                                ingr18={r.strIngredient18}
                                amount18={r.strMeasure18}
                                ingr19={r.strIngredient19}
                                amount19={r.strMeasure19}
                                ingr20={r.strIngredient20}
                                amount20={r.strMeasure20}
                            />
                        )
                        )}

                    </div>
                </div>
            </section>
        </>
    );
}

export default Recipes