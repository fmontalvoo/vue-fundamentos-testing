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

    test('El contador debe incrementar en 1 al hacer click en el boton "+"', async () => {
        // Arrange
        const h2 = component.find('h2');
        const btnPlus = component.find('button.plus');

        // Act
        await btnPlus.trigger('click');

        // Assert
        expect(component.vm.counter).toEqual(2);
        expect(h2.text()).toContain('4');
    });
});