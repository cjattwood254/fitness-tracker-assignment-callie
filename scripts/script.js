// array to store types of exercise
const logs = [
    {name: "30 Second Hamstring Stretch", type: "Stretch", duration: "Two 30-second reps"},
    {name: "Pushups", type: "Strength", duration: "10 reps"},
    {name: "Jumping Jacks", type: "Stretching", duration: "30 reps"},
    {name: "Hip Flexor Stretch", type: "Stretch", duration: "Two 30-second reps each side"}
];


// workout summary calculation (come back to later?)
function calculateTotalDuration(durationArray)
    

// create a Workout Class
class Workout{
    constructor(name, type, duration){
        this.name = name;
        this.type = type;
        this,duration = duration;
    }
    displayInfo(){
        return `Name of Exercise: ${this.name} | Type of Exercise: ${this.type} | Duration of Exercise: ${this.duration}`;
    }
}