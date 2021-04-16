import achievementFilterReducer from '../src/redux/achievementFilter';
import achievementsVisibleReducer from '../src/redux/achievementsVisible';
import balanceReducer from '../src/redux/coinBalance';
import achievementsCompleteReducer from '../src/redux/achievementsComplete';
import {achievementsList} from '../src/components/achievementsList';
import pinReducer from '../src/redux/createPIN'
import modalTaskReducer from '../src/redux/createTaskModal';
import currentDayReducer from '../src/redux/currentDay';
import dailyTaskModalReducer from '../src/redux/dailyTaskModal';
import difficultyReducer from '../src/redux/difficulty';
import difficultyCheckedReducer from '../src/redux/difficultyCheckedReducer'
import editDailyReducer from '../src/redux/editDailyTaskModal'
import editTaskReducer from '../src/redux/editTaskModal'
import loginReducer from '../src/redux/firstLogin'
import healthBarReducer from '../src/redux/healthBarPoint'
import hintReducer from '../src/redux/hint'
import hungerbarPointReducer from '../src/redux/hungerbarPoint'
import hygienebarPointReducer from '../src/redux/hygienebarPoint'
import marketplaceInventoryReducer from '../src/redux/marketplaceInventory'
import marketplaceItemsBoughtReducer from '../src/redux/marketplaceItemsBought'
import hungerReducer from "../src/redux/hungerbarPoint"
import funReducer from "../src/redux/funbarPoint"
import modalVisibleReducer from '../src/redux/modalVisible'
import petInfoObj from '../src/redux/petInfo'
import petInventoryReducer from '../src/redux/petInventory'
import {ItemInventory} from "../src/components/ItemInventory";
import petMVR from '../src/redux/petModalVisible'
import selectedDateReducer from '../src/redux/selectedDate'
import selectedMarketItemReducer from '../src/redux/selectedMarketItem'
import selectedPetItemReducer from '../src/redux/selectedPetItem';
import statsVisibleReducer from '../src/redux/statsVisible';
import statTrackerReducer from '../src/redux/statTracker';
import { StatsData } from '../src/components/StatsData';
import taskEditIndexReducer from '../src/redux/taskEditIndex';
import taskFilterReducer from '../src/redux/taskFilter';
import taskInputReducer from '../src/redux/taskInput';
import timeOfBarsReducer from '../src/redux/timeOfBars';
import weatherStatusReducer from '../src/redux/weatherStatus';

describe ("Testing hunger bar point reducer", () => {

    it('should return the initial state', () => {
        expect(hungerReducer(undefined, {})).toEqual(5)
    })

    it('should handle HUNGERBARINCREASE', () => {
        expect(hungerReducer(undefined, {type:"HUNGERBARINCREASE", data:2})).toEqual(7)
    })

    it('should handle HUNGERBARDECREASE', () => {
        expect(hungerReducer(undefined, {type:"HUNGERBARDECREASE", data:2})).toEqual(3)
    })
    it('should not go below 0', () => {
        expect(hungerReducer(3, {type:"HUNGERBARDECREASE", data:5})).toEqual(0)
    })
});

describe ("Testing fun bar point reducer", () => {

    it('should return the initial state', () => {
        expect(funReducer(undefined, {})).toEqual(5)
    })

    it('should handle FUNBARINCREASE', () => {
        expect(funReducer(undefined, {type:"FUNBARINCREASE", data:2})).toEqual(7)
    })

    it('should handle FUNBARDECREASE', () => {
        expect(funReducer(undefined, {type:"FUNBARDECREASE", data:2})).toEqual(3)
    })

    it('should not go below 0', () => {
        expect(funReducer(3, {type:"FUNBARDECREASE", data:5})).toEqual(0)
    })
});

