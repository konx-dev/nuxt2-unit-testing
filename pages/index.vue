<template>
    <div>
        <HeroSection :ctx="heroContent" />
        <CTASection />
        <FeaturedSection />
    </div>
</template>

<script>
import FeaturedSection from '@/components/FeaturedSection'
import CTASection from '@/components/CTASection'
import HeroSection from '@/components/Hero/HeroSection'

export default {
    name: 'IndexPage',
    components: {
        FeaturedSection,
        CTASection,
        HeroSection
    },
    data () {
        return {
            heroContent: {
                heading: 'Data to enrich your <em>online business</em>',
                body: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
                image: { title: 'Placeholder image', url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80' },
                buttons: [
                    { text: 'Get started', link: '/' },
                    { text: 'Live demo', link: '/' }
                ]
            }
        }
    }
}
</script>
