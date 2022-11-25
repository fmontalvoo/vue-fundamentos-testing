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

    test('No debe llamar al api mientras no este el simbolo de pregunta "?"', async () => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer');

        const input = wrapper.find('input');
        await input.setValue('Hola');

        expect(consoleSpy).toHaveBeenCalledTimes(1);
        expect(getAnswerSpy).not.toHaveBeenCalled();
    });
});