describe('Testing achievement filter',()=>{
    it('should return the initial state', () => {
        expect(achievementFilterReducer(undefined, {})).toEqual('beginner')
    });
    it('should handle FILTER_CHANGE with beginner', () => {
        expect(achievementFilterReducer(undefined, {type:"FILTER_CHANGE", data:'beginner'})).toEqual('beginner');
    });
    it('should handle FILTER_CHANGE with intermediate', () => {
        expect(achievementFilterReducer(undefined, {type:"FILTER_CHANGE", data:'intermediate'})).toEqual('intermediate');
    });
    it('should handle FILTER_CHANGE with hard', () => {
        expect(achievementFilterReducer(undefined, {type:"FILTER_CHANGE", data:'hard'})).toEqual('hard');
    });
});

describe('Testing achievement complete', ()=>{
    it('should return initial state', ()=>{
        expect(achievementsCompleteReducer(undefined,{})).toEqual(achievementsList);
    });
    //ACH_PROGRESS, ACH_REWARD
});


describe('Testing achievement visibility', ()=>{
    it('should return initial state', ()=>{
        expect(achievementsVisibleReducer(undefined,{})).toEqual(false)
    });
    it('should handle ACH_ON', () => {
        expect(achievementsVisibleReducer(undefined, {type:"ACH_ON", data:'true'})).toEqual(true);
    });
    it('should handle ACH_OFF', () => {
        expect(achievementsVisibleReducer(undefined, {type:"ACH_OFF", data:'false'})).toEqual(false);
    });
});

describe('Testing coin balance',()=>{
    it('should return initial state', ()=>{
        expect(balanceReducer(undefined,{})).toEqual(100)
    });
    it('should handle BUY', () => {
        expect(balanceReducer(undefined, {type:"BUY", data:5})).toEqual(100-5);
    });
    it('should handle REWARD', () => {
        expect(balanceReducer(undefined, {type:"REWARD", data:5})).toEqual(100+5);
    });
});

describe('Testing create pin',()=>{
    it('should return initial state', ()=>{
        expect(pinReducer(undefined,{})).toEqual('');
    });
    it('should handle CREATE_PIN', () => {
        expect(pinReducer(undefined, {type:"CREATE_PIN", data:'1234'})).toEqual('1234');
    }); 
});

describe('Testing create task model',()=>{
    it('should return initial state', ()=>{
        expect(modalTaskReducer(undefined,{})).toEqual(false)
    });
    it('should handle TASK_OFF', () => {
        expect(modalTaskReducer(undefined, {type:"TASK_OFF", data:false})).toEqual(false);
    });
    it('should handle TASK_ON', () => {
        expect(modalTaskReducer(undefined, {type:"TASK_ON", data:true})).toEqual(true);
    });
});

//curentDateTime


describe('Testing current day',()=>{
    const date = new Date();
    const temp = [date.getDate(), date.getMonth(), date.getFullYear()].join(',');
    it('should return initial state', ()=>{
        expect(currentDayReducer(undefined,{})).toEqual(temp)
    });
    it('should handle UPDATE_DATE', () => {
        const date1 = new Date();
        const temp1 = [date1.getDate(), date1.getMonth(), date1.getFullYear()].join(',');
        expect(currentDayReducer(undefined, {type:"UPDATE_DATE", data:temp1})).toEqual(temp1);
    });
});

describe('Testing daily task modal',()=>{
    it('should return initial state', ()=>{
        expect(dailyTaskModalReducer(undefined,{})).toEqual(false)
    });
    it('should handle DAILY_TASK_OFF', () => {
        expect(dailyTaskModalReducer(undefined, {type:"DAILY_TASK_OFF", data:false})).toEqual(false);
    });
    it('should handle DAILY_TASK_ON', () => {
        expect(dailyTaskModalReducer(undefined, {type:"DAILY_TASK_ON", data:true})).toEqual(true);
    });
});

//dailyTasks
//datedTasks
//daysChecked

