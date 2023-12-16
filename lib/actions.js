"use server";

import { saveMeal } from "./meals";

export async function shareMeal(_, formData) {
  function isInvalidText(text) {
    return !text || text.trim() === "";
  }

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input",
    };
  }
  await saveMeal(meal);
  //NextJS will Revalidate content in this path but not nested path
  // for nested paths we would need to add second parameter which is layout
  revalidatePath("/meals");
  redirect("/meals");
}
