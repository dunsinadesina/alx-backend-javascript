namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }
    export class React extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for React';
        }
        getAvailableTeacher(): string {
            return this.teacher.experienceTeachingReact > 0 ? `Available teacher: ${this.teacher.firstName}` : 'No available teacher';
        };
    }
}