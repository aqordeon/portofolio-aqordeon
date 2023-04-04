<template>
    <nav class="fixed flex flex-col bg-background-white md:bg-background-light">
      <section class="w-screen">
        <div class="mx-auto flex justify-between w-full lg:max-w-6xl typ-button-medium-medium text-text-default py-4">
          <section class="flex items-center">
            <NuxtLink to="/" class="cursor-pointer p-2">
              <NuxtImg format="webp" class="h-6" src="/logo/readsee.png" />
            </NuxtLink>
          </section>
          <section class="flex items-center md:hidden lg:flex">
            <NuxtLink href="/contact" class="relative mx-2 py-2.5 group">
              <div class="px-2 text-text-default">Contact us</div>
              <div
                class="absolute -bottom-4 left-[50%] w-0 border-border-button border-b-4 group-hover:w-full group-hover:left-0 transition-all duration-200 ease-in-out">
              </div>
            </NuxtLink>
          </section>
        </div>
      </section>
    </nav>
  
    <div class="min-h-screen grid place-items-center bg-background-light">
      <div class="container max-w-7xl grid place-items-center py-28 md:py-[200px]"
        :class="{ hidden: error.statusCode != 404 }">
        <div class="px-6 md:px-5 text-center max-w-5xl">
          <NuxtImg format="webp" src="/custom/404.svg" alt=""
            class="md:mx-auto w-[340px] mb-6 md:mb-16 px-14 md:px-0" />
          <h3 class="typ-heading-large-bold md:typ-display-medium-bold text-text-default mb-6">
            Page not available But Read/See is :)
          </h3>
          <p class="typ-description-large-regular md:typ-heading-large-medium text-text-description mb-12">
            We are still here to help you read and see your<br />data better.
          </p>
        </div>
        <button @click="goBack" class="btn btn-secondary mb-[72px] md:mb-[60px]">
          <div class="flex align-center typ-description-large-bold">
            <i class="mti-arrow-left pr-2.5"></i> Go back
          </div>
        </button>
  
        <div class="mx-auto grid justify-center px-6 md:px-0">
          <p
            class="typ-description-large-regular md:typ-heading-medium-medium text-text-description inline mb-6 mx-auto text-center">
            Find out what else you can do on our website.
          </p>
          <div class="mx-auto grid text-center md:grid-flow-col md:items-center">
            <NuxtLink to="/customer/retail"
              class="p-2.5 typ-description-medium-bold md:typ-description-large-bold text-link-default cursor-pointer">
              Retail solution
            </NuxtLink>
            <p class="text-link-secondary inline mx-2.5">-</p>
            <NuxtLink to="/customer/finance"
              class="p-2.5 typ-description-medium-bold md:typ-description-large-bold text-link-default cursor-pointer">
              Finance solution
            </NuxtLink>
            <p class="text-link-secondary inline mx-2.5">-</p>
            <NuxtLink to="/pricing"
              class="p-2.5 typ-description-medium-bold md:typ-description-large-bold text-link-default cursor-pointer">
              Pricing
            </NuxtLink>
            <p class="text-link-secondary inline mx-2.5">-</p>
            <NuxtLink to="https://app.readsee.io/signup"
              class="p-2.5 typ-description-medium-bold md:typ-description-large-bold text-link-default cursor-pointer">
              Sign up
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="container max-w-7xl grid place-items-center py-[200px]" :class="{ hidden: error.statusCode == 404 }">
        <div class="px-5 text-center max-w-[830px]">
          <h2 class="text-8xl text-text-defaultWhite">{{ error.statusCode }}</h2>
          <h3 class="text-text-defaultWhite">{{ error.message }}</h3>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  
  defineProps({
    error: Object,
  });
  
  useHead({
    title: "404 - Page not Found",
  });
  
  const router = useRouter();
  
  const goBack = () => {
    router.back();
  };
  </script>
  