describe('Testing difficulty',()=>{
    it('should return initial state', ()=>{
        expect(difficultyReducer(undefined,{})).toEqual('easy')
    });
    it('should handle EASY', () => {
        expect(difficultyReducer(undefined, {type:"EASY", data:'easy'})).toEqual('easy');
    });
    it('should handle MEDIUM', () => {
        expect(difficultyReducer(undefined, {type:"MEDIUM", data:'medium'})).toEqual('medium');
    });
    it('should handle HARD', () => {
        expect(difficultyReducer(undefined, {type:"HARD", data:'hard'})).toEqual('hard');
    });
});

describe('Testing difficulty checked reducer',()=>{
    it('should return initial state', ()=>{
        expect(difficultyCheckedReducer(undefined,{})).toEqual('easy')
    });
    it('should handle EASY_DIFFICULTY', () => {
        expect(difficultyCheckedReducer(undefined, {type:"EASY_DIFFICULTY", data:'easy'})).toEqual('easy');
    });
    it('should handle MEDIUM_DIFFICULTY', () => {
        expect(difficultyCheckedReducer(undefined, {type:"MEDIUM_DIFFICULTY", data:'medium'})).toEqual('medium');
    });
    it('should handle HARD_DIFFICULTY', () => {
        expect(difficultyCheckedReducer(undefined, {type:"HARD_DIFFICULTY", data:'hard'})).toEqual('hard');
    });
});

describe('Testing edit daily task modal',()=>{
    it('should return initial state', ()=>{
        expect(editDailyReducer(undefined,{})).toEqual(false)
    });
    it('should handle DAILY_EDIT_ON', () => {
        expect(editDailyReducer(undefined, {type:"DAILY_EDIT_ON", data:true})).toEqual(true);
    });
    it('should handle DAILY_EDIT_OFF', () => {
        expect(editDailyReducer(undefined, {type:"DAILY_EDIT_OFF", data:false})).toEqual(false);
    });
});

describe('Testing edit task modal',()=>{
    it('should return initial state', ()=>{
        expect(editTaskReducer(undefined,{})).toEqual(false)
    });
    it('should handle EDIT_ON', () => {
        expect(editTaskReducer(undefined, {type:"EDIT_ON", data:true})).toEqual(true);
    });
    it('should handle EDIT_OFF', () => {
        expect(editTaskReducer(undefined, {type:"EDIT_OFF", data:false})).toEqual(false);
    });
});

describe('Testing first login',()=>{
    it('should return initial state', ()=>{
        expect(loginReducer(undefined,{})).toEqual(1)
    });
    it('should handle FIRST', () => {
        expect(loginReducer(undefined, {type:"FIRST",data:''})).toEqual(0);
    });
});

describe('Testing health bar point',()=>{
    it('should return initial state', ()=>{
        expect(healthBarReducer(undefined,{})).toEqual(5)
    });
    it('should handle INCREASE', () => {
        expect(healthBarReducer(undefined, {type:"INCREASE",data:5})).toEqual(5+5);
    });
    it('should handle DECREASE', () => {
        expect(healthBarReducer(undefined, {type:"DECREASE",data:5})).toEqual(5-5);
    });
});

describe('Testing hint',()=>{
    it('should return initial state', ()=>{
        expect(hintReducer(undefined,{})).toEqual('')
    });
    it('should handle CREATE_HINT', () => {
        expect(hintReducer(undefined, {type:"CREATE_HINT",data:'this is a hint'})).toEqual('this is a hint');
    });
});

describe('Testing hunger bar point',()=>{
    it('should return initial state', ()=>{
        expect(hungerbarPointReducer(undefined,{})).toEqual(5)
    });
    it('should handle HUNGERBARINCREASE', () => {
        expect(hungerbarPointReducer(undefined, {type:"HUNGERBARINCREASE",data:4})).toEqual(5+4);
    });
    it('should handle HUNGERBARINCREASE', () => {
        expect(hungerbarPointReducer(undefined, {type:"HUNGERBARINCREASE",data:6})).toEqual(10);
    });
    it('should handle HUNGERBARDECREASE', () => {
        expect(hungerbarPointReducer(undefined, {type:"HUNGERBARDECREASE",data:4})).toEqual(5-4);
    });
    it('should handle HUNGERBARDECREASE', () => {
        expect(hungerbarPointReducer(undefined, {type:"HUNGERBARDECREASE",data:6})).toEqual(0);
    });
});

