import { shallowMount, mount } from '@vue/test-utils';

import Counter from '@/components/Counter.vue';

describe('Counter.vue', () => {
    let component;

    beforeEach(() => {
        component = shallowMount(Counter);
    });

    test('El componente Counter debe crearse', () => {
        expect(component).toBeTruthy();
        expect(component).toBeDefined();
    });

    test('Debe hacer match con el snapshot', () => {
        expect(component.html()).toMatchSnapshot();
    });

    test('El elemento h2 debe tener el texto "Counter"', () => {
        const h2 = component.find('h2');

        expect(h2.exists()).toBeTruthy();
        expect(h2.text()).toContain('Counter');
    });
});