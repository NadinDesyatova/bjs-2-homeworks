class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;  
  }

  addClock(newTime, callback) {
  	if (newTime.length === 0 || callback === undefined ) {
	  throw new Error('Отсутствуют обязательные аргументы');
	}
    
  	let existAlarm = this.alarmCollection.forEach(alarm => {
	  if (alarm.time === newTime) {
	    console.warn('Уже присутствует звонок на это же время');
	  }
    });

    this.alarmCollection.push({callback, time: newTime, canCall: true});
  }

  removeClock(timeForRemove) {
  	this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== timeForRemove);
  }

  getCurrentFormattedTime() {
  	let now = new Date();
  	let hour = now.getHours();
    let minute = now.getMinutes();
    hour = (hour < 10) ? '0' + hour : hour;
    minute = (minute < 10) ? '0' + minute : minute;
  	let currentTime = hour + ':' + minute;
    return currentTime;
  }

  start() {
    if (this.intervalId === null) {
      let startInterval = setInterval(() => {
      	let currentTime = this.getCurrentFormattedTime();
        this.alarmCollection.forEach(alarm => {
          if (alarm.time === currentTime && alarm.canCall === true) {
            alarm.canCall = false;
            alarm.callback();
          } 
        });
      }, 1000)
      
      this.intervalId = startInterval;
    }
  }

  stop() {
  	clearInterval(this.intervalId);
  	this.intervalId = null;
  }

  resetAllCalls(){
  	this.alarmCollection.forEach(alarm => alarm.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}