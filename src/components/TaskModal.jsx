// src/components/TaskModal.jsx
import React, { useState, useEffect } from 'react';

const TaskModal = ({ isOpen, onClose, onSave, task }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        // If we are editing a task, pre-fill the form
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
        } else {
            // If we are adding a new task, clear the form
            setTitle('');
            setDescription('');
        }
    }, [task, isOpen]); // Rerun effect when task or isOpen changes

    if (!isOpen) return null;

    const handleSave = () => {
        onSave({ ...task, title, description });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-xl w-full max-w-md">
                <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">{task ? 'Edit Task' : 'Add New Task'}</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-600 dark:text-slate-300">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="mt-1 block w-full rounded-md bg-slate-100 dark:bg-slate-700 border-transparent focus:border-purple-500 focus:ring-purple-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-600 dark:text-slate-300">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows="4"
                            className="mt-1 block w-full rounded-md bg-slate-100 dark:bg-slate-700 border-transparent focus:border-purple-500 focus:ring-purple-500"
                        ></textarea>
                    </div>
                </div>
                <div className="mt-6 flex justify-end gap-4">
                    <button onClick={onClose} className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500">Cancel</button>
                    <button onClick={handleSave} className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700">Save</button>
                </div>
            </div>
        </div>
    );
};

export default TaskModal;