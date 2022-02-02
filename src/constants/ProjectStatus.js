const projectStatus = {
  'Not assigned': ['Not started', 'Canceled'],
  'Not started': ['In progress', 'Canceled'],
  'In progress': ['Suspended', 'Completed', 'Canceled'],
  Canceled: [],
  Completed: ['Approved'],
  Suspended: ['Waiting for feedback', 'In progress'],
  'Waiting for feedback': ['In progress'],
  Approved: [],
};

export default projectStatus;
