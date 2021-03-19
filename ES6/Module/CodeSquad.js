export default class Codesquad {
    constructor(props){
        this.lectures = ['javascript', 'windows'];
    }

    getLectures() {
        return this.lectures;
    }

    getCurrentHour() {
        return (new Date).getHours();
    }

    getTime() {
        return Date.now();
    }
}