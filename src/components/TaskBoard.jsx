// src/components/TaskBoard.jsx
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { kanbanData } from '../data/mockData';
import TaskCard from './TaskCard';

const TaskBoard = () => { // Renamed component
    const [columns, setColumns] = useState(kanbanData);

    const onDragEnd = (result) => {
        // ... (onDragEnd logic remains exactly the same)
        if (!result.destination) return;
        const { source, destination } = result;
        if (source.droppableId === destination.droppableId) {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({ ...columns, [source.droppableId]: { ...column, items: copiedItems } });
        } else {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: { ...sourceColumn, items: sourceItems },
                [destination.droppableId]: { ...destColumn, items: destItems },
            });
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(columns).map(([columnId, column]) => (
                    <div key={columnId}>
                        <h3 className="font-semibold mb-4 text-slate-800 dark:text-white">{column.name} <span className="text-slate-500">{column.items.length}</span></h3>
                        <Droppable droppableId={columnId}>
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className={`p-2 rounded-lg min-h-[500px] ${snapshot.isDraggingOver ? 'bg-slate-200 dark:bg-slate-700' : 'bg-slate-100 dark:bg-slate-900'}`}
                                >
                                    {column.items.map((item, index) => (
                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <TaskCard item={item} />
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                ))}
            </div>
        </DragDropContext>
    );
};

export default TaskBoard; 