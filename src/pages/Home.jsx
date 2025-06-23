import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className="text-center">
      <Card className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to Task Manager</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Organize your tasks and explore API data with this responsive React app.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/tasks">
            <Button variant="primary">Manage Tasks</Button>
          </Link>
          <Link to="/data">
            <Button variant="secondary">View Data</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;