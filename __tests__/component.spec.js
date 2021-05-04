import * as React from 'react';
import renderer from 'react-test-renderer';
import PetCard from '../src/components/petInventoryComponents/PetCard';
import DifficultyOptions from '../src/components/DifficultyOptions'
import Card from '../src/components/marketplaceComponents/Card'
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'

enzyme.configure({ adapter: new Adapter() });


describe('<PetCard />', () => {

    /*it(`WeatherOverlay renders Correctly on Load`, () => {

        const petCardComponent = renderer.create(<PetCard />).toJSON()
        expect(weatherOverlayComponent).toMatchSnapshot();
        });*/

    it('petCard is not null if item exists', () => {

        const petCardComponent = renderer.create(<PetCard item="shoe" />).toJSON();
        expect(petCardComponent).not.toBeNull();
    })

    it("petCard not null", () => {

        expect(PetCard).toBeTruthy();
    })

    // it('checks to see if correct icon shown', () => {
    //     const wrapper = shallow(
    //     <PetCard item="shoe" />
    //     );

    //     const render = wrapper.dive();
    //     icons = render.find('Ionicons');
    //     expect(icons.name).toEqual("clothing")
    // });

    it('petCard snapshot renders',()=>{
        const petCardComponent = renderer.create(<PetCard item="shoe"/>).toJSON()
        expect(petCardComponent).toMatchSnapshot();
    });

    const mockProp = {
        wear:true, category:'food', bought:1, uri:require('../src/test_images/burger.png'), 
    }
    // const initialState = { output: "null" }
    // const mockStore = configureStore()

    it(`PetCard renders correctly`, () => {
        
        // store = mockStore(initialState)
        const comp = <Provider><PetCard event={mockProp} /></Provider>
        const tree = renderer.create().toJSON(comp);

        expect(tree).toMatchSnapshot();
    });

})

// describe('<Card />', ()=>{
//     it('Card snapshot renders',()=>{
//         const CardComponent = renderer.create(<Provider><Card item="burger" Ionicons={'checkmark'}/></Provider>).toJSON()
//         expect(CardComponent).toMatchSnapshot();
//     });
// })


// describe('<DifficultyOptions />',()=>{
//     const initialState = { output: "null" }
//     const mockStore = configureStore()
//     let store

//     it('renders correctly',()=>{
//         store = mockStore(initialState)
//         const diffopComponent = renderer.create(<Provider store={store}><DifficultyOptions /> </Provider>).toJSON()
//         const tree = renderer.create(diffopComponent).toJSON();
//         expect(tree).toMatchSnapshot();
//         // expect(diffopComponent).toMatchSnapshot();
//         // expect(diffopComponent).not.toBeNull();
//         // expect(diffopComponent).toBeTruthy();
        
//     })
// })