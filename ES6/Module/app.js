import Codesquad from './CodeSquad';
import _ from './utilitys';

_.loggerlog('my first test data');

const cs = new Codesquad();
_.log(`current hour is ${cs.getCurrentHour()}`);
_.log(`lectures of Codesquad are ${cs.getLectures()}`);
_.log(`lecture time is ${cs.getTime()}`);
