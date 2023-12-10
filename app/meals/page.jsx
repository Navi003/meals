import React, { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/component/meals/MealsGrid";

import { getMeals } from "@/lib/meals";

function Meals() {
  const meals = getMeals();

  return <MealsGrid meals={meals} />;
}

function ShareMealPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created {""}
          <span className={classes.highlight}>by you</span>
          <p>
            choose your favorite recipe and cook it your self. it is easy anf
            fun!
          </p>
          <p className={classes.cta}>
            <Link href="/meals/share">Share your Favorite Recipe</Link>
          </p>
        </h1>
      </header>
      <main className={classes.main}>
        {/* Usining Suspense and it will show fallback content untill data arrives */}
        <Suspense
          fallback={<p className={classes.loading}>fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

export default ShareMealPage;
