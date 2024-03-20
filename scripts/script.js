// array to store types of exercise
const loggedWorkouts = [
    {name: "30 Second Hamstring Stretch", type: "Stretch", duration: "Two 30-second reps", complete: true},
    {name: "Pushups", type: "Strength", duration: "10 reps", complete: true},
    {name: "Jumping Jacks", type: "Cardio", duration: "30 reps", complete: true},
    {name: "Hip Flexor Stretch", type: "Stretch", duration: "Two 30-second reps each side", complete: false}
];

var totalDuration = [1, 2, 1.5, 2];

// workout summary calculation: one to calculate total time spent on workout, one to filter only completed exercises
function calculateTotalDuration(durationArray){
    return durationArray.reduce((total, duration) => total + duration, 0);
}
    calculateTotalDuration(totalDuration);

function filterCompletedExercise(exercises){
    return exercises.filter(loggedWorkout => loggedWorkout.complete === true);
}
    filterCompletedExercise(loggedWorkouts);
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
document.addEventListener('DOMContentLoaded', () => {
    const displayArrayList = (array, elementID) =>{
        const listElement = document.getElementById(elementID);
        listElement.innerHTML = '',
        array.forEach(item =>{
            const listItem = document.createElement('li');
            listItem.textContent = item.displayInfo ? item.displayInfo() : `Name of Exercise: ${this.name} | Type of Exercise: ${this.type} | Duration of Exercise: ${this.duration}`;
            listElement.appendChild(listItem);
            });
        }

    displayArrayList(filterCompletedExercise(loggedWorkouts), 'added-workout');

    document.getElementById('add-new-workout').onclick = () => {
        const name = document.getElementById('exercise-name').value;
        const type = document.getElementById('exercise-type').value;
        const duration = document.getElementById('exercise-duration').value;

        let workout;
            newWorkout = new workout(name, type, duration);


        workouts.push(workout);
        displayArrayList(workouts, 'new-workout');
    };

})