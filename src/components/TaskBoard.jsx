// src/components/TaskBoard.jsx
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { kanbanData } from '../data/mockData';
import TaskCard from './TaskCard';
import TaskModal from './TaskModal';
import { v4 as uuidv4 } from 'uuid';
import { FiPlus } from 'react-icons/fi';

const TaskBoard = ({ sortOrder, searchQuery }) => {
    const [columns, setColumns] = useState(kanbanData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingTask, setEditingTask] = useState(null);
    const [selectedColumn, setSelectedColumn] = useState(null);

    const onDragEnd = (result) => {
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

    const handleAddTask = (columnId) => {
        setSelectedColumn(columnId);
        setEditingTask(null);
        setIsModalOpen(true);
    };

    const handleEditTask = (task, columnId) => {
        setSelectedColumn(columnId);
        setEditingTask(task);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingTask(null);
        setSelectedColumn(null);
    };

    const handleSaveTask = (savedTask) => {
        if (editingTask) {
            // --- THIS IS THE CORRECTED LOGIC ---
            // Editing an existing task immutably
            const newColumns = { ...columns };
            const column = newColumns[selectedColumn];
            const newItems = [...column.items];
            const taskIndex = newItems.findIndex(item => item.id === savedTask.id);
            if (taskIndex > -1) {
                newItems[taskIndex] = savedTask;
            }
            newColumns[selectedColumn] = { ...column, items: newItems };
            setColumns(newColumns);
        } else {
            // Adding a new task
            const newTask = {
                ...savedTask,
                id: uuidv4(),
                createdAt: new Date().toISOString(),
                tags: ['New'], assignees: [], comments: 0, attachments: 0,
            };
            const newColumns = { ...columns };
            const column = newColumns[selectedColumn];
            const newItems = [newTask, ...column.items];
            newColumns[selectedColumn] = { ...column, items: newItems };
            setColumns(newColumns);
        }

        handleCloseModal();
    };
    
    const handleDeleteTask = (taskId, columnId) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            const newColumns = { ...columns };
            const column = newColumns[columnId];
            column.items = column.items.filter(item => item.id !== taskId);
            setColumns(newColumns);
        }
    };

    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Object.entries(columns).map(([columnId, column]) => {
                        // Filter tasks based on the search query
                        const filteredTasks = column.items.filter(item =>
                            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase())
                        );

                        return (
                            <div key={columnId}>
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-semibold text-slate-800 dark:text-white">{column.name} <span className="text-slate-500">{filteredTasks.length}</span></h3>
                                    <button onClick={() => handleAddTask(columnId)} className="p-1 rounded-md text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700">
                                        <FiPlus size={20} />
                                    </button>
                                </div>
                                <Droppable droppableId={columnId}>
                                    {(provided, snapshot) => (
                                        <div {...provided.droppableProps} ref={provided.innerRef} className={`p-2 rounded-lg min-h-[500px] transition-colors ${snapshot.isDraggingOver ? 'bg-slate-200 dark:bg-slate-700' : 'bg-slate-100 dark:bg-slate-900'}`}>
                                            {filteredTasks // Use the filtered list for sorting and rendering
                                                .slice()
                                                .sort((a, b) => {
                                                    const dateA = new Date(a.createdAt);
                                                    const dateB = new Date(b.createdAt);
                                                    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
                                                })
                                                .map((item, index) => (
                                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                                    {(provided) => (
                                                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                            <TaskCard 
                                                                item={item} 
                                                                onEdit={() => handleEditTask(item, columnId)}
                                                                onDelete={() => handleDeleteTask(item.id, columnId)}
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
                        );
                    })}
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