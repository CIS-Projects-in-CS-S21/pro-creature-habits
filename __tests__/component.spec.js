import * as React from 'react';
import renderer from 'react-test-renderer';
import PetCard from '../src/components/petInventoryComponents/PetCard';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

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

    it('checks to see if correct icon shown', () => {
        const wrapper = shallow(
        <PetCard item="shoe" />
        );

        const render = wrapper.dive();
        icons = render.find('Ionicons');
        expect(icons.name).toEqual("clothing")
    });

})