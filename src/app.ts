// Built-in utility: 'Partial'

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string, 
  description: string, 
  date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
} 

// Partial - built-in feature of TypeScript - makes all the properties optional (in the end we need to type cast to the proper type)

// Built-in utility: 'Readonly' - gives extra strickness

const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Sara'); - error

