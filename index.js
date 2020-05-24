const csv = require('fast-csv');

class task{
    constructor(name,time,priority){
        this.name = name;
        this.time = time;
        this.priority = priority;
    }
}

function compare(aTask,bTask) {
    if (aTask.time < bTask.time){
        return -1;
    }
    else if (aTask.time > bTask.time)
    {
        return 1;
    }
    else{
        if(aTask.priority < bTask.priority){
            return 1;
        }
        else if(aTask.priority > bTask.priority){
            return -1;
        }
        else{
            return 0;
        }
    }
  }

var tasks = [] 

csv.parseFile("./data.csv")
  .on('data', function (data) {
    if(data[2] == undefined){
        let tempTask = new task(data[0],data[1],0);
        tasks.push(tempTask)
    }
    else{
        let tempTask = new task(data[0],data[1],parseInt(data[2]));
        tasks.push(tempTask)
    }
  })
  .on('end', function () {
    tasks.sort(compare);
    for(var i=0;i<tasks.length;++i){
        console.log("Current Time " + tasks[i].time + ", Event " + tasks[i].name + " Processed");
    }
  });