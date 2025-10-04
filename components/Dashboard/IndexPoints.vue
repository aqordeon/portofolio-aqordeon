<template>
    <div class="overflow-hidden">
        <div class="relative isolate">
            <div class="mx-auto max-w-7xl">
                <div class="mx-auto flex max-w-2xl flex-col gap-16 bg-white/75 px-6 py-16 sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
                    <!-- <img class="h-96 w-full flex-none rounded-2xl object-cover lg:aspect-square lg:h-auto lg:max-w-sm"
                        src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                        alt="" /> -->
                    <div class="w-full flex-auto">
                        <h2 class="text-pretty text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-2xl">
                            Mengapa harus kartu Toko Tangan Kanan?
                        </h2>

                        <p class="mt-2 text-pretty text-center text-gray-600 w-9/12 mx-auto">
                            Berikut beberapa keunggulan utama dari kartu Toko Tangan Kanan yang membuatnya berbeda dan layak dipilih untuk menemani momen obrolanmu.
                        </p>

                        <ul role="list"
                            class="mt-10 grid grid-cols-1 gap-x-14 gap-y-3 text-base/7 text-gray-950 sm:grid-cols-2">
                            <li v-for="point, idxPoint in corePoints" :key="idxPoint" class="flex gap-x-3 text-primary">
                                <CheckCircleIcon class="h-7 w-5 flex-none " aria-hidden="true" />
                                <div>
                                    <div class="font-bold">{{ point.label }}</div>
                                    <div class="text-sm/6 opacity-80 text-gray-600">{{ point.description }}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                aria-hidden="true">
                <div class="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#9fd6fc] to-[#8680fd] opacity-50"
                    style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { CheckCircleIcon } from '@heroicons/vue/20/solid'

const corePoints = [
    {
        label: 'Bentuk minimalis',
        description: 'Muat dimasukkan di tas, saku, jok motor. Sehingga mudah dibawa kemana-mana dan dapat dimainkan jika diperlukan.',
    },
    {
        label: 'Desain menarik',
        description: 'Lebih estetik ketika divideo dan dijadikan insta story.',
    },
    {
        label: 'Pertanyaan variatif',
        description: 'Dari yang ringan sampai mendalam, dari yang random sampai yang tak terduga, dari yang lucu sampai yang serius, semua ada!',
    },
    {
        label: 'Kualitas kartu premium',
        description: 'Finishing doff, semi anti-air, dan rounded corner membuat kartu awet dan nyaman saat dimainkan.',
    },
    {
        label: 'Cocok di berbagai momen',
        description: 'Momen nongkrong, night-drive, deep-talk, bahkan saat kumpul keluarga atau teman lama.',
    },
    {
        label: 'Mudah dimainkan',
        description: 'Aturan simpel dan bisa langsung dimainkan tanpa perlu persiapan khusus, cukup ambil satu kartu dan mulai ngobrol.',
    },
]

</script>