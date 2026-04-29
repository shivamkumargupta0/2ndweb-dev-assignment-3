import { useEffect, useState } from 'react';

function StudentRow({ student, onUpdateScore }) {
  const [newScore, setNewScore] = useState(student.score);
  const isPass = student.score >= 40;

  useEffect(() => {
    setNewScore(student.score);
  }, [student.score]);

  const handleSave = () => {
    if (newScore === '') return;
    onUpdateScore(student.id, Number(newScore));
  };

  return (
    <tr className={isPass ? 'pass-line' : 'fail-line'}>
      <td>{student.name}</td>
      <td className="score">{student.score}</td>
      <td>
        <span className={isPass ? 'badge pass' : 'badge fail'}>
          {isPass ? 'Pass' : 'Fail'}
        </span>
      </td>
      <td>
        <div className="update-box">
          <input
            type="number"
            min="0"
            max="100"
            value={newScore}
            onChange={(e) => setNewScore(e.target.value)}
          />
          <button type="button" onClick={handleSave}>
            Save
          </button>
        </div>
      </td>
    </tr>
  );
}

export default StudentRow;
