<template>
  <section>
    <div class="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen">
        <img src="/1.webp" class="w-full h-full object-cover">
      <div class="flex flex-col w-full h-full">
        <img src="/2.webp" class="w-full h-full object-cover">
        <img src="/3.jpeg" class="w-full h-full object-cover">
      </div>
    </div>
    <div class="relative w-screen h-screen">
      <video autoplay muted loop class="absolute top-0 left-0 min-w-full min-h-full object-cover">
        <source src="/video1.mp4" type="video/mp4">
      </video>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 w-screen min-h-screen">
      <img src="/4.webp" class="w-full h-full object-cover">
      <img src="/5.jpeg" class="w-full h-full object-cover">
    </div>
  </section>
</template>
