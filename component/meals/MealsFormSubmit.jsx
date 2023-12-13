"use client";

import React from "react";

import { useFormStatus } from "react-dom";

function MealsFromSubmit() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit">
      {pending ? "Submitting..." : "Share Meal"}
      Share Meal
    </button>
  );
}

export default MealsFromSubmit;
