import StudentRow from './StudentRow';

function StudentTable({ students, onUpdateScore }) {
  return (
    <section className="records">
      <div className="records-title">
        <h3>Student Records</h3>
        <p>{students.length} entries</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <StudentRow
              key={student.id}
              student={student}
              onUpdateScore={onUpdateScore}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default StudentTable;
