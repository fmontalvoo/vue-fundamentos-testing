import { mount } from '@vue/test-utils';

import Indecision from '@/components/Indecision.vue';

fdescribe('Indecision.vue', () => {
    let wrapper;
    let consoleSpy;

    beforeEach(() => {
        wrapper = mount(Indecision);

        consoleSpy = jest.spyOn(console, 'info');
    });

    test('El componente Indecision debe crearse', () => {
        expect(wrapper).toBeTruthy();
        expect(wrapper).toBeDefined();
    });

    test('Debe hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
});