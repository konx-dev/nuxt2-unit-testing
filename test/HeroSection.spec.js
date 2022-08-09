/*

-- Testing for a generic Hero component --

Assumptions:
The data layer has been setup appropriately with field limits and required flags
The component will only ever be used in relation to the corresponding cms field
We will test both the rendering of the elements as well as match against props

Fields:
Heading * - Redactor
Body - Plaintext
Image * (limit of 1) - Asset
Buttons (0, 1 or 2) - Matrix field

Example data object:

heroContent: {
    heading: '<p>Data to enrich your <em>online business</em></p>',
    body: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
    image: { title: 'Placeholder image', url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80' },
    buttons: [
        { text: 'Get started', link: '/' },
        { text: 'Live demo', link: '/' }
    ]
}

Requirements:

* Component renders and all required fields are output to the template
* The heading (required) is rendered and is utilising a H1, dom element: data-testid="hero-header"
* The image (required) has rendered and has an alt tag, dom element: data-testid="hero-image"
* Available optional fields are rendered as expected, dom element: data-testid="hero-body" | data-testid="hero-buttons"
* Unavailable optional fields aren't trying to be rendered
* Clicking a button has a response, dom element: data-testid="hero-button"

*/

import { mount } from '@vue/test-utils'
import HeroSection from '@/components/Hero/HeroSection.vue'

describe('HeroSection', () => {
    it('Component renders and all required fields are output to the template', () => {
        const ctx = {
            heading: 'Data to enrich your online business',
            body: null,
            image: { title: 'Placeholder image', url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80' },
            buttons: []
        }

        const wrapper = mount(HeroSection, {
            propsData: {
                ctx
            }
        })

        const heroHeader = wrapper.find('[data-testid=hero-header]') // identified by test-utils tag
        expect(heroHeader.exists()).toBeTruthy() // visibility check
        expect(heroHeader.html()).toContain('<h1') // a11y check for h1
        expect(heroHeader.text()).toContain(ctx.heading) // check the right prop is rendered to the component

        const image = wrapper.find('[data-testid=hero-image]') // identified by test-utils tag
        expect(image.exists()).toBeTruthy() // visibility check
        expect(image.attributes('src')).toContain(ctx.image.url) // check the right prop is rendered to the component
        expect(image.attributes('alt')).toContain(ctx.image.title) // a11y check for alt tag and prop
    })

    it('Available optional fields are rendered as expected', () => {
        const ctx = {
            heading: null,
            body: 'Hero Demo body copy here',
            image: [],
            buttons: [
                { title: 'button a', link: 'a-link.com/subdfolder' },
                { title: 'button b', link: 'another-link.com/subfolder' }
            ]
        }

        const wrapper = mount(HeroSection, {
            propsData: {
                ctx
            }
        })

        const heroBody = wrapper.find('[data-testid=hero-body]')
        expect(heroBody.text()).toContain(ctx.body)

        const heroButtons = wrapper.find('[data-testid=hero-buttons]')
        expect(heroButtons.exists()).toBeTruthy()
    })

    it("Unavailable optional fields aren't trying to be rendered", () => {
        const ctx = {
            heading: null,
            body: null,
            image: [],
            buttons: []
        }

        const wrapper = mount(HeroSection, {
            propsData: {
                ctx
            }
        })

        const heroBody = wrapper.find('[data-testid=hero-body]')
        expect(heroBody.exists()).toBeFalsy()

        const heroButtons = wrapper.find('[data-testid=hero-buttons]')
        expect(heroButtons.exists()).toBeFalsy()
    })

    it("Clicking a button has a response - WIP", async () => {
        const ctx = {
            heading: null,
            body: null,
            image: [],
            buttons: [
                { title: 'button a', link: 'a-link.com/subdfolder' },
                { title: 'button b', link: 'another-link.com/subfolder' }
            ]
        }

        const wrapper = mount(HeroSection, {
            propsData: {
                ctx
            }
        })

        const heroButtons = wrapper.find('[data-testid=hero-button]')
        expect(heroButtons.exists()).toBeTruthy()
    })
})
