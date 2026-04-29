import { useState } from 'react';
import Header from './components/Header';
import AddStudentForm from './components/AddStudentForm';
import StudentTable from './components/StudentTable';
import './App.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'aditya yadav', score: 78 },
    { id: 2, name: 'anurag', score: 45 },
    { id: 3, name: 'anshuman', score: 90 },
    { id: 4, name: 'yash', score: 32 },
  ]);

  const addStudent = (student) => {
    setStudents([...students, { id: Date.now(), ...student }]);
  };

  const updateScore = (id, score) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, score } : student
      )
    );
  };

  const passed = students.filter((student) => student.score >= 40).length;
  const average =
    students.length === 0
      ? 0
      : Math.round(
          students.reduce((total, student) => total + student.score, 0) /
            students.length
        );

  return (
    <main className="app">
      <Header />

      <AddStudentForm onAddStudent={addStudent} />

      <section className="stats">
        <div className="stat-card">
          <p>Total</p>
          <h2>{students.length}</h2>
        </div>
        <div className="stat-card">
          <p>Passed</p>
          <h2>{passed}</h2>
        </div>
        <div className="stat-card">
          <p>Avg Score</p>
          <h2>{average}</h2>
        </div>
      </section>

      <StudentTable students={students} onUpdateScore={updateScore} />

      <footer>Academic Terminal - Secure Session</footer>
    </main>
  );
}

export default App;
