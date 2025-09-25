// src/components/TaskBoard.jsx
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { kanbanData } from '../data/mockData';
import TaskCard from './TaskCard';
import TaskModal from './TaskModal';
import { v4 as uuidv4 } from 'uuid';
import { FiPlus } from 'react-icons/fi';

const TaskBoard = () => {
    const [columns, setColumns] = useState(kanbanData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingTask, setEditingTask] = useState(null);
    const [selectedColumn, setSelectedColumn] = useState(null);

    const onDragEnd = (result) => { /* ... (onDragEnd logic remains the same) */ };
    const handleAddTask = (columnId) => { /* ... (handleAddTask logic remains the same) */ };
    const handleEditTask = (task, columnId) => { /* ... (handleEditTask logic remains the same) */ };
    const handleCloseModal = () => { /* ... (handleCloseModal logic remains the same) */ };
    const handleSaveTask = (savedTask) => { /* ... (handleSaveTask logic remains the same) */ };

    // New function to handle deleting a task
    const handleDeleteTask = (taskId, columnId) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            const newColumns = { ...columns };
            const column = newColumns[columnId];
            // Filter out the task to be deleted
            column.items = column.items.filter(item => item.id !== taskId);
            setColumns(newColumns);
        }
    };

    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Object.entries(columns).map(([columnId, column]) => (
                        <div key={columnId}>
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold text-slate-800 dark:text-white">{column.name} <span className="text-slate-500">{column.items.length}</span></h3>
                                <button onClick={() => handleAddTask(columnId)} className="p-1 rounded-md text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700">
                                    <FiPlus size={20} />
                                </button>
                            </div>
                            <Droppable droppableId={columnId}>
                                {(provided, snapshot) => (
                                    <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        className={`p-2 rounded-lg min-h-[500px] transition-colors ${snapshot.isDraggingOver ? 'bg-slate-200 dark:bg-slate-700' : 'bg-slate-100 dark:bg-slate-900'}`}
                                    >
                                        {column.items.map((item, index) => (
                                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                                {(provided) => (
                                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                        <TaskCard 
                                                            item={item} 
                                                            onEdit={() => handleEditTask(item, columnId)}
                                                            onDelete={() => handleDeleteTask(item.id, columnId)} // Pass the delete handler
                                                        />
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
            
            <TaskModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSave={handleSaveTask}
                task={editingTask}
            />
        </>
    );
};

export default TaskBoard;