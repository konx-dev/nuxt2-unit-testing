<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div v-if="ctx" class="relative bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <polygon points="50,0 100,0 50,100 0,100" />
                </svg>

                <div>
                    <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
                        <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                            <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                <div class="flex items-center justify-between w-full md:w-auto">
                                    <a href="#">
                                        <span class="sr-only">Workflow</span>
                                        <img alt="Workflow" class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg">
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

                <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div class="sm:text-center lg:text-left">
                        <h1 data-testid="hero-header" class="hero__heading text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl" v-html="ctx.heading" />
                        <p v-if="ctx.body" data-testid="hero-body" class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            {{ ctx.body }}
                        </p>
                        <div v-if="ctx.buttons.length > 0" data-testid="hero-buttons" class="mt-5 sm:mt-8 flex flex-col sm:flex-row justify-center lg:justify-start">
                            <a
                                v-for="(button,index) in ctx.buttons"
                                :key="index"
                                :href="button.link"
                                data-testid="hero-button"
                                :class="buttonStyles(index)"
                                class="rounded-md shadow px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10"
                            >
                                <span class="w-full flex items-center justify-center">{{ button.text }}</span>
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img data-testid="hero-image" class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" :src="ctx.image.url" :alt="ctx.image.title">
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    props: {
        ctx: {
            type: Object,
            required: true
        }
    },
    methods: {
        buttonStyles (val) {
            if (val === 0) {
                return 'mb-3 sm:mb-0 sm:mr-3 text-white bg-indigo-600 hover:bg-indigo-700'
            } else {
                return 'text-indigo-700 bg-indigo-100 hover:bg-indigo-200'
            }
        }
    }
}
</script>
<style>
.hero__heading em {
    font-style: normal;
    color: rgb(79, 70, 229);
}

</style>
