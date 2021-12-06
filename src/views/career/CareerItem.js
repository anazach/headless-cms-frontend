import React from "react";

const CareerItem = ({ career }) => {
  return (
    <section>
      <h2>{career.acf.title}</h2>
      <h1> What is Lorem Ipsum? </h1>
      <p> Lorem Ipsum has been the industry's standard dummy </p>
      <button class="bg-green-500 active:bg-green-700 ...">
  Apply today
</button>

<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:flex-shrink-0">
      <img class="h-48 w-full object-cover md:w-48" src="/img/store.jpg" alt="Man looking at item at a store" />
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Konsoltsäljare/ansvarigperson</div>
      <h3> Datum </h3>
      <p class="mt-2 text-gray-500">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
    </div>

    <button class="bg-grey-500 active:bg-grey-700 ...">
  Read more
</button>
  </div>
</div>

<h3> Our main value </h3>

<style>
  .vacation-card { /* ... */ }
  .vacation-card-info { /* ... */ }
  .vacation-card-eyebrow { /* ... */ }
  .vacation-card-title { /* ... */ }
  .vacation-card-price { /* ... */ }
</style>


<div class="vacation-card">
  <img class="vacation-card-image" src="..." alt="Beach in Cancun" />
  <div class="vacation-card-info">
    <div>
      <div class="vacation-card-eyebrow">Lorem Ipsum</div>
      <div class="vacation-card-title">

      </div>
      <div class="vacation-card-price">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
    </div>
  </div>
</div>
      
    </section>
  );
};

export default CareerItem;