describe('Testing hygeine bar point',()=>{
    it('should return initial state', ()=>{
        expect(hygienebarPointReducer(undefined,{})).toEqual(5)
    });
    it('should handle HYGIENEBARINCREASE', () => {
        expect(hygienebarPointReducer(undefined, {type:"HYGIENEBARINCREASE",data:4})).toEqual(5+4);
    });
    it('should handle HYGIENEBARDECREASE', () => {
        expect(hygienebarPointReducer(undefined, {type:"HYGIENEBARDECREASE",data:4})).toEqual(5-4);
    });
});

describe('Testing marketplace inventory',()=>{
    let defaultState = ['pizza', 'shoes', 'burger', 'shirt', 'carrot', 'ball', 'water', 'blue_shoes',
					'black_shirt', 'blue_shirt', 'black_shoes', 'red_ball', 'black_ball',
					'shampoo', 'soap'];
    defaultState.sort();

    it('should return initial state', ()=>{
        expect(marketplaceInventoryReducer(undefined,{})).toEqual(defaultState)
    });
    it('should handle FILTER_ALL', () => {
        expect(marketplaceInventoryReducer(undefined, {type:"FILTER_ALL"})).toEqual(defaultState);
    });
    it('should handle FITLER', () => {
        expect(marketplaceInventoryReducer(undefined, {type:"FILTER",data:'food'})).toEqual(['burger','carrot','pizza','water']);
    });
});

describe('Testing marketplace items bought',()=>{
    it('should return initial state', ()=>{
        expect(marketplaceItemsBoughtReducer(undefined,{})).toEqual([])
    });
    it('should handle PURCHASE_GRAY', () => {
        expect(marketplaceItemsBoughtReducer(undefined, {type:"PURCHASE_GRAY",data:'pizza'})).toEqual([]);
    });
    it('should handle PURCHASE_GRAY', () => {
        expect(marketplaceItemsBoughtReducer(undefined, {type:"PURCHASE_GRAY",data:'shampoo'})).toEqual([]);
    });
    it('should handle PURCHASE_GRAY', () => {
        expect(marketplaceItemsBoughtReducer(undefined, {type:"PURCHASE_GRAY",data:'ball'})).toEqual(['ball']);
    });
});

describe('Testing modal visible',()=>{
    it('should return initial state', ()=>{
        expect(modalVisibleReducer(undefined,{})).toEqual(false)
    });
    it('should handle OFF', () => {
        expect(modalVisibleReducer(undefined, {type:"OFF"})).toEqual(false);
    });
    it('should handle ON', () => {
        expect(modalVisibleReducer(undefined, {type:"ON"})).toEqual(true);
    });
});

describe('Testing pet info',()=>{
    const defaultState = {
        name: "name",
        type: "dog",
        emote: "neutral"
      }

    it('should return initial state', ()=>{
        expect(petInfoObj(undefined,{})).toEqual(defaultState)
    });
    it('should handle CHANGE', () => {
        expect(petInfoObj(undefined, {type:"CHANGE",changes:'anything'})).toEqual('anything');
    });
    it('should handle CHANGENAME', () => {
        expect(petInfoObj(undefined, {type:"CHANGENAME",changes:"Young MA"})).toEqual({"emote": "neutral", "name": "Young MA", "type": "dog"});
    });

    it('should handle CHANGE_EMOTION', () => {
        expect(petInfoObj(undefined, {type:"CHANGE_EMOTION",changes:'hunger'})).toEqual({"emote": "hunger", "name": "name", "type": "dog"});
    });
});

//pet inventory

