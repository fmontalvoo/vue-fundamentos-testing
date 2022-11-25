import { mount } from '@vue/test-utils';
import flushPromises from 'flush-promises';

import Indecision from '@/components/Indecision.vue';

fdescribe('Indecision.vue', () => {
    let wrapper;
    let consoleSpy;

    const mockData = {
        answer: 'yes',
        forced: false,
        image: 'https://yesno.wtf/assets/yes/6-304e564038051dab8a5aa43156cdc20d.gif'
    };

    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(mockData)
    }));

    beforeEach(() => {
        wrapper = mount(Indecision);

        consoleSpy = jest.spyOn(console, 'info');

        jest.clearAllMocks();
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

    test('Se debe llamar al api cuando esta el simbolo de pregunta "?"', async () => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer');

        const input = wrapper.find('input');
        await input.setValue('Hola?');

        expect(getAnswerSpy).toHaveBeenCalled();

        await flushPromises();

        const img = wrapper.find('img');
        const h1 = wrapper.find('[data-testid="answer"]');
        const h2 = wrapper.find('[data-testid="question"]');

        expect(img.exists()).toBeTruthy();
        expect(img.attributes('src')).toBe(mockData.image);

        expect(h2.text()).toEqual(wrapper.vm.question);
        expect(h1.text()).toEqual(wrapper.vm.showAnswer);
    });

    test('Se debe mostrar un mensaje de error cuando falla la peticion al API', async () => {
        fetch.mockImplementationOnce(() => Promise.reject('Error 500'));

        await wrapper.vm.getAnswer();

        const img = wrapper.find('img');
        expect(img.exists()).toBeFalsy();

        expect(wrapper.vm.answer).toBe('Error al conectar con la API');
    });
});