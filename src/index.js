import './styles.css';
import CountdownTimer from './js/timer.js';


const setting = {
   selector: '#timer-1',
   targetDate: new Date('Aug 30, 2020'),
 };

 const SettingTimer = new CountdownTimer(setting);