describe('Testing pet modal visible',()=>{
    it('should return initial state', ()=>{
        expect(petMVR(undefined,{})).toEqual('off')
    });
    it('should handle OFF_PET', () => {
        expect(petMVR(undefined, {type:"OFF_PET"})).toEqual('off');
    });
    it('should handle ON_PET', () => {
        expect(petMVR(undefined, {type:"ON_PET",data:'information'})).toEqual('information');
    });
});

describe('Testing selected date',()=>{
    it('should return initial state', ()=>{
        sample = new Date()
        expect(selectedDateReducer(undefined,{})).toEqual(sample)
    });
    sample = new Date()
    it('should handle SET_DATE', () => {
        expect(selectedDateReducer(undefined, {type:"SET_DATE",data:sample})).toEqual(sample);
    });
});

describe('Testing selected market item',()=>{
    it('should return initial state', ()=>{
        expect(selectedMarketItemReducer(undefined,{})).toEqual('ball')
    });
    item = {name:'yoga_pants',cost:12}
    it('should handle SELECT', () => {
        expect(selectedMarketItemReducer(undefined, {type:"SELECT",data:item})).toEqual(item);
    });
});

describe('Testing selected pet item',()=>{
    it('should return initial state', ()=>{
        expect(selectedPetItemReducer(undefined,{})).toEqual('ball')
    });
    item = {name:'yoga_pants',cost:12}
    it('should handle SELECT_PET', () => {
        expect(selectedPetItemReducer(undefined, {type:"SELECT_PET",data:item})).toEqual(item);
    });
});

describe('Testing stats visible',()=>{
    it('should return initial state', ()=>{
        expect(statsVisibleReducer(undefined,{})).toEqual(false)
    });
    it('should handle STAT_ON', () => {
        expect(statsVisibleReducer(undefined, {type:"STAT_ON"})).toEqual(true);
    });
    it('should handle STAT_OFF', () => {
        expect(statsVisibleReducer(undefined, {type:"STAT_OFF"})).toEqual(false);
    });
});

// describe('Testing stat tracker',()=>{
//     it('should return initial state', ()=>{
//         expect(statTrackerReducer(undefined,{})).toEqual(StatsData)
//     });
//     it('should handle INCREMENT_STAT', () => {
//         expected = {"clothes_bought": {"count": 0, "name": "Clothes bought"}, "clothes_changed": {"count": 0, "name": "Number of times pet has changed clothes"}, "daily_tasks_completed": {"count": 0, "name": "Daily tasks completed"}, "dated_tasks_completed": {"count": 
//         0, "name": "Dated tasks completed"}, "days_logged_row": {"count": 0, "name": "Days logged on in a row"}, "food_bought": {"count": 0, "name": "Food bought"}, "grooming_bought": {"count": 0, "name": "Grooming supply bougth"}, "items_bought": {"count": 1, "name": "Items bought"}, "pet_fed": {"count": 0, "name": "Number of times pet has been fed"}, "pet_wash": {"count": 0, "name": "Number of times pet has been wash"}, "total_coins_gain": {"count": 0, "name": "Total coins gained"}, "total_coins_spent": {"count": 0, "name": "Total coins spent"}, "toys_bought": {"count": 0, "name": "Toys bought"}}
//         expect(statTrackerReducer(undefined, {type:"INCREMENT_STAT",data:'items_bought'})).toEqual(expected); 
//     });
//     it('should handle RESET_STAT', () => {
//         expected = {"clothes_bought": {"count": 0, "name": "Clothes bought"}, "clothes_changed": {"count": 0, "name": "Number of times pet has changed clothes"}, "daily_tasks_completed": {"count": 0, "name": "Daily tasks completed"}, "dated_tasks_completed": {"count": 
//         0, "name": "Dated tasks completed"}, "days_logged_row": {"count": 0, "name": "Days logged on in a row"}, "food_bought": {"count": 0, "name": "Food bought"}, "grooming_bought": {"count": 0, "name": "Grooming supply bougth"}, "items_bought": {"count": 0, "name": "Items bought"}, "pet_fed": {"count": 0, "name": "Number of times pet has been fed"}, "pet_wash": {"count": 0, "name": "Number of times pet has been wash"}, "total_coins_gain": {"count": 0, "name": "Total coins gained"}, "total_coins_spent": {"count": 0, "name": "Total coins spent"}, "toys_bought": {"count": 0, "name": "Toys bought"}}
//         expect(statTrackerReducer(undefined, {type:"RESET_STAT",data:'items_bought'})).toEqual(expected);
//     });
//     const data = [
//        {items_bought: {
//            name:'Items bought',
//            count:0,
//        }},
//        {toys_bought: {
//         name:'Toys bought',
//         count:0,
//         }}
//     ]
//     it('should handle SET_STAT', () => {
//         expect(statTrackerReducer(undefined, {type:"SET_STAT",data:data})).toEqual(expected);
//     });
//     it('should handle ADD_TO_STAT', () => {
//         expect(statTrackerReducer(undefined, {type:"ADD_TO_STAT",data:data})).toEqual(false);
//     });
// });

