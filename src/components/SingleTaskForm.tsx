import { useEffect, useState } from 'react';

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import IEditTask from '@/interfaces/Task/IEditTask';
import ICreateTask from '@/interfaces/Task/ICreateTask';

interface SingleTaskFormProps {
  task?: IEditTask | null;
  hideSubmit?: boolean;
  onCreateSubmit?: (createTaskData: ICreateTask) => void;
  onEditSubmit?: (editTaskData: IEditTask) => void;
  onChange?: (editTaskData: IEditTask) => void;
}

export default function SingleTaskForm(props: SingleTaskFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (props.task) {
      setName(props.task.name);
      setDescription(props.task.description);
      setIsFinished(props.task.finished);
    }
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (props.task && props.onEditSubmit) {
      props.onEditSubmit({taskId: props.task.taskId, name, description, finished: isFinished});
    } else if (props.onCreateSubmit) {
      props.onCreateSubmit && props.onCreateSubmit({name, description});
    }

    setName('');
    setDescription('');
    setIsFinished(false);
  };

  const handleInputChange = (value: string | boolean, field: string) => {
    if (field === 'name') {
      setName(value as string);
    } else if (field === 'description') {
      setDescription(value as string);
    } else if (field === 'isFinished') {
      setIsFinished(value as boolean);
    }

    if (props.task && props.onChange) {
      props.onChange({
        taskId: props.task.taskId,
        name: field === 'name' ? value as string : name,
        description: field === 'description' ? value as string : description,
        finished: field === 'isFinished' ? value as boolean : isFinished
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        type="text"
        placeholder='Task name'
        value={name}
        onChange={(e) => handleInputChange(e.target.value, 'name')}
      />
      <Input
        type="text"
        placeholder='Task description'
        value={description}
        onChange={(e) => handleInputChange(e.target.value, 'description')}
      />
      {
        props.task &&
        <div className='flex items-center gap-2'>
          <Checkbox
            id='finished'
            checked={isFinished}
            onCheckedChange={(e) => handleInputChange(e, 'isFinished')}
          >Finished</Checkbox>
          <label htmlFor="finished">Finished</label>
        </div>
      }

      {
        !props.hideSubmit &&
        <Button color="primary" type="submit">Submit</Button>
      }
    </form>
  );
}