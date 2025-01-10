import styles from "../app/page.module.css";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    subject: "",
    age: "",
    description: "",
  });

  function handleTextChange(event) {
    setFormData({
      ...formData,
      description: event.target.value,
    });
  }

  function handleGradeChange(event) {
    setFormData({
      ...formData,
      age: event.target.value,
    });
  }

  function handleSubjectChange(event) {
    setFormData({
      ...formData,
      subject: event.target.value,
    });
  }

  return (
    <div className={styles.page}>
      <form>
        <label htmlFor="select-subject">Subject:</label>
        <select id="select-subject" onSelect={handleSubjectChange} required>
          <option value="">--Please select a subject--</option>
          <option value="">Writing</option>
          <option value="">Mathematics</option>
          <option value="">Biology</option>
          <option value="">Chemistry</option>
          <option value="">Physics</option>
        </select>

        <label htmlFor="select-age">Grade level:</label>
        <select id="select-age" onSelect={handleGradeChange} required>
          <option value="">--Please select a target grade level--</option>
          <option value="">Preschool</option>
          <option value="">Kindergarten</option>
          <option value="">1st Grade</option>
          <option value="">2nd Grade</option>
          <option value="">3rd Grade</option>
          <option value="">4th Grade</option>
          <option value="">5th Grade</option>
          <option value="">6th Grade</option>
          <option value="">7th Grade</option>
          <option value="">8th Grade</option>
          <option value="">9th Grade</option>
          <option value="">10th Grade</option>
          <option value="">11th Grade</option>
          <option value="">12th Grade</option>
        </select>

        <label htmlFor="input-details">Describe your lesson plan:</label>
        <input
          type="text"
          id="input-details"
          rows="5"
          cols="50"
          onChange={handleTextChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
/* 
- consider adding options for college, etc.
*/
