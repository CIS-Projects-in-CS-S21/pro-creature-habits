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
