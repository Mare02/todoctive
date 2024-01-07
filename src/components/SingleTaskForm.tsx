import { useState } from 'react';
import { Card, CardHeader, CardBody, Input, Button } from '@nextui-org/react';

interface SingleTaskFormProps {
  onSubmit: (name: string, description: string) => void;
}

export default function SingleTaskForm({ onSubmit }: SingleTaskFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(name, description);
    setName('');
    setDescription('');
  };

  return (
    <Card>
      <CardHeader>Create task</CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="text"
            label="Task name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            label="Task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button color="primary" type="submit">Submit</Button>
        </form>
      </CardBody>
    </Card>
  );
}