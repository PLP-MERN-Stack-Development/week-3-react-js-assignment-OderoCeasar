import React from 'react';
import TaskManager from '../components/TaskManager';
import Card from '../components/Card';

const Tasks = () => {
  return (
    <Card title="Manage Your Tasks">
      <TaskManager />
    </Card>
  );
};

export default Tasks;