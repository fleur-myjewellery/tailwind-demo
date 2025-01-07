<template>
  <div class="flex flex-col gap-8 m-4">
    <TailwindStyleFilter />

    <SCSSStyleFilter />

    <div class="flex gap-4">
      <TailwindProductCard
        :primaryImage="ringPrimary"
        :hoverImage="ringHover"
        productTitle="Statement ring blad"
        productPrice="€ 19,99"
      />

      <SCSSProductCard
        :primaryImage="kettingPrimary"
        :hoverImage="kettingHover"
        productTitle="Statement ring blad"
        productPrice="€ 19,99"
      />
    </div>
  </div>
</template>
<script setup>
import ringOne from '~/assets/css/images/ringTwo.jpg';

import ringTwo from '~/assets/css/images/ringOne.jpg';
import kettingTwo from '~/assets/css/images/kettingOne.jpg';
import kettingOne from '~/assets/css/images/kettingTwo.jpg';
const ringHover = ringTwo;
const ringPrimary = ringOne;
const kettingPrimary = kettingOne;
const kettingHover = kettingTwo;
</script>
