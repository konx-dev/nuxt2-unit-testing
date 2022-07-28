/*

-- Testing for a generic Hero component --

Assumptions:
The data layer has been setup appropriately with field limits and required flags
The component will only ever be used in relation to the corresponding cms field

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

Tests:

[1.] Component renders and all required fields are output to the template - Requirement tbc
[2.] The heading is rendered and is utilising a H1, dom element: data-testid="hero-header"
[3.] The image has rendered and has an alt tag, dom element: data-testid="hero-image"
[4.] Available optional fields are rendered as expected, dom element: data-testid="hero-body" | data-testid="hero-buttons"
[5.] Unavailable optional fields aren't trying to be rendered
[6.] Clicking the buttons has a response, dom element: data-testid="hero-button"

*/

import { mount } from '@vue/test-utils'
import HeroSection from '@/components/Hero/HeroSection.vue'

const sampleData = {
    heading: 'Hero Demo Title',
    body: 'Hero Demo body copy here',
    image: [
        { title: 'An Image', url: '/an-image-filepath.jpg' }
    ],
    buttons: [
        { title: 'button a', link: 'a-link.com/subdfolder' },
        { title: 'button b', link: 'another-link.com/subfolder' }
    ]
}

describe('HeroSection', () => {
    test('[1.] Component renders and all required fields are output to the template', () => {
        const wrapper = mount(HeroSection, {
            propsData: {
                ctx: {
                    heading: '<p>Data to enrich your <em>online business</em></p>',
                    body: null,
                    image: { title: 'Placeholder image', url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80' },
                    buttons: []
                }
            }
        })

        const heading = wrapper.find('[data-testid=hero-header]')
        const image = wrapper.find('[data-testid=hero-image]')

        expect(heading.exists()).toBeTruthy()
        expect(image.exists()).toBeTruthy()
    })
    // TEST INCOMPLETE
    test('[2.] The heading is rendering the correct field and is utilising a H1, dom element: data-testid="hero-header"', () => {
        const wrapper = mount(HeroSection, {
            propsData: {
                ctx: sampleData
            }
        })
        const h1 = wrapper.find('h1')

        expect(wrapper.find('h1').exists()).toBe(true)
        expect(h1.text()).toContain(sampleData.heading)
    })

    test('[3.] The image has rendered and has an alt tag, dom element: data-testid="hero-image"', () => {
        const wrapper = mount(HeroSection, {
            propsData: {
                ctx: sampleData
            }
        })

        const image = wrapper.find('[data-testid=hero-image]')
        expect(image.exists()).toBeTruthy()
    })
})
