declare interface Task  {
    id: number;
    text: string;
    completed: boolean;
    createdAt: string;
    completedAt?: string;
  }