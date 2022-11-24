import { shallowMount, mount } from '@vue/test-utils';

import Counter from '@/components/Counter.vue';

describe('Counter.vue', () => {
    test('Debe hacer match con el snapshot', () => {

        const wrapper = shallowMount(Counter);

        expect(wrapper.html()).toMatchSnapshot();
    });
});