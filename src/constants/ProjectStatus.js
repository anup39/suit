const projectStatus = {
  'Not assigned': ['Not started', 'Canceled'],
  'Not started': ['In progress/started', 'Canceled'],
  'In progress/started': ['Suspended', 'Completed', 'Canceled'],
  Canceled: [],
  Completed: ['Approved'],
  Suspended: ['Waiting for feedback', 'In progress/started'],
  'Waiting for feedback': ['In progress/started'],
  Approved: [],
};

export default projectStatus;
