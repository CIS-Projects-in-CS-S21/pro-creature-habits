import * as React from 'react';
import renderer from 'react-test-renderer';
import Achievement from '../src/components/achievementsComponents/Achievement';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider , createStore, combineReducers} from 'react-redux';
import configureStore from 'redux-mock-store'
import achievementsList from '../src/components/achievementsList';
import achievementsFilter from '../src/components/filterComponents/AchievementsFilter';
import marketplaceFilter from '../src/components/filterComponents/MarketplaceFilter';
import petInventoryFilter from '../src/components/filterComponents/PetInventoryFilter';
import Card from '../src/components/marketplaceComponents/Card'
enzyme.configure({ adapter: new Adapter() });
let store;
import marketplaceItemsBoughtReducer from '../src/redux/marketplaceItemsBought'
const createTestStore = () => {
  const store = createStore(
    combineReducers({
      itemsBought: marketplaceItemsBoughtReducer,
    })
  );
  return store;
}
describe('<Achievement />', () => {
    const mockStore = configureStore();
        let store, wrapper;


    it("achievement not null", () => {

        expect(Achievement).toBeTruthy();
    })

    it("achievement Filter not null", () => {

            expect(achievementsFilter).toBeTruthy();
        })



it('achievement Filter snapshot renders',()=>{
    //store = mockStore(achievementsList)
        const achievementComponent = renderer.create(<achievementsFilter />).toJSON()
        expect(achievementComponent).toMatchSnapshot();
    });

    it("achievement Filter snapshot matches tree", () => {

            // store = mockStore(initialState)
            const comp = <Provider><achievementsFilter/></Provider>
            const tree = renderer.create().toJSON(comp);

            expect(tree).toMatchSnapshot();
        });

        it('marketplace Filter snapshot renders',()=>{
            //store = mockStore(achievementsList)
                const marketplaceComponent = renderer.create(<marketplaceFilter />).toJSON()
                expect(marketplaceComponent).toMatchSnapshot();
            });

            it("marketplace Filter snapshot matches tree", () => {

                    // store = mockStore(initialState)
                    const comp = <Provider><marketplaceFilter/></Provider>
                    const tree = renderer.create().toJSON(comp);

                    expect(tree).toMatchSnapshot();
                });

             it('petInventoryFilter snapshot renders',()=>{
                         //store = mockStore(achievementsList)
                             const petInventoryComponent = renderer.create(<petInventoryFilter />).toJSON()
                             expect(petInventoryComponent).toMatchSnapshot();
                         });

                         it("petInventory Filter snapshot matches tree", () => {

                                 // store = mockStore(initialState)
                                 const comp = <Provider><petInventoryFilter/></Provider>
                                 const tree = renderer.create().toJSON(comp);

                                 expect(tree).toMatchSnapshot();
                             });

})