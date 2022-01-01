import Footer from '../../components/Footer';
import { shallow } from 'enzyme';

describe("Cuando se inicia la aplicación", ()=>{
    it("Debería cargar los derechos reservados", ()=>{
        const wrapper = shallow( <Footer /> )
        const derechos = wrapper.find("p").props().children
        const textoEsperado = "All rights reserved - JPC."
        expect(derechos).toEqual(textoEsperado)
    })
})