import { useState } from 'react';

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || score === '') {
      return;
    }

    onAddStudent({
      name: name.trim(),
      score: Number(score),
    });

    setName('');
    setScore('');
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <div className="form-title">
        <span>Register Student</span>
        <small>New Entry</small>
      </div>

      <input
        type="text"
        placeholder="Student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Score (0-100)"
        min="0"
        max="100"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />

      <button type="submit">+ Add</button>
    </form>
  );
}

export default AddStudentForm;
