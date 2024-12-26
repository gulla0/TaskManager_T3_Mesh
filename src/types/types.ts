export interface Task {
  id: string;
  text: string;
  userId?: string;
}

type User = {
    id: string;
    name?: string; // Add other fields as needed
  };
  