describe('Testing task edit index',()=>{
    it('should return initial state', ()=>{
        expect(taskEditIndexReducer(undefined,{})).toEqual(-1)
    });
    it('should handle SET_INDEX', () => {
        expect(taskEditIndexReducer(undefined, {type:"SET_INDEX",data:3})).toEqual(3);
    });
});

describe('Testing task filter',()=>{
    it('should return initial state', ()=>{
        expect(taskFilterReducer(undefined,{})).toEqual('daily')
    });
    it('should handle DAILY', () => {
        expect(taskFilterReducer(undefined, {type:"DAILY"})).toEqual('daily');
    });
    it('should handle DATED', () => {
        expect(taskFilterReducer(undefined, {type:"DATED"})).toEqual('dated');
    });
});

describe('Testing task input',()=>{
    it('should return initial state', ()=>{
        expect(taskInputReducer(undefined,{})).toEqual('')
    });
    it('should handle SET_TASK_TEXT', () => {
        expect(taskInputReducer(undefined, {type:"SET_TASK_TEXT",data:'some text'})).toEqual('some text');
    });
});

describe('Testing time of bars',()=>{
    it('should return initial state', ()=>{
        expect(timeOfBarsReducer(undefined,{})).toEqual([new Date(),new Date(),new Date(),new Date()])
    });
    it('should handle TIME_CHANGE', () => {
        state = [new Date(),new Date(),new Date(),new Date()]
        x = new Date()
        temp = [x,state[1],state[2],state[3]]
        expect(timeOfBarsReducer(undefined, {type:"TIME_CHANGE",data:x})).toEqual(temp);
    });
    it('should handle TIME_FEED_CHANGE', () => {
        state = [new Date(),new Date(),new Date(),new Date()]
        x = new Date()
        temp = [state[0],x,state[2],state[3]]
        expect(timeOfBarsReducer(undefined, {type:"TIME_FEED_CHANGE",data:x})).toEqual(temp);
    });
    it('should handle TIME_TOY_CHANGE', () => {
        state = [new Date(),new Date(),new Date(),new Date()]
        x = new Date()
        temp = [state[0],state[1],x,state[3]]
        expect(timeOfBarsReducer(undefined, {type:"TIME_TOY_CHANGE",data:x})).toEqual(temp);
    });
    it('should handle TIME_BATH_CHANGE', () => {
        state = [new Date(),new Date(),new Date(),new Date()]
        x = new Date()
        temp = [state[0],state[1],state[2],x]
        expect(timeOfBarsReducer(undefined, {type:"TIME_BATH_CHANGE",data:x})).toEqual(temp);
    });
});

describe('Testing weather status',()=>{
    it('should return initial state', ()=>{
        expect(weatherStatusReducer(undefined,{})).toEqual('null')
    });
    it('should handle SET', () => {
        //There is information with json object about whether in json.weather[0].main, lets assume this is 'sunny'
        expect(weatherStatusReducer(undefined, {type:"SET",status:'sunny'})).toEqual('sunny');
    });
});

//THE END