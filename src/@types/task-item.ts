interface TaskItemProps {
    id: string;
    description: string;
    creationDate: Date;
    estimatedDate: Date;
    isDone: boolean;
    color: string;
    tags?: string[];
  }

  export default TaskItemProps