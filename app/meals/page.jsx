import React from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/component/meals/MealsGrid";
import { getMeals } from "@/lib/meals";
function ShareMealPage() {
  const meals = getMeals();

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
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}

export default ShareMealPage;
