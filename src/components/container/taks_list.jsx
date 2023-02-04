import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import {Task} from '../../models/task.class';
import TasksComponent from '../pure/task';


const TaksListComponent = () => {
    
    const defaultTask = new Task('COMPRAS', 'erika@gmail.com',  LEVELS.NORMAL);

    const changeState = (id)=>{
        console.log('TODO: cambiar estado de una tarea')
    }

    return (
        <div>
           <div>
              <h1>
              Your Tasks
              </h1>
              
           </div> 
           <TasksComponent task={defaultTask}></TasksComponent>
        </div>
    );
};



export default TaksListComponent;
