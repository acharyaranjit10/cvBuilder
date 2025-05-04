// src/contexts/CVContext.jsx
import { createContext, useContext, useReducer } from 'react';

const CVContext = createContext();

const initialState = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
  },
  education: [
    {
      id: '',
      school: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      description: '',
    },
  ],
  experience: [
    {
      id: '',
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    },
  ],
  skills: [],
  projects: [
    {
      id: '',
      name: '',
      description: '',
      url: '',
    },
  ],
  theme: 'light', // 'light' or 'dark'
};

const cvReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PERSONAL_INFO':
      return {
        ...state,
        personalInfo: {
          ...state.personalInfo,
          ...action.payload,
        },
      };
    case 'ADD_EDUCATION':
      return {
        ...state,
        education: [...state.education, action.payload],
      };
    case 'UPDATE_EDUCATION':
      return {
        ...state,
        education: state.education.map((edu) =>
          edu.id === action.payload.id ? { ...edu, ...action.payload } : edu
        ),
      };
    case 'REMOVE_EDUCATION':
      return {
        ...state,
        education: state.education.filter((edu) => edu.id !== action.payload),
      };
    case 'ADD_EXPERIENCE':
      return {
        ...state,
        experience: [...state.experience, action.payload],
      };
    case 'UPDATE_EXPERIENCE':
      return {
        ...state,
        experience: state.experience.map((exp) =>
          exp.id === action.payload.id ? { ...exp, ...action.payload } : exp
        ),
      };
    case 'REMOVE_EXPERIENCE':
      return {
        ...state,
        experience: state.experience.filter((exp) => exp.id !== action.payload),
      };
    case 'UPDATE_SKILLS':
      return {
        ...state,
        skills: action.payload,
      };
    case 'ADD_PROJECT':
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    case 'UPDATE_PROJECT':
      return {
        ...state,
        projects: state.projects.map((proj) =>
          proj.id === action.payload.id ? { ...proj, ...action.payload } : proj
        ),
      };
    case 'REMOVE_PROJECT':
      return {
        ...state,
        projects: state.projects.filter((proj) => proj.id !== action.payload),
      };
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    case 'LOAD_CV':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const CVProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cvReducer, initialState);

  return (
    <CVContext.Provider value={{ state, dispatch }}>
      {children}
    </CVContext.Provider>
  );
};

export const useCV = () => {
  const context = useContext(CVContext);
  if (!context) {
    throw new Error('useCV must be used within a CVProvider');
  }
  return context;
};